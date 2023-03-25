import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import questions from '../data/questions';


const inter = Inter({ subsets: ['latin'] })

import { useState } from 'react';
import Quiz from '../components/Quiz';


export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  const onStartClick = () => {
    setShowQuiz(true);
  };

  return (
    <div>
      {showQuiz ? (
        <Quiz questions={questions} />
      ) : (
        <div className="quiz-container">
          <h1 className="quiz-title">Test de Conocimientos sobre Tailwind</h1>
          <p className="quiz-description">
            Responde a estas 50 preguntas para
            medir tus conocimientos en Tailwind. ¡Buena suerte, Aforcita!
          </p>
          <button className="quiz-button" onClick={onStartClick}>
            Comenzar
          </button>
        </div>
      )}
    </div>
  );
}
