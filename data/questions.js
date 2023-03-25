const questions = [
  {
    questionText: '¿Qué es Tailwind CSS?',
    options: [
      'Un lenguaje de programación',
      'Un framework de CSS',
      'Un framework de JavaScript',
      'Una biblioteca de animaciones',
    ],
    correctAnswer: 1,
  },
  {
    questionText: '¿Qué tipo de enfoque utiliza Tailwind CSS?',
    options: [
      'Structure-first',
      'Utility-first',
      'Component-first',
      'Design-first',
    ],
    correctAnswer: 1,
  },
  {
    questionText: '¿Qué archivo se utiliza para configurar Tailwind CSS?',
    options: [
      'tailwind.config.js',
      'tailwind.js',
      'tailwind.config.json',
      'config.tailwind.js',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es el prefijo por defecto para las clases de espacio entre elementos en Tailwind CSS?',
    options: ['gap-', 'm-', 'p-', 'space-'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cómo se especifica un color de fondo en Tailwind CSS?',
    options: ['bg-color', 'bg-colorname', 'color-bg-name', 'background-colorname'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cómo se aplica el estilo hover en Tailwind CSS?',
    options: ['hover:', 'hover-', '@hover', ':hover'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde redondeado en Tailwind CSS?',
    options: ['border-radius', 'border-round', 'round-border', 'rounded'],
    correctAnswer: 3,
  },
  {
    questionText: '¿Qué utilidad de posición se utiliza para centrar un elemento en Tailwind CSS?',
    options: ['center', 'position-center', 'absolute-center', 'relative-center'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cómo se aplica un gradiente en el fondo de un elemento en Tailwind CSS?',
    options: [
      'bg-gradient',
      'gradient-bg',
      'bg-gradient-color',
      'gradient-bg-color',
    ],
    correctAnswer: 2,
  },
  {
    questionText: '¿Qué utilidad se usa para ocultar un elemento en Tailwind CSS?',
    options: ['hidden', 'opacity-0', 'hide', 'invisible'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la propiedad CSS modificada por la clase "text-left" en Tailwind CSS?',
    options: ['text-align', 'line-height', 'text-decoration', 'font-style'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la clase para aplicar una sombra a un elemento en Tailwind CSS?',
    options: ['shadow-box', 'shadow', 'box-shadow', 'shadow-default'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Qué utilidad se usa para establecer el ancho de un elemento en Tailwind CSS?',
    options: ['width-', 'w-', 'w:', 'width:'],
    correctAnswer: 1,
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
    questionText: '¿Qué utilidad se usa para aplicar un margen en Tailwind CSS?',
    options: ['margin-', 'm-', 'mg-', 'mr-'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cuál es la sintaxis para aplicar un estilo solo en pantallas grandes en Tailwind CSS?',
    options: ['lg:style', 'style-lg', 'large:style', 'lg-style'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Qué utilidad se usa para aplicar un relleno en Tailwind CSS?',
    options: ['padding-', 'p-', 'pd-', 'pl-'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cuál es la clase para aplicar una fuente en negrita en Tailwind CSS?',
    options: ['font-weight-bold', 'font-bold', 'text-bold', 'bold'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cuál es la clase para aplicar la fuente en cursiva en Tailwind CSS?',
    options: ['italic', 'text-italic', 'font-italic', 'cursive'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cuál es la clase para eliminar el subrayado en los enlaces en Tailwind CSS?',
    options: ['no-underline', 'underline-none', 'text-no-underline', 'not-underline'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Qué utilidad se usa para aplicar un borde en Tailwind CSS?',
    options: ['border', 'border-width', 'b-', 'bw-'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la clase para establecer la opacidad de un elemento en Tailwind CSS?',
    options: ['opacity-', 'o-', 'op-', 'alpha-'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cómo se define una fuente personalizada en la configuración de Tailwind CSS?',
    options: [
      'Usando el objeto "fontFamily"',
      'Usando el objeto "fontFace"',
      'Usando el objeto "fonts"',
      'Usando el objeto "customFonts"',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es el prefijo para aplicar estilos de tipografía en Tailwind CSS?',
    options: ['font-', 'typo-', 'type-', 'text-'],
    correctAnswer: 3,
  },
  {
    questionText: '¿Cuál es la clase para aplicar una línea de separación en Tailwind CSS?',
    options: ['strike', 'line-through', 'line', 'strikethrough'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Qué utilidad se usa para cambiar el cursor en Tailwind CSS?',
    options: ['cursor-', 'mouse-', 'pointer-', 'cursor:'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde sólido en Tailwind CSS?',
    options: ['solid-border', 'border-solid', 'border', 'solid'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde punteado en Tailwind CSS?',
    options: ['dotted-border', 'border-dotted', 'border', 'dotted'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde doble en Tailwind CSS?',
    options: ['double-border', 'border-double', 'border', 'double'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cuál es la utilidad para cambiar la altura de línea en Tailwind CSS?',
    options: ['line-height-', 'lh-', 'leading-', 'height-line-'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cuál es la utilidad para cambiar la alineación vertical de un elemento en Tailwind CSS?',
    options: ['align-items-', 'vertical-align-', 'align-self-', 'items-align-'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde en la parte superior de un elemento en Tailwind CSS?',
    options: ['border-top', 'top-border', 'border-t', 't-border'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde en la parte inferior de un elemento en Tailwind CSS?',
    options: ['border-bottom', 'bottom-border', 'border-b', 'b-border'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde en la parte izquierda de un elemento en Tailwind CSS?',
    options: ['border-left', 'left-border', 'border-l', 'l-border'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde en la parte derecha de un elemento en Tailwind CSS?',
    options: ['border-right', 'right-border', 'border-r', 'r-border'],
    correctAnswer: 2,
  },
];


export default questions;