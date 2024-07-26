export default Card;

function Card({
  name,
  image,
  cardsValue,
  setCardsValue,
  setScore,
  setBestScore,
}) {
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
          setScore();
        }

        if (counter === 0 && cardsValue !== undefined) {
          let newCards = [...cardsValue];
          newCards.push(name);
          setCardsValue(newCards);
          setScore();
        } else if (counter !== 0 && cardsValue !== undefined) {
          setCardsValue();
          setBestScore();
        }
      }}
      className="card"
    >
      <img src={image} alt="Pokemon" />
      <p>{name}</p>
    </div>
  );
}
