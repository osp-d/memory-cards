export default Card;

function Card({ image, name }) {
  return (
    <div>
      <img src={image} alt="Pockemon" />
      <p>{name}</p>
    </div>
  );
}
