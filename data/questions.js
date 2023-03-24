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
    },
    {
      questionText: '¿Cuál es la clase para aplicar la fuente en cursiva en Tailwind CSS?',
      options: ['italic', 'font-italic', 'text-italic', 'cursive'],
      correctAnswer: 1,
    },
    {
      questionText: '¿Cuál es la clase para eliminar el subrayado en los enlaces en Tailwind CSS?',
      options: ['no-underline', 'underline-none', 'text-no-underline', 'not-underline'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué utilidad se utiliza para aplicar un borde en Tailwind CSS?',
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
        'Usando el objeto "fonts"',
        'Usando el objeto "fontFace"',
        'Usando el objeto "customFonts"',
      ],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es el prefijo para aplicar estilos de tipografía en Tailwind CSS?',
      options: ['font-', 'text-', 'type-', 'typo-'],
      correctAnswer: 1,
    },
    {
      questionText: '¿Cuál es la clase para aplicar una línea de separación en Tailwind CSS?',
      options: ['line-through', 'strike', 'strikethrough', 'line'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué utilidad se utiliza para cambiar el cursor en Tailwind CSS?',
      options: ['cursor-', 'pointer-', 'cursor:', 'mouse-'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es la clase para aplicar un borde sólido en Tailwind CSS?',
      options: ['border-solid', 'solid-border', 'border', 'border-style-solid'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué propiedad se utiliza para aplicar un efecto de transición en Tailwind CSS?',
      options: ['transition', 'transform', 'animate', 'effect'],
      correctAnswer: 1,
    },
    {
      questionText: '¿Cuál es la clase para cambiar la posición de un elemento a "relative" en Tailwind CSS?',
      options: ['relative', 'position-relative', 'pos-relative', 'relative-pos'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué utilidad se utiliza para aplicar una escala en Tailwind CSS?',
      options: ['scale-', 'resize-', 'transform-scale', 'scaling-'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es la clase para aplicar el estilo subrayado en Tailwind CSS?',
      options: ['underline', 'text-underline', 'line-bottom', 'border-bottom'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cómo se aplica un estilo a un elemento solo cuando el modo oscuro está habilitado en Tailwind CSS?',
      options: ['dark:', 'dark-', ':dark', '@dark'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es el prefijo de la clase para aplicar una sombra interna en Tailwind CSS?',
      options: ['inset-shadow', 'inner-shadow', 'shadow-inset', 'shadow-inner'],
      correctAnswer: 2,
    },
    {
      questionText: '¿Cuál es la clase para aplicar una rotación de 45 grados en Tailwind CSS?',
      options: ['rotate-45', 'rotate45', 'rotate(deg45)', 'rotation-45'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cuál es la clase para aplicar una transición personalizada con una función de tiempo cúbico en Tailwind CSS?',
      options: [
        'transition cubic-bezier',
        'transition-custom',
        'cubic-transition',
        'ease-cubic',
      ],
      correctAnswer: 0,
    },
    {
      questionText: '¿Cómo se aplica una clase solo en pantallas que tienen el modo oscuro habilitado en Tailwind CSS?',
      options: ['dark:style', 'dark-style', 'style-dark', '@media (prefers-color-scheme: dark)'],
      correctAnswer: 0,
    },
    {
      questionText: '¿Qué utilidad se utiliza para establecer el espacio entre letras en Tailwind CSS?',
      options: ['letter-spacing-', 'ls-', 'tracking-', 'ltrs-'],
      correctAnswer: 2,
    },
    {
      questionText: '¿Cuál es la sintaxis para aplicar un estilo solo en pantallas con una resolución de 2x en Tailwind CSS?',
      options: ['@media (resolution: 2x)', '2x:style', 'retina:style', 'style-2x'],
      correctAnswer: 2,
    },
    {
      questionText: '¿Qué función de configuración se utiliza para extender una clase existente en lugar de sobrescribirla en Tailwind CSS?',
      options: ['extend()', 'add()', 'merge()', 'concat()'],
      correctAnswer: 0,
    },
  
];

export default questions;