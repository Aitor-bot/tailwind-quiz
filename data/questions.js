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
    options: ['hidden', 'hide-0', 'hide', 'invisible'],
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
    correctAnswer: 3,
  },
  {
    questionText: '¿Cuál es la utilidad de Tailwind CSS para aplicar la propiedad "will-change" de CSS?',
    options: [
      'will-change-',
      'change-',
      'property-',
      'transform-gpu',
    ],
    correctAnswer: 3,
  },
  {
    questionText: '¿Cómo se crea un espaciado interno en un contenedor en Tailwind CSS?',
    options: [
      'padding-inner',
      'inner-space',
      'space-inner',
      'p-inner',
    ],
    correctAnswer: 3,
  },
  {
    questionText: '¿Qué clase se utiliza para crear un diseño en modo cuadrícula en Tailwind CSS?',
    options: [
      'flex',
      'grid',
      'inline',
      'table',
    ],
    correctAnswer: 1,
  },
  {
    questionText: '¿Qué utilidad se usa para establecer el tamaño máximo de un contenedor en altura en Tailwind CSS?',
    options: [
      'max-h-{size}',
      'h-max',
      'height-max',
      'max-height',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cómo se ajusta el espaciado entre columnas en una cuadrícula en Tailwind CSS?',
    options: [
      'gap-col',
      'col-gap',
      'column-space',
      'gap-[medida]',
    ],
    correctAnswer: 3,
  },
  {
    questionText: '¿Qué clase se utiliza para hacer que un elemento ocupe todo el ancho del contenedor en Tailwind CSS?',
    options: [
      'w-full',
      'full-width',
      'width-full',
      'full',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Qué utilidad se usa para cambiar el tamaño de un elemento en función del tamaño de la pantalla en Tailwind CSS?',
    options: [
      'responsive-size',
      'size-responsive',
      'screen-size',
      'w-screen',
    ],
    correctAnswer: 3,
  },
  {
    questionText: '¿Cuál es la clase para crear un efecto de sombra en relieve en Tailwind CSS?',
    options: [
      'shadow-up',
      'shadow-lift',
      'shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl',
      'shadow-outset',
    ],
    correctAnswer: 2,
  },
  {
    questionText: '¿Quién es el mejor jugador de Kukoro?',
    options: [
      'Snow',
      'Bulbsum',
      'Pheralb',
      'JP',
    ],
    correctAnswer: 3,
  },
  {
    questionText: '¿Qué clase se utiliza para crear un efecto de desenfoque en un elemento en Tailwind CSS?',
    options: [
      'blur',
      'fuzzy',
      'shadow-blur',
      'out-of-focus',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cuál es la utilidad para aplicar la propiedad "backdrop-filter" en Tailwind CSS?',
    options: [
      'backdrop-filter-',
      'backdrop-',
      'filter-backdrop-',
      'bd-filter-',
    ],
    correctAnswer: 1,
  },
  {
    questionText: '¿Cómo se configura una animación personalizada en Tailwind CSS?',
    options: [
      'Definiendo una keyframe y agregándola al objeto "animations"',
      'Definiendo una keyframe y agregándola al objeto "keyframes"',
      'Usando el objeto "extend" y definiendo una nueva animación en el objeto "animation"',
      'Usando el objeto "extend" y definiendo una nueva animación en el objeto "keyframes"',
    ],
    correctAnswer: 3,
  },
  {
    questionText: '¿Cómo se aplica el estilo "focus-within" en Tailwind CSS?',
    options: [
      'focus-within:',
      'focus:within',
      'focus_within:',
      '@focus-within',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cómo se puede utilizar una interpolación de CSS personalizada en una clase de Tailwind CSS?',
    options: [
      'Usando la función "theme()" en la configuración de Tailwind',
      'Usando la función "custom()" en la configuración de Tailwind',
      'Usando la función "interpolate()" en la configuración de Tailwind',
      'Usando la función "var()" en la configuración de Tailwind',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Cómo se pueden aplicar estilos específicos a un tema oscuro en Tailwind CSS?',
    options: [
      'Usando la clase "dark:"',
      'Usando la directiva "@dark"',
      'Usando la clase "theme-dark:"',
      'Usando la directiva "@theme-dark"',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Qué utilidad se usa para establecer la posición "sticky" en Tailwind CSS?',
    options: [
      'sticky',
      'position-sticky',
      'sticky-position',
      'stuck',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Qué utilidad se usa para aplicar un desplazamiento en el eje X o Y a un elemento en Tailwind CSS?',
    options: [
      'move',
      'offset',
      'translate-x-[medida] y translate-y-[medida]',
      'shift',
    ],
    correctAnswer: 2,
  },
  {
    questionText: '¿Qué utilidad se usa para establecer el orden de un elemento en un contenedor Flexbox en Tailwind CSS?',
    options: [
      'flex-order',
      'order-flex',
      'order',
      'z-order',
    ],
    correctAnswer: 2,
  },
  {
    questionText: '¿Cuál es el número máximo de capas que se pueden utilizar simultáneamente en Tailwind CSS?',
    options: [
      'No hay límite',
      '32',
      '64',
      '128',
    ],
    correctAnswer: 0,
  },
  {
    questionText: '¿Qué propiedad CSS se modifica al utilizar la clase "scale-x-110" en Tailwind CSS?',
    options: [
      'width',
      'transform',
      'scaleX',
      'scale',
    ],
    correctAnswer: 1,
  }

];


export default questions;