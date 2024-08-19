import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import questions from '../data/questions';


const inter = Inter({ subsets: ['latin'] })

import { useState } from 'react';
import Quiz from '../components/Quiz';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  const onStartClick = () => {
    setShowQuiz(true);
  };

  const shuffledQuestions = shuffleArray(questions);


  return (
    <div>
      <Head>
        <title>Tailwind quiz</title>
      </Head>
      {showQuiz ? (
        <Quiz questions={shuffledQuestions} />
      ) : (
        <div className="quiz-container">
          <h1 className="quiz-title">Test de Conocimientos sobre Tailwind</h1>
          <p className="quiz-description">
            Son 25 preguntas de dificultad variada.<br></br> ¡Buena suerte!
          </p>
          <button className="quiz-button" onClick={onStartClick}>
            Comenzar
          </button>
        </div>
      )}
    </div>
  );
}
