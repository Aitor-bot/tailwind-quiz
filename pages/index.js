import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import { useState } from 'react';
import Quiz from '../components/Quiz';

const questions = 
  [
    {
      questionText: '¿Qué es Tailwind CSS?',
      options: [
        'Un framework de JavaScript',
        'Un framework de CSS',
        'Un lenguaje de programación',
        'Una biblioteca de animaciones',
      ],
      correctAnswer: 1,
    },
    {
      questionText: '¿Qué tipo de enfoque utiliza Tailwind CSS?',
      options: [
        'Component-first',
        'Utility-first',
        'Structure-first',
        'Design-first',
      ],
      correctAnswer: 1,
    },
    {
      questionText: '¿Qué archivo se utiliza para configurar Tailwind CSS?',
      options: [
        'tailwind.config.js',
        'tailwind.config.json',
        'tailwind.js',
        'config.tailwind.js',
      ],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es el prefijo por defecto para las clases de espacio entre elementos en Tailwind CSS?',
      options: ['m-', 'p-', 'space-', 'gap-'],
      correctAnswer: 3,
    },
    {
      questionText: '¿Cómo se especifica un color de fondo en Tailwind CSS?',
      options: ['bg-color', 'bg-colorname', 'background-colorname', 'color-bg-name'],
      correctAnswer: 1,
    },
    {
      questionText: '¿Cómo se aplica el estilo hover en Tailwind CSS?',
      options: ['hover:', 'hover-', ':hover', '@hover'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es la clase para aplicar un borde redondeado en Tailwind CSS?',
      options: ['rounded', 'border-round', 'border-radius', 'round-border'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué utilidad de posición se utiliza para centrar un elemento en Tailwind CSS?',
      options: ['position-center', 'center', 'absolute-center', 'relative-center'],
      correctAnswer: 2,
    },
    {
      questionText: '¿Cómo se aplica un gradiente en el fondo de un elemento en Tailwind CSS?',
      options: [
        'bg-gradient',
        'bg-gradient-color',
        'gradient-bg',
        'gradient-bg-color',
      ],
      correctAnswer: 1,
    },
    {
      questionText: '¿Qué utilidad se utiliza para ocultar un elemento en Tailwind CSS?',
      options: ['hidden', 'hide', 'invisible', 'opacity-0'],
        correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es la propiedad CSS modificada por la clase "text-left" en Tailwind CSS?',
      options: ['text-align', 'text-decoration', 'font-style', 'line-height'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es la clase para aplicar una sombra a un elemento en Tailwind CSS?',
      options: ['shadow', 'box-shadow', 'shadow-box', 'shadow-default'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué utilidad se utiliza para establecer el ancho de un elemento en Tailwind CSS?',
      options: ['w-', 'width-', 'w:', 'width:'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cómo se define una variante personalizada en la configuración de Tailwind CSS?',
      options: [
        'Usando el objeto "variants"',
        'Usando el objeto "custom"',
        'Usando el objeto "plugins"',
        'Usando el objeto "extend"',
      ],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué utilidad se utiliza para aplicar un margen en Tailwind CSS?',
      options: ['m-', 'margin-', 'mg-', 'mr-'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es la sintaxis para aplicar un estilo solo en pantallas grandes en Tailwind CSS?',
      options: ['lg:style', 'lg-style', 'large:style', 'style-lg'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué utilidad se utiliza para aplicar un relleno en Tailwind CSS?',
      options: ['p-', 'padding-', 'pd-', 'pl-'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es la clase para aplicar una fuente en negrita en Tailwind CSS?',
      options: ['font-bold', 'text-bold', 'bold', 'font-weight-bold'],
      correctAnswer: 0,
    }  
];

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
            Responde a estas 30 preguntas progresivamente más difíciles para
            medir tus conocimientos en Tailwind. ¡Buena suerte!
          </p>
          <button className="quiz-button" onClick={onStartClick}>
            Comenzar
          </button>
        </div>
      )}
    </div>
  );
}
