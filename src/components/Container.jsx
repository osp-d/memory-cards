import { useState, useEffect } from 'react';
import Card from './Card';
export default Container;

function Container({ setScore, setBestScore }) {
  const [cards, setCards] = useState([{ name: 'initial' }]);
  const [previousCards, setPreviousCards] = useState();

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

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledCards = shuffle(cards);
  // console.log(previousCards);

  return (
    <div className="container">
      {shuffledCards.map((card) => {
        return (
          <Card
            key={card.name}
            name={card.name}
            image={card.image}
            cardsValue={previousCards}
            setCardsValue={(value) => setPreviousCards(value)}
            setScore={setScore}
            setBestScore={setBestScore}
          />
        );
      })}
    </div>
  );
}
