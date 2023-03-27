import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
const inter = Inter({ subsets: ['latin'] })

import { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get("https://twquiz-api.vercel.app/questions");
        setQuestions(shuffleArray(response.data));
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideos();
  }, []);

  const onStartClick = () => {
    setShowQuiz(true);
  };

  return (
    <div>
      {showQuiz ? (
        questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p>Cargando preguntas...</p>
        )
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
