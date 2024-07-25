import { useState } from 'react';
import '../styles/App.css';
import Container from './Container';
export default App;

function App() {
  const [score, setScore] = useState(0);
  // const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <div className="score-board">
        <div className="score">Score: {score}</div>
        {/* <div className="best-score"></div> */}
      </div>

      <Container setScore={() => setScore(score + 1)} />
    </div>
  );
}
