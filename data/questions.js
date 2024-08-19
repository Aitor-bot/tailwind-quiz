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
      'tailwind.js',
      'tailwind.config.json',
      'config.tailwind.js',
      'tailwind.config.js',
    ],
    correctAnswer: 3,
  },
  {
    questionText: '¿Cuál es el prefijo por defecto para las clases de espacio entre elementos en Tailwind CSS en grid y flexbox?',
    options: ['gap-', 'm-', 'p-', 'space-'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cómo aplicas un color de fondo utilizando Tailwind CSS?',
    options: [
      'bg-color-[color]',
      'background-[color]',
      'bg-[color]-[variant]',
      'background-color-[color]-[variant]',
    ],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cómo se aplica el estilo hover en Tailwind CSS?',
    options: ['hover-', '@hover', ':hover', 'hover:'],
    correctAnswer: 3,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde redondeado en Tailwind CSS?',
    options: ['border-radius', 'border-round', 'round-border', 'rounded'],
    correctAnswer: 3,
  },
  {
    questionText: '¿Qué utilidad se usa para ocultar un elemento en Tailwind CSS?',
    options: ['hidden', 'hide-0', 'hide', 'invisible'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la propiedad CSS modificada por la clase "text-left" en Tailwind CSS?',
    options: ['line-height', 'text-decoration', 'font-style', 'text-align'],
    correctAnswer: 3,
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
    questionText: '¿Cómo se define una variante a medida en la configuración de Tailwind CSS?',
    options: [
      'Usando el objeto "custom"',
      'Usando el objeto "plugins"',
      'Usando el objeto "extend"',
      'Usando el objeto "variants"',
    ],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un margen a todos los lados de un elemento en Tailwind CSS?',
    options: [
      'm-[value]',
      'margin-all-[value]',
      'mx-[value] my-[value]',
      'margin-[value]',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la sintaxis para aplicar un estilo a partir de pantallas grandes en Tailwind CSS?',
    options: ['style-lg', 'large:style', 'lg-style', 'lg:style'],
    correctAnswer: 3,
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
    questionText: '¿Cuál es la clase para eliminar el subrayado en los enlaces en Tailwind CSS?',
    options: ['underline-none', 'text-no-underline', 'not-underline', 'no-underline'],
    correctAnswer: 3,
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
    questionText: '¿Qué utilidad se usa para cambiar el cursor en Tailwind CSS?',
    options: ['cursor-', 'mouse-', 'pointer-', 'cursor:'],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde doble en Tailwind CSS?',
    options: ['double-border', 'border-double', 'border', 'double'],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cuál es la utilidad para cambiar la alineación vertical de un elemento con grid/flexbox en Tailwind CSS?',
    options: ['align-items-', 'vertical-align-', 'align-self-', 'items-align-'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cuál es la clase para aplicar un borde en la parte inferior de un elemento en Tailwind CSS?',
    options: ['border-bottom', 'bottom-border', 'border-b', 'b-border'],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cómo se pueden crear estilos dinámicos en función de los datos de usuario en Tailwind CSS?',
    options: [
      'Usar estilos en línea',
      'Usar JavaScript y las clases de Tailwind',
      'Agregar estilos dinámicos en el archivo tailwind.config.js',
      'Usar las directivas @apply y @screen en combinación con JavaScript',
    ],
    correctAnswer: 1,
  },
];
export default questions;
