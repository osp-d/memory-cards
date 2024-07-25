export default Card;

function Card({ image, name = 'empty', setScore }) {
  return (
    <div onClick={setScore} className="card">
      <img src={image} alt="Pockemon" />
      <p>{name}</p>
    </div>
  );
}
