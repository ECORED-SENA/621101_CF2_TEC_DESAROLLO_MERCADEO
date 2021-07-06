export default {
  global: {
    componenteFormativo: 'Investigación de mercados',
    descripcionCurso:
      'A través de este componente formativo el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración de la investigación de mercados para su idea de negocio o proyecto productivo. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Investigación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Investigación cualitativa',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Investigación cuantitativa',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Proceso de investigación de mercados',
            hash: 'botones',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estadística.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Población estudio',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Muestra',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Muestreo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Frecuencia',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Distribución de frecuencias',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Tabulación',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Graficas',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Tablas',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Medidas de tendencia central',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Desviaciones',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manejo de Software para estadística',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Armstrong, G. & Kotler, P. (2013). Fundamentos de Marketing. Ed. 11. México: Person Educación',
    },
    {
      referencia:
        'Domínguez, J. (2015) Estadística para administración y economía. México. Alfaomega',
    },
    {
      referencia:
        'Dos Santos, M. (2017). Investigación de mercados. Manual Universitario. Madrid. Editorial Díaz de Santos',
    },
    {
      referencia:
        'Hair, J. & Bush R. (2010) Investigación de mercados un ambiente de información digital. Ed. 4. McGraw Hill',
    },
    {
      referencia:
        'Kotler, P; Keller, K. (2016). Dirección de marketing. Ed. 15. México. Pearson',
    },
    {
      referencia:
        'Lind, D. & Marchal, W. (2015) Estadística aplicada a los negocios y la economía. Ed. 16. México. Mcgraw Hill',
    },
    {
      referencia:
        'Malhotra, N. (2008). Investigación de mercados. Ed.5. México. Person Education',
    },
    {
      referencia:
        'Martínez Bencardino, C. (2011). Estadística básica aplicada. Ed. 4. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Martínez, S. (2011) Innovación en la investigación de mercados. Bogotá. Alfaomega',
    },
    {
      referencia:
        'McDaniel, C. & Gates, R. (2016) Investigación de mercados. Ed. 10. México. Cengage Learning',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Bogotá. Ediciones de la U',
    },
    {
      referencia:
        'Prieto, J. E. (2013). Investigación de mercados. Ed. 2. Bogotá: Ecoe Ediciones.',
    },
    {
      referencia:
        'Rosendo, V. (2018). Investigación de mercados. Aplicación al marketing estratégico empresarial. Madrid. Esic',
    },
    {
      referencia:
        'Sampieri, R. (2018) Metodología de la investigación. Las rutas cualitativas, cuantitativas y mixta. México. McGraw Hill.',
    },
  ],
  glosario: [
    {
      termino: 'ANÁLISIS DE MERCADO',
      significado:
        'Es fundamental analizar las tendencias del sector donde se desenvuelve la empresa; porque permite reflejar el comportamiento del mercado y evaluar las principales variables "generales", que pueden incidir en forma negativa o positiva. Esto permite visualizar lo "atractivo" o no de un sector. Las fuentes más comunes de información sobre el particular están en los periódicos especializados, cámaras de comercio e industria, oficinas gubernamentales, bancos, universidades, consultores especializados, internet, programas de radio y tv, etc. ',
    },
    {
      termino: 'DISEÑO DE LA INVESTIGACIÓN',
      significado:
        'Plan global que se aplica para implantar un proyecto de investigación de mercado el objetivo primordial de esta sección es determinar el plan o modelo básico que guiará las fases de recolección y análisis de datos del proyecto de investigación que manejamos. En esta se especifica la estructura, el tipo de información que se recolectará, las fuentes de datos y el procedimiento de recolección de los datos pertinentes.',
    },
    {
      termino: 'ENCUESTA',
      significado:
        'Es un estudio observacional en el cual el investigador busca recaudar datos por medio de un cuestionario prediseñado, y no modifica el entorno ni controla el proceso que está en observación. Las encuestas corresponden a uno de los métodos más utilizados en la investigación debido, fundamentalmente, a que a través de las encuestas se puede recoger gran cantidad de datos tales como actitudes, intereses, opiniones, conocimiento, comportamiento.',
    },
    {
      termino: 'ESTADÍSTICA',
      significado:
        'Ciencia formal que estudia la recolección, análisis e interpretación de datos de una muestra representativa, ya sea para ayudar en la toma de decisiones o para explicar condiciones regulares o irregulares de algún fenómeno o estudio aplicado, de ocurrencia en forma aleatoria o condicional. Sin embargo, la estadística es más que eso, es decir, es el vehículo que permite llevar a cabo el proceso relacionado con la investigación científica',
    },
    {
      termino: 'FUENTES DE INFORMACIÓN PRIMARIA',
      significado:
        'Contienen información original, que ha sido publicada por primera vez y que no ha sido filtrada, interpretada o evaluada por nadie más. Son producto de una investigación o de una actividad eminentemente creativa.',
    },
    {
      termino: 'FUENTES DE INFORMACIÓN SECUNDARIA',
      significado:
        'Contienen información primaria, sintetizada y reorganizada. Están especialmente diseñadas para facilitar y maximizar el acceso a las fuentes primarias o a sus contenidos. Componen la colección de referencia de la biblioteca y facilitan el control y el acceso a las fuentes primarias.',
    },
    {
      termino: 'INVESTIGACIÓN DE MERCADOS',
      significado:
        'Recopilación, registro y análisis sistemático de la información concerniente a la comercialización de productos y servicios. La investigación de mercados es el proceso de recopilación, procesamiento y análisis de información, respecto a temas relacionados con la mercadotecnia, como: clientes, competidores y el mercado. La investigación de mercados puede ayudar a crear el plan estratégico de la empresa, preparar el lanzamiento de un producto o soportar el desarrollo de los productos lanzados dependiendo del ciclo de vida. Con la investigación de mercados, las compañías pueden aprender más sobre los clientes en curso y potenciales.',
    },
    {
      termino: 'INVESTIGACIÓN CUANTITATIVA',
      significado:
        'Es aquella que permite examinar los datos de manera numérica, especialmente en el campo de la Estadística.',
    },
    {
      termino: 'INVESTIGACIÓN CUALITATIVA',
      significado:
        'Es un método de investigación usado principalmente en las ciencias sociales que se basa en cortes metodológicos basados en principios teóricos tales como la fenomenología, hermenéutica, la interacción social.',
    },
    {
      termino: 'MÉTODO DE RECOLECCIÓN DE LA INFORMACIÓN',
      significado:
        'Una vez determinada la necesidad de la investigación concluyente, el investigador debe establecer en forma clara los objetivos de la investigación propuesta y desarrollar una lista específica de las necesidades de información. El siguiente paso en el proyecto formal de investigación es determinar si los datos deseados pueden encontrarse en las fuentes de datos secundarias. Estas fuentes pueden ser internas o externas con respecto a la organización. Generalmente, las fuentes de datos secundarias no satisfacen completamente las necesidades de información del estudio; es entonces cuando el investigador formula un diseño de investigación basado en las fuentes de datos primarias.',
    },
    {
      termino: 'MUESTRA',
      significado:
        'En estadística una muestra es un subconjunto de casos o individuos de una población estadística. Las muestras se obtienen con la intención de inferir propiedades de la totalidad de la población, para lo cual deben ser representativas de la misma.',
    },
    {
      termino: 'MUESTREO',
      significado:
        'Acción de escoger muestras representativas de la calidad o condiciones medias de un todo. Proceso por el cual se seleccionan los individuos que formarán una muestra, con el fin de inferir, mediante su estudio, características de toda la población.',
    },
    {
      termino: 'OBSERVACIÓN',
      significado:
        'La observación es un proceso que detecta y asimila los rasgos de un elemento utilizando los sentidos como instrumentos principales. El término también puede referirse a cualquier dato recogido durante esta actividad. La observación, como proceso de investigación, consiste en "ver" y "oír" los hechos y fenómenos que queremos estudiar, y se utiliza fundamentalmente para conocer hechos, conductas y comportamientos colectivos',
    },
    {
      termino: 'RECOLECCIÓN DE DATOS',
      significado:
        'Se refiere al uso de una gran diversidad de técnicas y herramientas que pueden ser utilizadas por el analista para desarrollar los sistemas de información, los cuales pueden ser la entrevistas, la encuesta, el cuestionario y la observación.',
    },
    {
      termino: 'TABULACIÓN DE DATOS',
      significado:
        'Consiste en presentar los datos estadísticos en forma de tablas o cuadros.',
    },
  ],
  complementario: [
    {
      texto: 'Demoabi (s.f). Muestreo.',
      tipo: 'Video',
      link: 'https://youtu.be/f_Hx0pOJEuY',
    },
    {
      texto: 'Kotler,2016, Dirección de marketing',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273&pg=1 ',
    },
    {
      texto: 'Prettel,2016, Marketing, una herramienta para el crecimiento',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1 ',
    },
    {
      texto: 'Malhotra,2008, Investigación de mercados',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3724&pg=1 ',
    },
    {
      texto: 'McDaniel, C. & Gates, R., 2016, Investigación de mercados',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=2757&pg=1',
    },
    {
      texto: 'Prieto, E. 2013, Investigación de mercados',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=4870549&ppg=1',
    },
    {
      texto:
        'Dos Santos, M, 2017, Investigación de mercados. Manual Universitario. ',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=5190269&ppg=1',
    },
    {
      texto: 'Rosendo, V. (2018). Investigación de mercados.',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=5758460&ppg=1',
    },
    {
      texto: 'Sampieri, R. (2018) Metodología de la investigación.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6443&pg=1',
    },
    {
      texto: 'Martínez, S. (2011) Innovación en la investigación de mercados',
      tipo: 'Libro',
      link:
        'https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/innovacion-en-la-investigacion-de-mercados?location=3 ',
    },
    {
      texto: 'Hair, J. & Bush R. (2010) Investigación de mercados',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=930&pg=1 ',
    },
    {
      texto: 'Martínez Bencardino, C. (2011). Estadística básica aplicada',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=3203901&ppg=1',
    },
    {
      texto: 'Lind, D. & Marchal, W. (2015) Estadística aplicada',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=2266&pg=1',
    },
    {
      texto: 'Domínguez, J. (2015) Estadística para administración y economía',
      tipo: 'Libro',
      link:
        'https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/estadistica-para-administracion-y-economia?location=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Claudia Juliana León Pinto',
        cargo: 'Experta temática',
        centro: 'Centro de servicio empresariales y turísticos',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Jesús Libardo Acero cruz',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Daniel Ricardo Mutis Gómez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
