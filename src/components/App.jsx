import { useState } from 'react';
import '../styles/App.css';
import Container from './Container';
export default App;

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="app">
      <div className="score-board">
        <div className="score">Score: {score}</div>
        <div className="best-score">Best score: {bestScore}</div>
      </div>

      <Container
        setScore={() => setScore(score + 1)}
        setBestScore={() => {
          if (bestScore === 0 && score > 0) {
            setBestScore(score);
            setScore(0);
          } else if (bestScore > 0 && bestScore > score) {
            setScore(0);
          } else if (bestScore > 0 && bestScore < score) {
            setBestScore(score);
            setScore(0);
          }
        }}
      />
    </div>
  );
}
