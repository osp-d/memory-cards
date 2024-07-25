import Card from './Card';
export default Container;

function Container({ setScore }) {
  return (
    <div>
      <Card setScore={setScore} />
    </div>
  );
}
