import { useState, useEffect } from 'react';
import Card from './Card';
export default Container;

function Container({ setScore }) {
  const [cards, setCards] = useState([{ name: 'initial' }]);

  useEffect(() => {
    let data = fetch('https://pokeapi.co/api/v2/pokemon?limit=12', {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((response) => {
        return response.results;
      });

    async function getData(data) {
      try {
        let result = await data;
        result = await Promise.all(
          result.map(async (card) => {
            const image = fetch(card.url, { mode: 'cors' })
              .then((response) => response.json())
              .then((response) => {
                return response.sprites.front_default;
              });

            card.image = await image;
            return card;
          })
        );

        setCards(result);
      } catch (error) {
        console.log(error);
      }
    }

    getData(data);
  }, []);

  return (
    <div className="container">
      {cards.map((card) => {
        console.log(card);
        return (
          <Card
            setScore={setScore}
            key={card.name}
            name={card.name}
            image={card.image}
          />
        );
      })}
    </div>
  );
}
