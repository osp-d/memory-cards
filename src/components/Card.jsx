export default Card;

function Card({ name, image, cardsValue, setScore, setCardsValue }) {
  return (
    <div
      onClick={() => {
        let counter = 0;

        if (cardsValue !== undefined) {
          cardsValue.forEach((element) => {
            if (element === name) counter++;
          });
        } else {
          setCardsValue([name]);
          setScore;
        }

        if (counter === 0 && cardsValue !== undefined) {
          let newCards = [...cardsValue];
          newCards.push(name);
          setCardsValue(newCards);
          setScore;
        }
      }}
      className="card"
    >
      <img src={image} alt="Pokemon" />
      <p>{name}</p>
    </div>
  );
}
