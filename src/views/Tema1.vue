<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Investigación de mercados
    .row.mb-5.justify-content-center
      .col-8
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          h2.mb-2 Es la mejor manera de poder conocer a los consumidores y clientes para mejorar la participación y el posicionamiento en el mercado
          span - Jorge Eliécer Prieto Herrera (2013).
    figure.mb-5
      img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
    p.mb-5 La American Marketing Association (AMA, 2004), define la investigación de mercados como la información utilizada para identificar y definir las oportunidades y los problemas de comercialización; generar, refinar y evaluar las acciones de marketing; monitorear el desempeño de la comercialización; y mejorar la comprensión de la comercialización como un proceso. La investigación de mercados especifica la información necesaria para abordar estas cuestiones, diseña el método de recogida de información, administra e implementa el proceso de recogida de datos, analiza los resultados y los comunica junto con sus implicaciones.
      br
      br
      |Para Mahotra (2008) la investigación de mercados es la identificación, recopilación, análisis, difusión y uso sistemático y objetivo de la información con el propósito de mejorar la toma de decisiones relacionadas con la identificación y solución de problemas y oportunidades de mercadotecnia.
      br
      br
      |Se puede definir la investigación de mercados como el proceso de recopilación, procesamiento y análisis de información que ayuda en la creación del plan de mercadeo de una organización, respecto a temas relacionados con el mercadeo como: Clientes, competidores y el mercado.
      br
      br
      | Para Jorge Eliecer Prieto (2013) la investigación de mercados es un excelente medio de apoyo y consulta de la gerencia porque:
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Apoya la creación de estrategias eficaces
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Ayuda en la integración del marketing mix
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Identifica oportunidades de mercado
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Permite conocer al consumidor
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Disminuye los riesgos de inversión
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Determina el tipo de publicidad que se debe hacer
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Visualiza la introducción a un nuevo mercado
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Analiza el sistema de distribución
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Define la política de precios
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Propone el sistema de ventas más apropiado
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Participa en los cambios del producto o servicio
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Mejora la imagen corporativa
    .row.mb-5.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Pronostica la oferta y la demanda de productos y servicios
    p.mb-5 Dando respuesta a la pregunta ¿Por qué hacer una investigación de mercados? Santiago Martínez Vela (2011) nos ilustra el siguiente gráfico.
    .row.mb-5.justify-content-center
      .col-10
        figure.mb-5
          img.mb-3(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen')
          figcaption Fuente: (Martinez, 2011).
    h3 Ética en la investigación de mercados
    p.mb-5 Los dos factores éticos más importantes para la investigación son la confidencialidad y honestidad del cliente. Cada uno de ellos es cuestión de ética. La ética se define como los principios o valores morales que por lo general gobiernan la conducta de un individuo o grupo. La conducta ética no es, sin embargo, una relación unidireccional. Clientes y proveedores, así como trabajo de campo, también deben actuar en forma ética. Las cuestiones éticas van desde consideraciones prácticas estrechamente definidas, como la obligación de un investigador de ser honesto con sus clientes, a cuestiones sociales y filosóficas más amplias, como la responsabilidad de una compañía de preservar el medio ambiente y proteger los derechos de los empleados. Muchos problemas éticos se desarrollan de conflictos entre los diferentes intereses de los dueños de la compañía y sus trabajadores, clientes y comunidad circundante. Los gerentes deben equilibrar lo ideal con lo práctico: la necesidad de producir una ganancia razonable para los accionistas de la compañía con honestidad en las prácticas de negocios, y con consideraciones ambientales y sociales más amplias. (McDaniel,2016)
      br
      br
      |A continuación, en la siguiente tabla se mencionan algunas prácticas No éticas dentro del proceso de investigación de mercados.
    .row.mb-5.justify-content-center
      .col-lg-8
        figure.mb-5
          img.mb-3(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: José María Sainz, 2016.
            thead
              tr
                th.cuadros--rojo.text-white Proveedores de investigación
                th.cuadros--naranja.text-white Clientes de investigación
                th.cuadros--rojo.text-white Trabajo de campo
            tbody
              tr
                td No generar cambios en el precio cuando avanza la investigación
                td Seleccionar un proveedor para la investigación y contactar a otros
                td Usar encuestados profesionales
              tr.tarjeta--gris
                td Permitir subjetividad en la investigación
                td Solicitar asesoría y metodología gratuitas
                td No validar los datos
              tr
                td Abusar de los encuestados 
                td Hacer promesas falsas
                td 
              tr.tarjeta--gris
                td Vender investigación innecesaria
                td Emitir solicitudes de propuesta no autorizadas
                td 
              tr
                td Violar la confidencialidad del cliente 
                td 
                td 
    #t_1_1_1.titulo-segundo
      h2 1.1 Investigación cualitativa
    .row.mb-5.justify-content-center
      .col-6
        p Toda investigación inicia con una idea que se desarrolla paulatinamente. Para comenzar una investigación se necesita conocer las rutas que han sido construidas por las comunidades científicas para estudiar cualquier tema, fenómeno o planteamiento. Según (Sampieri, 2018) hay tres rutas fundamentales: la cuantitativa, la cualitativa y la mixta. 

          br
          br
          |La investigación cualitativa se enfoca en comprender los fenómenos, explorándolos desde la perspectiva de los participantes en su ambiente natural y en relación con el contexto. El enfoque cualitativo se selecciona cuando el propósito es examinar la forma en que ciertos individuos perciben y experimentan fenómenos que los rodean, profundizando en sus puntos de vista, interpretaciones y significados (Lindlof y Taylor, 2018; Punch, 2014, Lichtman, 2013, Morse, 2012, Encyclopedia of Educational Psychology, 2008).
          br
          br
          |Una investigación cualitativa se requiere cuando las necesidades de información demandan argumentos específicos, evaluación de reacciones, profundización en los conceptos y valores, detección de motivadores y valoración de las emociones generadas con un planteamiento. este enfoque precisa el soporte y ejecución de un profesional en el área de psicología, idealmente con conocimientos de mercado, conducta de consumidor, entre otro (Martinez,2011)
      .col-3
        figure.mb-5
          img.mb-3(src='@/assets/curso/img17.jpg', alt='Texto que describa la imagen')
    p.mb-5 Las limitaciones de la investigación cualitativa según McDaniel (2016) son:
    .row.mb-5.justify-content-center
      .col-4
        .tarjeta-avatar
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Uno de sus inconvenientes es que los éxitos y fracasos de marketing se basan en pequeñas diferencias en actitudes u opiniones sobre una mezcla de marketing y no es tan notoria.  
      .col-4
        .tarjeta-avatar
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Una segunda limitación de los estudios cualitativos es que no necesariamente son representativos de la población de interés para el investigador.
    p.mb-5 Una segunda limitación de los estudios cualitativos es que no necesariamente son representativos de la población de interés para el investigador.
    .row.mb-5.justify-content-center
      .col-7
        ul.lista-ul--color.mb-5
            li 
              i.fas.fa-angle-right
              | Para evaluar un mercado, producto o cliente del que no existe información previa.
            li 
              i.fas.fa-angle-right
              | Identificar y explorar conceptos.
            li 
              i.fas.fa-angle-right
              | Para identificar y aprender de grupos de consumidores específicos.
            li 
              i.fas.fa-angle-right
              | Para identificar patrones de comportamiento, creencias, actitudes, opiniones y motivos.
            li 
              i.fas.fa-angle-right
              | Para establecer prioridades entre creencias, opiniones y actitudes.
            li 
              i.fas.fa-angle-right
              | Para identificar problemas en profundidad y desarrollar modelos para futuras investigaciones.
            li 
              i.fas.fa-angle-right
              | Para testar las primeras impresiones de una encuesta piloto.
            li 
              i.fas.fa-angle-right
              | Para proporcionar experiencias de la interacción de los clientes con los productos.
            li 
              i.fas.fa-angle-right
              | Para evaluar un cuestionario.
            li 
              i.fas.fa-angle-right
              | Para evitar el distanciamiento de los encuestados en preguntas directas y comprometidas.
    .row.mb-5.justify-content-center
      .col-6
        figure.mb-5
          img.mb-3(src='@/assets/curso/img18.svg', alt='Texto que describa la imagen')
    p.mb-5 José María Sainz (2016) explica la evolución del marketing en el siguiente gráfico en donde inicia con un marketing indiscriminado o de masas que pretende abarcar la totalidad del mercado con las mismas estrategias, pasa a un marketing segmentado dirigido a segmentos estratégicos específicos como el público objetivo o target y finalmente al marketing digital (B2B o B2C), en donde se crea una relación continua con el cliente y la comunicación fluye en ambos sentidos. Teniendo esta evolución una reperEn la investigación cualitativa se emplean métodos de recolección de datos que son no cuantitativos, con el propósito de explorar las relaciones sociales y describir la realidad tal como se experimenta. Requiere un profundo entendimiento del comportamiento humano y las razones que lo gobiernan, podría usarse para examinar las actitudes, sentimientos y motivaciones del usuario.cusión importante en el alcance y contenido del plan de marketing.
    #t_1_2.titulo-segundo
      h2 1.2 Investigación cuantitativa
    .row.mb-5.justify-content-center
      .col-6
        figure.mb-5
          img.mb-3(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')

    p.mb-5 La investigación cuantitativa es diseñada para recopilar información de muestras estadísticamente representativas de una población objetivo y es usualmente llevada a cabo entre varios cientos, a veces miles de encuestados, por esta razón la información es generalmente obtenida usando cuestionarios de estructura estandarizada. Este tipo de información es analizada con procesos estadísticos (Palmer, 2012)
      br
      br
      |Una investigación cuantitativa se hace necesaria cuando los objetivos planteados están orientados a encontrar cifras, cuantificar intenciones y formas de proceder, establecer proporciones, diferencias e importancia relativa de los factores evaluados. esta investigación requiere el proceso de muestreo y el soporte de la estadística para buscar información representativa y suficiente del mercado en estudio. (Martinez,2011)
      br
      br
      |Permite examinar los datos de manera numérica, especialmente en el campo de la estadística. Se requiere que entre los elementos del problema de investigación exista una relación cuya naturaleza sea lineal, que sea posible definirlo, limitarlo y saber hacia dónde dirige.
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: (Prettel, 2016).
            thead
              tr
                th.cuadros--rojo.text-white Puntos de comparación
                th.cuadros--naranja.text-white Cualitativa
                th.cuadros--rojo.text-white Cuantitativa
            tbody
              tr
                td Foco de la investigación.  (centro de interés)
                td Cualidad (naturaleza, esencia)
                td Cantidad (cuánto, cuántos)
              tr.tarjeta--gris
                td Conceptos asociados
                td Trabajo de campo, etnografía naturalista.
                td Experimental, empírica, estadística.
              tr
                td Objetivo de la investigación
                td Comprensión, descripción, descubrimiento, generadora de hipótesis.
                td Predicción, control, descripción, confirmación, comprobación de hipótesis
              tr.tarjeta--gris
                td Características del diseño
                td Flexible, envolvente, emergente.
                td Predeterminado, estructurado.
              tr
                td Marco o escenario
                td Natural, familiar
                td Desconocido, artificial.
              tr.tarjeta--gris
                td Muestra
                td Pequeña, no aleatoria, teórica
                td Grande, aleatoria, representativa.
              tr
                td Recogida de datos
                td El investigador como instrumento primario, entrevistas, observaciones.
                td Instrumentos inanimados (escalas, pruebas, encuestas, cuestionarios, computadores).
              tr.tarjeta--gris
                td Modalidad de análisis
                td Inductivo (por el investigador)
                td Deductivo  (por métodos estadísticos)
              tr
                td Hallazgos
                td Comprensivos, holísticos, expansivos
                td Precisos, limitados, reduccionistas
    .row.mb-5.justify-content-center
      .col-6
        figure.mb-5
          img.mb-3(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen')
    p.mb-5 En algunos casos se realiza la investigación mixta que entrelaza a las dos anteriores (cuantitativa y cualitativa) y las mezcla, pero es más que la suma de las dos anteriores e implica su interacción y potenciación. Los métodos mixtos representan un conjunto de procesos sistemáticos, empíricos y críticos de investigación e implican la recolección y el análisis de datos tanto cuantitativos como cualitativos, así como su integración y discusión conjunta, para realizar inferencias producto de toda la información recabada y lograr un mayor entendimiento del fenómeno bajo estudio. (Hernández-Sampieri y Mendoza, 2008). 
    #t_1_3.titulo-segundo
      h2 1.3 Proceso de investigación de mercados  
    .row.mb-5.justify-content-center
      .col-3.d-block.my-auto
        p El proceso de investigación puede entenderse como una secuencia general de seguir para así poder diseñar y llevar a cabo una investigación (Brown y Suter, 2012).       
      .col-7     
        figure.mb-5
          img.mb-3(src='@/assets/curso/img21.svg', alt='Texto que describa la imagen')
    .row.mb-5.justify-content-center
      .col-6
        figure.mb-5
          img.mb-3(src='@/assets/curso/img22.svg', alt='Texto que describa la imagen')
    .cuadros--azul.p-4.mb-3
      h3.text-white.text-center.mb-0 PASOS
    .cuadros--gris.p-5.mb-5 
      .d-flex.mb-3
        .lista-ol--cuadro__vineta
          span 1
        p
          b Definir el problema a investigar. 
          | El primer paso en cualquier proyecto de investigación de mercados es definir el problema. Al hacerlo, el investigador debe considerar el propósito del estudio, la información antecedente pertinente, la información que se necesita y la forma en que se utilizará para la toma de decisiones. Supone hablar con quienes toman las decisiones, entrevistas con los expertos del sector, análisis de los datos secundarios y, quizás, alguna investigación exploratoria. Incluye la formulación de un marco de referencia, objetivos, alcance y preguntas de investigación e hipótesis. (Malhotra, 2008).
      .d-flex
        .lista-ol--cuadro__vineta
          span 2
        p
          b Seleccionar y establecer el diseño de la investigación. 
          | Incluye los siguientes pasos:
          br
          br
          ul.lista-ul--color.mb-5.ms-5
              li 
                i.fas.fa-angle-right
                | Definición del diseño de investigación, exploratoria, descriptiva o causal.
              li 
                i.fas.fa-angle-right
                | Análisis de datos secundarios
              li 
                i.fas.fa-angle-right
                | Técnicas para la obtención de datos cualitativos y cuantitativos. 
              li 
                i.fas.fa-angle-right
                | Diseño de cuestionarios. 
              li 
                i.fas.fa-angle-right
                | Proceso de muestreo y tamaño de la muestra.
              li 
                i.fas.fa-angle-right
                | Plan para el análisis de datos. 
      .d-flex.mb-3
        .lista-ol--cuadro__vineta
          span 3
        p
          b Recolección de datos y análisis. 
          | La recopilación de datos implica contar con personal o un equipo que opere ya sea en el campo o electrónicamente el desarrollo de la investigación. La selección, capacitación, supervisión y evaluación adecuadas del equipo de campo ayuda a minimizar los errores en la recopilación de datos. La preparación de los datos incluye su revisión, codificación, transcripción y verificación. Cada cuestionario o forma de observación se revisa y se corrige. Se asignan códigos numéricos o letras para representar cada respuesta a cada pregunta del cuestionario. Los datos se procesan y se analizan para la toma de decisiones administrativas. (Malhotra, 2008). 
      .d-flex.mb-3
        .lista-ol--cuadro__vineta
          span 4
        p
          b Formular hallazgos. 
          | Todo el proyecto debe documentarse en un informe escrito donde se presenten las preguntas de investigación, el enfoque, el diseño y los procedimientos utilizados para la recopilación y análisis de datos; y donde se incluyan los resultados y los principales resultados. Los hallazgos deben presentarse en un formato comprensible para la toma de decisiones. (Malhotra, 2008). 
      .d-flex.mb-3
        .lista-ol--cuadro__vineta
          span 5
        p
          b Seguimiento y control de marketing. 
          |  Cuando ya esté lista la Investigación de mercados es necesario realizar seguimiento continuo a la información adquirida para realizar ajustes y modificaciones en los posibles problemas que se presenten.
    h5 Definir el problema a investigar
    .row.mb-5.justify-content-center
      .col-5
        figure.mb-5
          img.mb-3(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen')
      .col-6.d-block.my-auto
        p Para McDaniel y Gates (2016) El proceso de investigación se inicia reconociendo un problema u oportunidad de mercadotecnia. La investigación de mercados puede utilizarse para evaluar las opciones de productos, promociones, distribución o fijación de precios. Además, se emplea para encontrar y evaluar nuevas oportunidades de mercado.
    p.mb-5 Estas son algunas preguntas para realizar el planteamiento del problema
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Por qué ha disminuido el desempeño de la empresa en el volumen de ventas?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Se ha implementado la mezcla de mercadeo este año?
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Qué tan satisfechos están mis clientes?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿El mercado está segmentado?
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿El posicionamiento de la empresa es el establecido en los objetivos?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿La imagen proyectada por la empresa es la que los clientes esperan obtener?
    p.mb-5 Al definir el problema a investigar es necesario recopilar la información realizando una investigación exploratoria a continuación McDaniel y Gates (2016) explican el paso a paso:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Conocer el entorno en la toma de decisiones" :icono="require('@/assets/curso/img84.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Conocer el entorno en la toma de decisiones
            p Se necesita información contextual adicional para entender plenamente el problema. Esto podría significar hablar simplemente con los gerentes de marca o los gerentes de nuevos productos, leer informes de la compañía, visitar centros de producción y tiendas minoristas y quizá hablar con proveedores. Cuanto mejor conozca el investigador de mercados el entorno de la toma de decisiones, lo que incluye la industria, la empresa, sus productos o servicios y el mercado objetivo, será más probable que el problema se defina correctamente. Este paso puede llamarse realizar un análisis de la situación. La investigación preliminar o exploratoria puede adoptar varias formas: estudios piloto, encuestas de experiencia, análisis de datos secundarios, análisis de casos de estudios piloto y grupos foco. 
          .col-md-2
            figure
              img(src='@/assets/curso/img90.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Análisis de encuestas de experiencia" :icono="require('@/assets/curso/img85.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Análisis de encuestas de experiencia
            p Implican hablar con individuos conocedores, tanto dentro como fuera de la organización, que pueden ofrecer discernimientos sobre el problema. El investigador puede tener simplemente una lista de temas por abordar como una conversación informal.
          .col-md-2
            figure
              img(src='@/assets/curso/img91.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Análisis de datos secundarios" :icono="require('@/assets/curso/img86.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Análisis de datos secundarios
            p El análisis de datos secundarios es otra forma de investigación exploratoria, los datos secundarios se han recopilado con algún propósito distinto al inmediato. Se puede usar internet para acceder a incontables fuentes de datos secundarios de manera rápida y a un costo mínimo. 
          .col-md-2
            figure
              img(src='@/assets/curso/img92.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Análisis de casos" :icono="require('@/assets/curso/img87.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Análisis de casos
            p El análisis de datos secundarios es otra forma de investigación exploratoria, los datos secundarios se han recopilado con algún propósito distinto al inmediato. Se puede usar internet para acceder a incontables fuentes de datos secundarios de manera rápida y a un costo mínimo. 
          .col-md-2
            figure
              img(src='@/assets/curso/img93.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Grupos de enfoque" :icono="require('@/assets/curso/img88.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Grupos de enfoque
            p Los grupos de enfoque son conversaciones en profundidad, usualmente compuestas de 8 a 12 participantes, dirigidas por un moderador y generalmente limitadas a un concepto, idea o tema particular. La idea general es hacer que lo que una persona dice genere pensamientos y comentarios de otras, creando de este modo una dinámica de grupos. Es decir, la interacción de las respuestas rendirá más información que si el mismo número de personas hubiera contribuido en entrevistas individuales. 
          .col-md-2
            figure
              img(src='@/assets/curso/img94.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Uso de intranets" :icono="require('@/assets/curso/img89.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 Uso de intranets
            p El computador puede ser una herramienta muy poderosa en organizaciones muy grandes con intranets, el investigador tiene la capacidad de determinar si información necesaria o relevante.
          .col-md-2
            figure
              img(src='@/assets/curso/img95.svg', alt='Texto que describa la imagen')















































    p.mb-5 Uno de los métodos utilizados para definir y formular el problema a investigar que indican las razones que originan la necesidad de investigar, plantean las preguntas destacadas y justifican la necesidad de hacer la investigación es:
    h5 Método del árbol de problemas
    p.mb-5 El árbol de problemas es una técnica que se emplea para identificar una situación negativa (problema central), la cual se intenta solucionar analizando relaciones de tipo causa-efecto. Para ello, se debe formular el problema central de modo tal que permita diferentes alternativas de solución, en lugar de una solución única.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mb-3(src='@/assets/curso/img27.svg', alt='Texto que describa la imagen')
    p.mb-5 Luego de haber sido definido el problema central, se exponen tanto las causas que lo generan como los efectos negativos producidos, y se interrelacionan los tres componentes de una manera gráfica.
      br
      br
      | La técnica adecuada para relacionar las causas y los efectos, una vez definido el problema central, es la lluvia de ideas. Esta técnica consiste en hacer un listado de todas las posibles causas y efectos del problema que surjan, luego de haber realizado un diagnóstico sobre la situación que se quiere resolver.   
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mb-3(src='@/assets/curso/img28.svg', alt='Texto que describa la imagen')
          figcaption Fuente: UNESCO, Organización de las naciones unidas para la educación, la ciencia y la cultura.
    h5 Objetivos
    p.mb-5 Los objetivos de la investigación deben basarse en la definición del problema de investigación. Unos objetivos de investigación enunciados formalmente representan una guía para decidir qué pasos hay que dar. La premisa es que si se alcanzan los objetivos, el que decide tiene la información necesaria para resolver el problema (Hair, 2010).
      br
      br
      |Un objetivo claro significa que sea de fácil comprensión, es decir, que se le pueda encontrar rápidamente el sentido; y concreto, que su redacción sea corta, precisa, a fin de evitar largos contenidos que causan confusión. Con la definición del objetivo, el investigador identifica además el segmento meta al cual va a dirigir la investigación (Prettel, 2016).
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mb-3(src='@/assets/curso/img29.jpg', alt='Texto que describa la imagen')
    p.mb-5 Los objetivos de la investigación deben basarse en la definición del problema de investigación. Unos objetivos de investigación enunciados formalmente representan una guía para decidir qué pasos hay que dar. La premisa es que si se alcanzan los objetivos, el que decide tiene la información necesaria para resolver el problema (Hair, 2010).
      br
      br
      |Un objetivo claro significa que sea de fácil comprensión, es decir, que se le pueda encontrar rápidamente el sentido; y concreto, que su redacción sea corta, precisa, a fin de evitar largos contenidos que causan confusión. Con la definición del objetivo, el investigador identifica además el segmento meta al cual va a dirigir la investigación (Prettel, 2016).
    .row.mb-5.justify-content-center
      .col-lg-5
        .cuadros--salmon.p-4
          h5.mb-0.text-white.text-center Objetivo general
        .d-flex
          .cuadros--gris-fit.d-block.p-5
            p.my-auto.d-block Se refiere a la información que a nivel macro se pretende conseguir. es un planteamiento global, derivado de la inquietud original, que abarca y envuelve de manera concreta toda la necesidad de la empresa que requiere la investigación. (Martinez,2011)
      .col-lg-5
        .cuadros--rojo.p-4
          h5.mb-0.text-white.text-center Objetivos específicos
        .d-flex
          .cuadros--gris-fit.d-block.p-5
            p.my-auto Teniendo claridad sobre el objetivo general, este debe ser desplegado en las inquietudes particulares que garanticen la respuesta a todas las cuestiones planteadas. Hay que estructurarlos pensando de lo general a lo particular, empezando con las necesidades de información más globales, hasta terminar en el detalle, que normalmente se refiere a aspectos más “micro” sobre la información. (Martinez,2011)
    p.mb-5 Teniendo claridad sobre el objetivo general, este debe ser desplegado en las inquietudes particulares que garanticen la respuesta a todas las cuestiones planteadas. Hay que estructurarlos pensando de lo general a lo particular, empezando con las necesidades de información más globales, hasta terminar en el detalle, que normalmente se refiere a aspectos más “micro” sobre la información. (Martinez,2011)
    .row.mb-5.justify-content-center
      .col-lg-4
        .cuadros--rojo.p-4
          h5.mb-0.text-white.text-center Objetivo Social
        .d-flex
          .cuadros--gris-fit.d-block.p-5.text-center

            p.my-auto.d-block Tiene en cuenta consumidores, productores, productos o servicios en relación a expectativas y necesidades de los clientes.
      .col-lg-4
        .cuadros--coral.p-4
          h5.mb-0.text-white.text-center Objetivo Económico
        .d-flex
          .cuadros--gris-fit.d-block.p-5.text-center

            p.my-auto Aclara alternativas de beneficio, utilidad o rentabilidad económica.
      .col-lg-4
        .cuadros--naranja.p-4
          h5.mb-0.text-white.text-center Objetivo Administrativo
        .d-flex
          .cuadros--gris-fit.d-block.p-5.text-center

            p.my-auto Facilita la toma de decisiones gerenciales con base en las necesidades de los clientes.
    h5 Alcance
    p.mb-5 El alcance de la investigación de mercados es bastante amplio, puede darse desde observaciones, entrevistas personales, experimentos, estudios de caso, hasta enfoques etnográficos, tratando de encontrar la forma como se comporta el consumidor o la persona objeto de análisis según la meta por alcanzar. (Prieto,2013)
    .row.mb-5.justify-content-center
      .col-lg-8
        figure.mb-5
          img.mb-3(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen') 
    p.mb-5 Para Santiago Martínez Vela (2011), el público objetivo hace parte del alcance de la investigación, ya que genera los parámetros que harán que una u otra persona sea elegible para participar de la muestra diseñada y por ello está clasificado en dos tipos:
    .row.mb-5.justify-content-center
      .col-lg-5
        .cuadros--salmon.p-4
          h5.mb-0.text-white.text-center Del producto/servicio
        .d-flex
          .cuadros--gris-fit.d-block.p-5.text-center
            p.my-auto.d-block define quién es el consumidor, cliente o influenciador actual del producto o servicio.
      .col-lg-5
        .cuadros--rojo.p-4
          h5.mb-0.text-white.text-center De la investigación
        .d-flex
          .cuadros--gris-fit.d-block.p-5.text-center
            p.my-auto estima quién deber ser parte de la muestra para lograr los objetivos. 
    p.mb-5 Algunos ejemplos son: deseos, gustos, preferencias, actitudes, opiniones, percepciones, recordación y creatividad en distintos temas relacionados a la vida de los seres humanos y su desarrollo en el mundo.
    h5 Necesidades de información
    .row.mb-5.justify-content-center
      .col-lg-4
        figure.mb-5
          img.mb-3(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen') 
    p.mb-5 Uno de los pasos más importantes del proyecto es desglosar el problema en preguntas de investigación, porque el cómo se defina el problema de la investigación influye en el resto de los pasos. La tarea del investigador es volver a enunciar las variables originales del problema en la forma de preguntas básicas: cómo, qué, dónde, cuándo y por qué. (Hair,2010)
      br
      br
      |A continuación, se mencionan algunos ejemplos de preguntas claves para el desarrollo de la investigación:
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿El producto o servicio es claro y fácil de comprender?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿A qué precio debería ser vendido?
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Posee ventajas comparativas frente a los productos de la competencia?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Le gusta la presentación del producto?
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Compraría usted este producto sin mayor problema?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿El sitio en donde se consigue es agradable y cómodo?
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Qué productos o servicios reemplazaría usted por este nuevo producto?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Es coherente la publicidad con su utilidad?
    .row.mb-5.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Qué mejora le sugiere al producto o servicio?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿El empaque tiene usos posteriores?
    h5 Establecer el diseño investigación
    p.mb-5 Para establecer el diseño de la investigación es necesario tener la siguiente secuencia:
    .d-flex.mb-3.p-5
        .lista-ol--cuadro__vineta
          span 1
        p
          b Investigación exploratoria: 
          | busca indicios para obtener información, se realiza una Investigación preliminar en la cual se recolecta información primaria y secundaria mediante mecanismos informales y no estructurados.
          br
          br
          |El principal objetivo de la investigación exploratoria consiste en proporcionar una idea preliminar del problema o situación que confronta el investigador. Este tipo de investigación se utiliza normalmente para identificar cursos de acción relevantes, obtener conocimientos adicionales antes de desarrollar un enfoque o definir el problema de forma más precisa. (Rosendo, 2018).
    .row.mb-5.justify-content-center
      .col-lg-8
        figure.mb-5
          img.mb-3(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Estructurada con base en lo planteado por: Naresh k. Malhotra, (2008)
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5 
          p.mb-5 El objetivo de la investigación exploratoria es explorar o examinar una situación para brindar conocimiento y comprensión, y puede utilizarse para cualquiera de los siguientes propósitos:
          ul.lista-ul--color.mb-5
            li 
              i.fas.fa-angle-right
              | Formular un problema o definirlo con mayor precisión.
            li 
              i.fas.fa-angle-right
              | Identificar cursos alternativos de acción.
            li 
              i.fas.fa-angle-right
              | Desarrollar hipótesis.
            li 
              i.fas.fa-angle-right
              | Obtener ideas para desarrollar un enfoque del problema
            li 
              i.fas.fa-angle-right
              | Establecer prioridades para la investigación posterior
    p.mb-5| Jorge Eliecer Prieto (2013) define cuatro métodos para realizar investigación exploratoria:
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img33.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Encuestas de experiencia o entrevista en profundidad (preguntas a personas expertas en un tema específico).      
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img34.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Análisis de datos secundarios (revisión de investigaciones similares).
    .row.mb-5.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img35.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Estudios de caso (averiguación intensiva sobre situaciones afines).
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img36.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Estudios piloto o grupos foco (investigación a pequeña escala con muestreo, poco rigurosa).
    .d-flex.mb-3.p-5
        .lista-ol--cuadro__vineta
          span 2
        p
          b Investigación Concluyente:
          | El objetivo de la investigación concluyente es probar hipótesis específicas y examinar relaciones de causa-efecto. Esto requiere que la información necesaria esté claramente especificada. Se basa en grandes muestras representativas, y los datos se analizan normalmente mediante análisis cuantitativos. Los hallazgos se consideran concluyentes por naturaleza y pueden utilizarse para la toma de decisiones gerenciales. (Rosendo, 2018). 
    .row.mb-1.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/img33.svg' alt='AvatarTop').img-top
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              h6 Descriptiva 
              p Etapa que busca describir los problemas o indicios con mayor detalle, cuantificando el conjunto de métodos y procedimientos que describen a las variables de marketing.
                br
                br
                |Es aquella que busca una representación gráfica de características y fenómenos del mercado y la determinación de la frecuencia con que se usan, tratando de hacer predicciones y determinar el grado de asociación entre sus variables, tal como ocurre en los estudios de perfil de consumidores, potencial del mercado y utilización de un producto seccionado. Las fuentes de datos más usadas en este tipo de investigación son el cuestionario a personas seleccionadas, los datos secundarios y la simulación de escenarios. (Prieto, 2013).
                br
                br
                |Consiste en recopilar datos numéricos para responder preguntas de investigación; da respuestas a las preguntas sobre quién, qué, cuándo, dónde y cómo. En marketing, los ejemplos de la información descriptiva incluyen actitudes, intenciones, preferencias, hábitos de compra, evaluación de las estrategias actuales de mezcla de marketing y datos demográficos de los consumidores. (Hair, 2010).
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/img37.svg' alt='AvatarTop').img-top
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              h6 Causal
              p Penetra en la realidad del estudio para determinar las causas que han originado el problema, se controlar varios factores para determinar cuál de ellos es el causante del problema y tomar decisiones.
                br
                br
                |Es aquella que permite obtener información relevante sobre la relación casusa-efecto en un sistema de mercadeo, como las que se hacen para mirar la incidencia en los volúmenes de venta de los cambios en los niveles de precio. Las fuentes de datos más usadas en este tipo de investigación son el cuestionario a personas seleccionadas, los datos secundarios y la observación. (Prieto,2013)
                br
                br
                |La investigación causal es más apropiada cuando los objetivos incluyen la necesidad de entender qué variables (por ejemplo, publicidad, número de vendedores, precio) inciden en la variable dependiente (ventas, satisfacción de los clientes) (Hair,2010)

      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img38.svg' alt='AvatarTop').img-top
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              h6 Sistemática
              p Utilizada para evaluar un proceso mientras se va dando, encuentra el problema y propone soluciones.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mb-3(src='@/assets/curso/img39.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor

    p.mb-5 En la siguiente tabla (Santos, 2017) nos da ejemplos para los diseños de investigación.
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: José María Sainz, 2016.
            thead
              tr
                <th colspan="2" class="cuadros--azul ; text-white ;"> Proveedores de investigación </th>
                
            tbody.mb-3
              tr
                <td rowspan="6" class="cuadros--mostaza ; text-white ; p-5"> Exploratoria  </td>
              tr.tarjeta--gris
                td Formular problemas precisos
              tr
                td Establecer prioridades de investigación
              tr.tarjeta--gris
                td Eliminar ideas no viables
              tr
                td Desarrollar hipótesis
              tr.tarjeta--gris
                td Desarrollar escalas de medida
            tbody.mb-3
              tr
                <td rowspan="4" class="cuadros--mostaza ; text-white ; p-5"> Descriptiva  </td>
              tr
                td Describir competidores o clientes
              tr.tarjeta--gris
                td Describir segmentos
              tr
                td Implementar medidas, medir el desempeño
            tbody
              tr
                td.cuadros--mostaza.text-white.px-5 Causal
                td.tarjeta--gris Describir competidores o clientes
    h5 Fuentes de información
    p.mb-5 Con el fin de satisfacer las necesidades de información, el investigador puede recopilar datos secundarios, datos primarios o ambos. Los datos secundarios son información que ya existe en algún lugar, que se ha recopilado con anterioridad para otro fin. Hay muchas fuentes de datos secundarios, incluidas las fuentes internas y externas. Los datos primarios consisten en información recopilada para el propósito específico en cuestión. (Rosendo, 2018)
    .row.mb-5.justify-content-center
      .col-lg-8
        figure.mb-5
          img.mb-3(src='@/assets/curso/img40.svg', alt='Texto que describa la imagen') 
    .row.mb-5.justify-content-center
      .col-lg-8
        figure.mb-5
          img.mb-3(src='@/assets/curso/img41.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor    
    .row.mb-5.justify-content-center
      .col-lg-4
        .cuadros--salmon.p-4
          h5.mb-0.text-white.text-center Información secundaria interna
        .d-flex
          .cuadros--gris-fit.d-block.p-5
            p.my-auto.d-block Todas las organizaciones tienen datos internos disponibles en los diferentes departamentos. Por ejemplo, informes de ventas, actividades de publicidad y promoción, información sobre clientes, anteriores proyectos de investigación y desarrollo, informes de fabricación, etc. Las fuentes internas tradicionales de datos secundarios son documentos tales como facturas de ventas, informes de cuentas por cobrar, ventas trimestrales, cartas/comentarios de clientes, pedidos por correo, formularios, informes de solicitudes de crédito, informes de actividades de ventas, estudios previos o formularios de gastos del personal de ventas (Hair, 2010). 
      .col-lg-4
        .cuadros--rojo.p-4
          h5.mb-0.text-white.text-center Información secundaria externa
        .d-flex
          .cuadros--gris-fit.d-block.p-5
            p.my-auto Los datos secundarios externos son recopilados por organismos externos, como gobiernos, asociaciones comerciales, organizaciones sin ánimo de lucro, servicios de investigación de mercados, compañías consultoras, grupos de compradores, inventarios de tiendas y publicaciones académicas y de interés general. Los datos secundarios también se encuentran en fuentes computarizadas como proveedores de información, sitios comerciales de internet, listas de correo o servicios de compensación y logística de mercadotecnia. (Hair,2010)
    p.mb-5 En Colombia se tienen muchas fuentes de datos secundarios:
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p El DANE (Departamento Administrativo Nacional de Estadísticas) 
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p El Banco de la República
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Las Cámaras de Comercio
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p FENALCO (Federación Nacional de Comerciantes)
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p CAMACOL, fuente para investigaciones sobre el sector de la construcción
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Los ministerios del gobierno nacional
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p ICFES - Instituto Colombiano para el Fomento de la Educación Superior
    p.mb-5 Los investigadores pueden visitar sitios en donde se encuentra variedad de datos disponibles para obtener información secundaria, incluida inteligencia competitiva. Aunque mucha información es gratis, otra, como la ofrecida por Nielsen Site Reports, debe comprarse.
      br
      br
      |Según McDaniel (2016) las ventajas en la investigación de mercados al usar información secundaria es la siguiente:
    .tarjeta--gris.d-flex.p-5
      .row
        .col-6
          .d-flex
            img(src='@/assets/curso/img42.svg' alt='AvatarTop' style='width:75px').d-inline-block
            p.d-inline-block.ms-5  Los datos secundarios pueden ayudar a aclarar o redefinir el problema durante el proceso de la investigación exploratoria.
        .col-6
          .d-flex
            img(src='@/assets/curso/img43.svg' alt='AvatarTop' style='width:112px').d-inline-block
            p.d-inline-block.ms-5  Los datos secundarios pueden ofrecer en realidad una solución al problema. Es muy improbable que el problema sea excepcional, existe la posibilidad de que otra persona se haya ocupado ya de un problema muy parecido. 
    div.d-flex.p-5
      .row
        .col-6
          .d-flex
            img(src='@/assets/curso/img44.svg' alt='AvatarTop' style='width:112px').d-inline-block
            p.d-inline-block.ms-4  Los datos secundarios pueden ofrecer opciones a métodos de investigación con datos primarios. Cada proyecto de investigación con datos primarios está diseñado para la situación implicada; en consecuencia, el investigador de mercados siempre debe estar abierto a fuentes que sugieran opciones de investigación. 
        .col-6
          .d-flex
            img(src='@/assets/curso/img45.svg' alt='AvatarTop' style='width:122px').d-inline-block
            p.d-inline-block.ms-5  Los datos secundarios pueden alertar al investigador de mercados de problemas o dificultades potenciales. Como técnicas de recolección impopulares, dificultades con la selección de muestras u hostilidad de los encuestados.
    .tarjeta--gris.d-flex.p-5.mb-5
      .row
        .col-6
          .d-flex
            img(src='@/assets/curso/img46.svg' alt='AvatarTop' style='width:112px').d-inline-block
            p.d-inline-block.ms-3  Los datos secundarios pueden proporcionar información contextual necesaria y aumentar la credibilidad del informe de investigación.
        .col-6
          .d-flex
            img(src='@/assets/curso/img47.svg' alt='AvatarTop' style='width:120px').d-inline-block
            p.d-inline-block.ms-5  Los datos secundarios pueden aportar el marco muestral.
    .row.mb-5.justify-content-center
      .col-lg-10
        .cuadros--salmon.p-4
          h5.mb-0.text-white.text-center Información secundaria en la era digital
        .d-flex
          .cuadros--gris-fit.d-block.p-5
            p.my-auto.d-block Hoy en día y al igual que con otras muchas actividades en los negocios, la existencia de Internet ha revolucionado la forma en que los datos secundarios pueden ser y son recogidos. La aparición de una variedad de motores de búsqueda y la preeminencia de marcas como Google ha hecho la tarea de recolección de datos secundarios mucho más fácil. De hecho, se podría sugerir que Internet ofrece tanta información no clasificada y difuminada que la búsqueda de datos secundarios en la era moderna consiste en determinar qué datos son útiles y cuáles deben ser desechados. 
              br
              br
              |Para los investigadores existen portales y sitios web que permiten acceder a las estadísticas gubernamentales, informes sectoriales y estadísticas útiles sobre la población, comportamientos de uso, etc. Se encuentran en la identificación de los patrones de consumo, en el seguimiento de tendencias, estimación del potencial de mercado, previsión de ventas, selección de zonas comerciales, implementación de la base de datos de clientes o el desarrollo de listas de clientes potenciales. (Dos Santos, 2017).
    h5 Análisis de la situación
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img(src='@/assets/curso/img48.jpg', alt='Texto que describa la imagen') 
    p.mb-5 La información primaria está ligada a la generación de nueva información directa desde la población objetivo y consiste en buscar la información del fenómeno directamente en individuos que comparten una característica particular respecto al fenómeno estudiado. (Neme,2017)
      br
      br
      |Los datos primarios están directamente vinculados con la información que el investigador desarrolla o recopila específicamente para el proyecto de investigación en cuestión y pueden ser investigación cualitativa y cuantitativa. (Rosendo,2018)
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img49.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor
    p.mb-5 El recurso de internet como herramienta preferida de recolección de datos cuantitativos y cualitativos ha tenido el mayor impacto en el cambio de las metodologías de investigación de mercados y de lo que esperan los clientes. las metodologías no ponen en riesgo los resultados, y dan la posibilidad de reducir el trabajo de campo. Para muchos clientes y usuarios de la investigación de mercados, la necesidad de rapidez ha dejado de lado la necesidad de hacer análisis exhaustivos e interpretaciones de los datos y, en algunos casos, la precisión analítica. (Hair,2010)
      br
      br
      |En la siguiente tabla, (Rosendo, 2018) nos explica las diferencias entre datos primarios y secundarios.
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: (Rosendo, 2018).
            thead
              tr
                th
                th.cuadros--azul.text-white Datos primarios
                th.cuadros--azul.text-white Datos secundarios
            tbody
              tr.tarjeta--gris
                td.cuadros--oro Proceso de recopilación
                td Específicamente para el proyecto
                td Para otros propósitos
              tr
                td.cuadros--oro Implicación
                td Alta implicación 
                td Relativamente fácil y rápido 
              tr.tarjeta--gris
                td.cuadros--oro Costo de recopilación
                td Altos
                td Relativamente baratos
              tr
                td.cuadros--oro Tiempo de recopilación
                td Largo
                td Corto
    h3 Recolección de datos
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img50.svg', alt='Texto que describa la imagen') 
    p.mb-5 El investigador selecciona las técnicas particulares que deben utilizarse en la solución del problema formulado. Hay un amplio número de técnicas disponibles para la recogida de datos. Algunas técnicas son únicas para un enfoque de investigación. La investigación cualitativa podría ser utilizada para preceder a una investigación cuantitativa. 
      br
      br
      |Para la recolección de datos se requiere el uso de personal. Las diversas técnicas de investigación implican variados métodos de recopilación de datos. Por ejemplo, las encuestas requieren la participación directa de los encuestados. Esto implica rellenar un cuestionario o interactuar con un entrevistador. (Dos Santos,2017)
    h5 Errores de investigación
    p.mb-5 Es importante tener en cuenta los posibles errores en los que se puede incurrir al momento de recolectar los datos para no caer en ellos, a continuación, en la siguiente tabla se presentan los principales.
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: (Mahotra, 2008).
            thead
              tr
                <th colspan="2" class="cuadros--azul ; text-white ;"> Diseño Investigación </th>
                
            tbody.mb-3
              tr
                <td rowspan="6" class="cuadros--coral ; text-white ; p-5"> Errores del investigador </td>
              tr.tarjeta--gris
                td Error por sustitución de información: se obtiene información diferente a la buscada.
              tr
                td Error de medida: ej. Se busca medir la satisfacción y se mide la lealtad.
              tr.tarjeta--gris
                td Error de definición de la población objetivo: variación entre la población real y la población definida en la investigación
              tr
                td Error por marco muestral incompleto: ej. Bases de datos desactualizadas.
              tr.tarjeta--gris
                td Error de análisis de datos: ej. Uso inadecuado de procedimientos estadísticos. 
            tbody.mb-3
              tr
                <td rowspan="4" class="cuadros--coral ; text-white ; p-5"> Errores del entrevistador  </td>
              tr
                td Error de selección de la muestra: buscan encuestados diferentes a los seleccionados en la muestra. 
              tr.tarjeta--gris
                td Error de pregunta: ej. No se utilizan palabras exactas del diccionario.  
              tr
                td Error por engaño: Crea o inventa respuestas, en una o la totalidad del cuestionario. 
            tbody.mb-3
              tr
                <td rowspan="3" class="cuadros--coral ; text-white ; p-5"> Errores del encuestado </td>
              tr.tarjeta--gris
                td Error de incapacidad: Los encuestados no dan respuestas precisas, por olvido o por aburrimiento.
              tr
                td Error de resistencia: Responden mal intencionalmente por vergüenza o por ser socialmente aceptable. 
    h4 Trabajo de campo        
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img.mb-3(src='@/assets/curso/img51.jpg', alt='Texto que describa la imagen') 
    p.mb-5 El trabajo de campo abarca la selección, la capacitación, la supervisión, la remuneración y la evaluación de las personas que recogen los datos en el terreno propio de la investigación. La capacitación debe ser considerada como una inversión dentro del presupuesto de la investigación porque allí radica en gran parte el éxito del proyecto. Esta debe darse en técnicas de recolección de datos, conocimiento profundo del cuestionario, manejo de entrevistas, solución de preguntas y desarrollo de la empatía y autoestima, entre otros temas (Prieto, 2013).
      br
      br
      |Implica operar tanto en el campo, como es el caso de entrevistas personales (en casa, en un centro comercial, o entrevistas personales asistidas por ordenador), desde una oficina por teléfono o por e-mail. La selección apropiada, formación y evaluación de los trabajadores de campo ayuda a minimizar los errores en el proceso de la recogida de los datos (Rosendo, 2018).
    h4 Técnicas de recolección de información
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img52.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor
    p.mb-5 El trabajo de campo abarca la selección, la capacitación, la supervisión, la remuneración y la evaluación de las personas que recogen los datos en el terreno propio de la investigación. La capacitación debe ser considerada como una inversión dentro del presupuesto de la investigación porque allí radica en gran parte el éxito del proyecto. Esta debe darse en técnicas de recolección de datos, conocimiento profundo del cuestionario, manejo de entrevistas, solución de preguntas y desarrollo de la empatía y autoestima, entre otros temas (Prieto, 2013).
      br
      br
      |Implica operar tanto en el campo, como es el caso de entrevistas personales (en casa, en un centro comercial, o entrevistas personales asistidas por ordenador), desde una oficina por teléfono o por e-mail. La selección apropiada, formación y evaluación de los trabajadores de campo ayuda a minimizar los errores en el proceso de la recogida de los datos (Rosendo, 2018).
    h5 Observación
    .row.mb-5.justify-content-center
      .col-lg-6
        figure
          img.mb-3(src='@/assets/curso/img53.svg', alt='Texto que describa la imagen') 
    p.mb-5 Es una técnica que consiste en observar a las personas cuando efectúan un trabajo. La observación tiene amplia aceptación científica. Los sociólogos, sicólogos e ingenieros industriales utilizan extensamente ésta técnica con el fin de estudiar a las personas en sus actividades de grupo y como miembros de la organización. El propósito de la organización es múltiple: permite al analista determinar que se está haciendo, como se está haciendo, quien lo hace, cuando se lleva a cabo, cuanto tiempo toma, dónde se hace y porque se hace.
      br
      br
      |Para McDaniel (2016) “La investigación por observación puede definirse como el proceso sistemático de registrar patrones de ocurrencias o conductas sin normalmente cuestionar o comunicarse con las personas implicadas. En el siguiente cuadro da ejemplos de situaciones presentadas al utilizar la técnica de observación. 
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: (McDaniel, 2016).
            thead
              tr
                th.cuadros--azul.text-white Situaciones
                th.cuadros--azul.text-white Ejemplos
            tbody
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center Personas mirando a personas
                td Observadores estacionados en supermercados ven a consumidores seleccionar productos, con el propósito de saber cuánto copra en el punto de venta.
              tr
                td.cuadros--oro.text-white.text-center Personas mirando fenómenos
                td Observadores estacionados en una intersección cuentan vehículos moviéndose en distintas direcciones para establecer la necesidad de un semáforo.
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center Máquinas mirando a personas
                td Cámaras de video graban a consumidores seleccionando productos.
              tr
                td.cuadros--oro.text-white.text-center Máquinas mirando fenómenos
                td Programas avanzados de software registran a personas navegando en internet.
    .row.mb-5.justify-content-center
      .col-10
        ul.lista-ul--color.mb-5
            li 
              i.fas.fa-angle-right
              p
                b Técnica.
                |  La observación puede ser formal o informal, se puede realizar en un mercado real o se realice en un entorno controlado; directa o indirecta según el medio empleado para la captura de información; e incluso consciente o encubierta en función del conocimiento que tenga el observado sobre la situación. En cuanto a los procedimientos de observación, normalmente los segmentamos en humanos o mecánicos (Sarabia Sánchez, 1999). En este primer grupo los observadores son investigadores cualificados y entrenados que observan y registran la información. Y en el segundo grupo encontramos medios como la fotografía, cámaras de vídeo o contadores y células fotoeléctricas o de infrarrojos. Entre los métodos más innovadores podemos destacar los estudios con seguimiento ocular, respuesta galvánica de la piel o análisis facial. Los procedimientos más usuales son los paneles de minoristas, análisis de contenido y análisis histórico. (Dos Santos, 2017). 
    h5 Grupos focos
    p.mb-5 Un grupo foco o grupo de discusión es una conversación entre varias personas sentados juntos, usualmente en una mesa redonda. Una persona (sea el investigador u otro encargado) juega el papel de moderador, él inicia el debate e interviene periódicamente para mantener la sesión en el tema deseado. El moderador puede cerrar la discusión cuando considere que el tiempo ha terminado y todos los temas hayan sido abordados (Bradley, 2010)
    .row.mb-2.justify-content-center
      .col-10
        ul.lista-ul--color.mb-5
            li 
              i.fas.fa-angle-right
              p
                b Técnica.
                |  Es una entrevista no estructurada y libre a un grupo reducido de personas, por lo general entre seis y diez. La duración puede estar comprendida entre una hora y media, hasta las seis horas. La dinámica es moderada por un investigador capacitado, normalmente psicólogos de profesión. Este trata de fomentar el diálogo con puntos guiados interviniendo lo menos posible, y siempre evitando preguntas directas. Siempre es habitual grabar la dinámica. Entre las aplicaciones se emplea para enfocar políticas de recursos humanos, interpretaciones de marcas, uso de productos, conceptos de nuevos productos, etc. (Dos Santos, 2017). 
    .row.mb-2.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img54.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: (McDaniel, 2016).
    h5 Etnografía
    p.mb-5 Es una técnica descriptiva, por tanto, detalla el comportamiento de las personas en ambientes naturales. El proceso etnográfico se logra a través de la observación participante, en la cual el investigador se hace parte de la comunidad que está estudiando (Bautista, 2011)
      br
      br
      |Para McDaniel (2016) las ventajas de realizar investigación etnográfica son:
    .row.mb-2.justify-content-center
      .col-5
        .tarjeta-avatar
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Se basan en la realidad. Mostrando exactamente cómo viven los consumidores con un producto, no solo lo que dicen sobre él o cómo recuerdan usarlo.  
      .col-5
        .tarjeta-avatar
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Puede revelar necesidades y deseos no expresados.
    .row.mb-2.justify-content-center
      .col-5
        .tarjeta-avatar
          img(src='@/assets/curso/img4.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Puede descubrir beneficios de consumo no explotados. 
      .col-5
        .tarjeta-avatar
          img(src='@/assets/curso/img5.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Puede mostrar cómo, cuándo, por qué y dónde la gente compra marcas, y cómo las percibe en comparación con productos competidores.
    .row.mb-2.justify-content-center
      .col-5
        .tarjeta-avatar
          img(src='@/assets/curso/img6.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Puede mostrar quién en la familia realmente usa un producto y quizá descubrir un potencial objetivo demográfico totalmente nuevo.  
      .col-5
        .tarjeta-avatar
          img(src='@/assets/curso/img7.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Aprovecha la experiencia de los consumidores con la categoría y su creatividad práctica mientras hacen una demostración de sus ideas de nuevos productos y mejoras de productos. 
    .row.mb-5.justify-content-center
      .col-5
        .tarjeta-avatar
          img(src='@/assets/curso/img8.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p  Puede ayudar a formar una mejor relación con los clientes, basada en un conocimiento íntimo de su estilo de vida. 
    .row.mb-5.justify-content-center
      .col-10
        ul.lista-ul--color.mb-5
            li 
              i.fas.fa-angle-right
              p
                b Técnica.
                |  El investigador se sumerge en un hogar, filial de grupos de empleados, o entre los vendedores de un gran almacén. Es particularmente útil cuando el segmento objetivo no puede verbalizar apropiadamente su necesidad, por ejemplo, el público infantil. (Dos Santos,2017) 
    h5 Entrevista
    .row.mb-2.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img55.svg', alt='Texto que describa la imagen') 
    p.mb-5 Se utilizan para recabar información en forma verbal, a través de preguntas que propone el analista. El analista puede entrevistar al personal en forma individual o en grupos algunos analistas prefieren este método a las otras técnicas que se estudiarán más adelante. Es un intercambio de información que se efectúa cara a cara; sirve para obtener información acerca de las necesidades y la manera de satisfacerlas, así como consejo y comprensión por parte del usuario para toda idea o método nuevos.
    .row.mb-5.justify-content-center
      .col-10
        ul.lista-ul--color.mb-5
            li 
              i.fas.fa-angle-right
              p
                b Técnica.
                |  Se realiza cara a cara entre dos personas, el investigador y el entrevistado. Se asemejan a las entrevistas psicológicas y clínicas, pero con otro propósito. Son habituales en el sector industrial, donde la dispersión y número de clientes no aconsejan otro método. Mediante la entrevista se recoge mejor la motivación del consumidor, es más profunda, novedosa, y subconsciente. la entrevista en profundidad de suele desarrollar en tres etapas. En la primera se realiza una preparación adecuada, no solo de un entorno cuidadosamente elegido y confortable, también por la estructura o guion. En esta fase reclutamos a los individuos cuidando que no conozcan el propósito de la entrevista con antelación para que no puedan prepararlo. La segunda fase, la entrevista, comienza con un saludo inicial y se explica el propósito de la entrevista. Se detalla el procedimiento y el proceso. La idea es crear un ambiente relajado y cómodo para expresar opiniones. Se valora la espontaneidad y la creatividad. Es conveniente grabar la conversación para no perder tiempo en anotar todo. La tercera parte de la entrevista se reserva al análisis y la interpretación. (Dos Santos, 2017).
    p.mb-5 Para la investigación cuantitativa se utiliza la encuesta como técnica de recolección de información.    
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img56.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor
    .row.mb-5.justify-content-center
      .col-12
        ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              p
                b Encuesta.
                | Se usa para describir un método de obtener información de una muestra de individuos. Esta “muestra” es usualmente sólo una fracción de la población bajo estudio. Las encuestas tienen una gran variedad de propósitos, y se pueden conducir de muchas maneras, incluyendo por encuestas personales, telefónicas o vía web.
    .row.mb-2.justify-content-center
      .col-lg-12
        figure
          img.mb-3(src='@/assets/curso/img57.jpg', alt='Texto que describa la imagen') 
    .row.mb-5.justify-content-center
      .col-lg-4
        .cuadros--rojo.p-4
          h5.mb-0.text-white.text-center Encuesta personal
        .d-flex
          .cuadros--gris-fit.d-block.p-5.text-center

            p.my-auto.d-block Es una forma de comunicación directa en la que un entrevistador pregunta a los encuestados cara a cara, requiere algún tipo de material o interacción. Ej. Para la elección de Gobernador se realizan encuestas personales para determinar quiénes votaran por determinado político.
      .col-lg-4
        .cuadros--coral.p-4
          h5.mb-0.text-white.text-center Encuesta telefónica
        .d-flex
          .cuadros--gris-fit.d-block.p-5.text-center

            p.my-auto Es un método muy utilizado por los sistemas de marcación automática y el azar en las guías telefónicas. Ej. Directv realiza encuestas telefónicas para determinar el nivel de satisfacción de sus clientes después de realizar un mantenimiento.
      .col-lg-4
        .cuadros--oro.p-4
          h5.mb-0.text-white.text-center Encuesta Web
        .d-flex
          .cuadros--gris-fit.d-block.p-5.text-center

            p.my-auto Se utiliza por medio de un computador y se requiere conectividad, consiste en incluir un link que lleva al usuario a una encuesta en la Web. Ej. Apple realiza una encuesta para determinar la satisfacción de sus clientes al usar sus productos en la página web o vía correo electrónico.
    p.mb-5 En la actualidad existen muchas ventajas de utilizar encuestas en línea, según McDaniel (2016) la mayoría de las compañías enfrentan hoy ciclos más cortos de vida del producto, más competencia y un entorno de negocios rápidamente cambiante. Se deben tomar decisiones complejas y veloces, y la investigación en internet puede ayudar proporcionando información oportuna. 
    
    p.mb-5 La principal desventaja de este tipo de encuestas es que todos los usuarios de internet tienen acceso a las encuestas, pero todos no son representativos de la muestra seleccionada.
      br
      br
      |En la siguiente tabla se realiza un comparativo entre los tipos de encuesta más utilizados la encuesta personal y encuesta web.
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img58.svg', alt='Texto que describa la imagen') 
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: (McDaniel, 2016).
            thead
              tr
                th.cuadros--azul.text-white Situaciones
                th.cuadros--azul.text-white Ejemplos
            tbody
              tr.tarjeta--gris
                td.cuadros--mostaza.text-white.text-center Personas mirando a personas
                td Observadores estacionados en supermercados ven a consumidores seleccionar productos, con el propósito de saber cuánto copra en el punto de venta.
              tr
                td.cuadros--mostaza.text-white.text-center Personas mirando fenómenos
                td Observadores estacionados en una intersección cuentan vehículos moviéndose en distintas direcciones para establecer la necesidad de un semáforo.
              tr.tarjeta--gris
                td.cuadros--mostaza.text-white.text-center Máquinas mirando a personas
                td Cámaras de video graban a consumidores seleccionando productos.
              tr
                td.cuadros--mostaza.text-white.text-center Máquinas mirando fenómenos
                td Programas avanzados de software registran a personas navegando en internet.
    h4 Instrumentos de recolección de información
    p.mb-5 El principal instrumento de recolección de información en la investigación cualitativa y cuantitativa es el cuestionario.
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img59.svg', alt='Texto que describa la imagen') 
    h5 Cuestionario
    p.mb-5 Para McDaniel (2016) un cuestionario es una serie de preguntas diseñadas para generar los datos necesarios para cumplir los objetivos del proyecto de investigación. El cuestionario debe traducir los objetivos de la encuesta en una forma comprensible para los encuestados y “extraer” de ellos la información requerida. Al mismo tiempo, debe recuperar sus respuestas en una forma fácil de resumir y traducir en hallazgos y recomendaciones que satisfagan los requisitos de información de la organización. 
      br
      br
      |De acuerdo con (Rosendo, 2018), el cuestionario es un conjunto de preguntas escritas o verbales que debe responder el encuestado. Es muy importante diseñar un buen cuestionario para asegurar que no se introducen errores en el conjunto de datos. Cualquier cuestionario debe tener tres objetivos principales:
    .row.mb-1.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img33.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p.d-block.my-5 Traducir la información necesaria en un conjunto de preguntas.
    .row.mb-1.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img34.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p.d-block.my-5 Debe ser motivante y alentador para el encuestado.
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img35.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p.d-block.my-5 Debe minimizar el error de respuesta.
    .row.mb-5.justify-content-center
      .col-12
        ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              p
                b Tipos de cuestionarios
    .row.mb-5.justify-content-center
      .col-lg-5
        .cuadros--salmon.p-4
          h5.mb-0.text-white.text-center Cuestionario Abierto
        .d-flex
          .cuadros--gris-fit.d-block.p-5
            p.my-auto.d-block Al igual que las entrevistas, los cuestionarios pueden ser abiertos y se aplican cuando se quieren conocer los sentimientos, opiniones y experiencias generales, proporciona una amplia oportunidad para quienes escriban las razones de sus ideas. Algunas personas, sin embargo, encuentran más fácil escoger una de un conjunto de respuestas preparadas que pensar por sí mismas.
      .col-lg-5
        .cuadros--rojo.p-4
          h5.mb-0.text-white.text-center Cuestionario Cerrado
        .cuadros--gris.d-block.p-5
          p El cuestionario cerrado limita las respuestas posibles del interrogado. Por medio de un cuidadoso estilo en la pregunta, el analista puede controlar el marco de referencia. Este formato es el método para obtener información sobre los hechos. También fuerza a los individuos para que tomen una posición y forma su opinión sobre los aspectos importantes.
    p.mb-5 Jorge Eliecer Prieto (2013) plantea las siguientes preguntas antes de realizar el cuestionario:
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿La pregunta es necesaria?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿El entrevistado tendrá la capacidad de contestar la pregunta?
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Debo hacer varias preguntas en vez de una?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿La persona entrevistada nos dará toda la información o tratará de ocultarla? 
    .row.mb-5.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Tendrá el entrevistado la información solicitada?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Tenemos el presupuesto para hacer la investigación?
    p.mb-5 Para la realización del cuestionario es necesario realizar una serie de pasos:
    .row.mb-1.justify-content-center
      .col-lg-5.d-block.my-auto
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img33.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Determinar la información requerida
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img34.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Escoger el tipo de cuestionario: depende del tipo de encuesta telefónica, personal o vía web  
    .row.mb-1.justify-content-center
      .col-lg-5.d-block.my-auto
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img38.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Definición de preguntas  
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img60.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Tipo de pregunta: Abiertas, cerradas, dicótomas, selección múltiple, preguntas en cadena y preguntas de chequeo 
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img61.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Redacción de preguntas: Evitar preguntas ambiguas, palabras sencillas, no generalizar y evitar preguntas intimas 
      .col-lg-5.d-block.my-auto
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img62.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Orden de las preguntas: Orden de lo General a lo especifico 
    .row.mb-5.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img63.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Prueba previa 
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img64.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p Revisión final
    p.mb-5 La introducción del cuestionario también es importante para la tasa de respuesta. En las entrevistas personales y telefónicas, el guion de apertura es muy importante para lograr que las personas participen. En cuestionarios por correo autoadministrados, el mensaje introductorio escrito –normalmente una carta de presentación o un mensaje de correo electrónico– también debe escribirse para aumentar y motivar la cooperación. (Rosendo,2018)
      br
      br
      |En la siguiente gráfica se muestran los tipos de preguntas más utilizadas para la elaboración de un cuestionario. 
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img65.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor
    p.mb-5 McDaniel (2016) explica cada uno de los tipos de preguntas que se pueden desarrollar en un cuestionario.
    .row.mb-5.justify-content-center
      .col-4
        .tarjeta-avatar
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Preguntas abiertas son aquellas a las que el encuestado responde con sus propias palabras. En otras palabras, el investigador no limita las opciones de respuesta. Ej. ¿Cuáles son las ventajas de utilizar este producto?
      .col-4
        .tarjeta-avatar
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Preguntas cerradas requiere que el encuestado haga una selección en una lista de respuestas, se dividen en dos tipos: preguntas dicotómicas, con una opción de respuesta de dos elementos, y preguntas de opción múltiple o multicotómicas. Ej. ¿Su color favorito es el rojo? Si / No o ¿Cuál es su color favorito? a. Amarillo b. Rojo c. Azul d. Verde
      .col-4
        .tarjeta-avatar
          img(src='@/assets/curso/img4.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p Preguntas de escala, preguntas cerradas en las que las opciones de respuesta están diseñadas para recoger la intensidad del sentimiento. Ej. ¿Se encuentra satisfecho con la atención prestada? A. Excelente b. Buena c. Regular d. Mala
    p.mb-5 El cuestionario debe tener un hilo conductor que va de lo general a lo especifico y la organización de las preguntas McDaniel (2016) las explica en el siguiente cuadro:
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: (McDaniel, 2016).
            thead
              tr
                th.cuadros--azul.text-white Ubicación
                th.cuadros--azul.text-white Tipo
                th.cuadros--azul.text-white Ejemplos
                th.cuadros--azul.text-white Razón
            tbody
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center Preguntas de selección 
                td Preguntas calificadoras
                td "¿Tienes esquís?”
                td La meta es identificar a los encuestados objetivo.
              tr
                td.cuadros--oro.text-white.text-center Primeras preguntas
                td De calentamiento
                td ¿Qué marca de esquís tienes?
                td Preguntas fáciles de contestar indican al encuestado que el cuestionario es simple.
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center Primer tercio de preguntas
                td Transiciones
                td ¿Qué características de los esquís son las que más te gustan?
                td Preguntas relacionadas con los objetivos de la investigación requieren un poco más de esfuerzo.
              tr
                td.cuadros--oro.text-white.text-center Segundo tercio 
                td Preguntas difíciles y complicadas
                td A continuación aparecen 10 características de los esquís, dar respuesta utilizando la escala.
                td El encuestado se ha comprometido a terminar el cuestionario.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img.mb-3(src='@/assets/curso/img66.jpg', alt='Texto que describa la imagen') 
    .row.mb-5.justify-content-center
      .col-4
        .tarjeta-avatar
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p ¿Son necesarias todas las preguntas?
      .col-4
        .tarjeta-avatar
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p ¿Dan respuesta al objeto de la investigación?
      .col-4
        .tarjeta-avatar
          img(src='@/assets/curso/img4.svg' alt='AvatarTop')
          .tarjeta.color-gris
            .p-5
              p ¿Es muy largo el cuestionario?
    h3 Formular hallazgos
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img67.svg', alt='Texto que describa la imagen') 
    h4 Análisis e interpretación de datos
    p.mb-5 El análisis depende del tipo de información requerida, del diseño de la investigación y de la calidad de los datos obtenidos. Cuando se van a examinar de forma crítica los datos se deben ordenar en categorías significativas (revisión, codificación y tabulación). La revisión y codificación son funciones básicas, porque la primera se hace necesaria para eliminar errores en los datos iniciales, lo cual se puede hacer en el terreno de campo o en la gerencia del proyecto, y la segunda agrupa los datos en las categorías correspondientes, facilitando la tabulación. La tabulación consiste en contar el número de aspectos, características, datos, etcétera, que se insertan dentro de las categorías definidas por el investigador. Esta puede hacerse manual, mecánica o electrónica, dependiendo de la magnitud de los datos. (Prieto,2013)
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img68.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor
    p.mb-5 Según McDaniel (2016) lo primero que se debe hacer es realizar un proceso de validación y edición de la información recolectada, en donde se confirma que las entrevistas se realizaron de acuerdo con lo especiﬁcado para detectar fraudes o fallas del entrevistador y se revisa si existen preguntas con respuestas sin registrar.
      br
      br
      |Segundo se codifican las preguntas, se refiere al proceso de agrupar y asignar códigos numéricos a las respuestas a una pregunta particular, tercero se ingresan los datos dentro de un sistema en donde se realiza el proceso de convertir la información a formatos electrónicos, el cuarto paso es depurar la información repetida o mal codificada y el último paso es tabulación y análisis estadístico.
    h4 Comunicación de los resultados de la investigación
    p.mb-5 Un reporte eficaz de investigación de mercados es una forma de asegurar que el tiempo, esfuerzo y dinero que se destinaron al proyecto de investigación se aprovecharán completamente. (Hair,2010).
      br
      br
      |Para comunicar los resultados de la investigación primero se debe realizar un resumen ejecutivo que es la porción del informe que explica qué descubrió la investigación, qué significan los resultados y qué acción, debe emprenderse, con base en los hallazgos de la investigación; segundo se formulan las conclusiones que son generalizaciones que responden las preguntas planteadas en los objetivos de la investigación; Tercero se dan las recomendaciones ya sean generales o específicas y por último se presenta el informe. (McDaniels,2016)
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img69.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor
    p.mb-5 Un informe es completo cuando ofrece al lector toda la información que necesita en un lenguaje claro y conciso, no necesita estar sobrecargado con detalles sin importancia, debe enfocarse en los puntos principales de la investigación e incluir la información adicional, si es necesario, en los apéndices. Los directivos, normalmente, no tienen tiempo para leer páginas y páginas de información, necesitan informes que contengan la información requerida sin ser demasiado extensos. Un informe es preciso cuando la información que contiene es exacta. Es muy importante verificar la exactitud del informe antes de que se distribuya, de lo contrario podría conducir a decisiones directivas erróneas. Siempre es una buena idea escribir una versión preliminar y verificar todos los detalles a fondo. Un informe es claro cuando sigue una secuencia lógica de pensamiento, la redacción es precisa y fluida y está bien estructurado. (Rosendo, 2018).
    h5 Seguimiento y control
    p.mb-5 Para Malhotra (2008), el investigador debe ayudar al cliente a entender ya que es posible que surjan muchas preguntas, luego puede contribuir a poner en práctica los hallazgos en la selección de una agencia de publicidad, un nuevo producto o incluso una política de precios, es importante que el proyecto de investigación de mercados forme parte de un sistema de información de marketing SIM. 
      br
      br
      |Es necesario evaluar todo el proyecto de investigación de mercados de forma crítica para obtener nuevas ideas y conocimiento. A continuación, se presentan unas preguntas que podrán ayudar en la evaluación. 
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Este proyecto pudo haberse realizado de manera más eficaz o eficiente?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿La estrategia de análisis de datos logró arrojar información útil para la toma de decisiones? 
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Pudo haberse definido el problema de forma diferente? 
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿Las conclusiones y recomendaciones fueron apropiadas y útiles para el cliente? 
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿El plan de muestreo usado fue el más adecuado?
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p ¿El informe se redactó y presentó de manera adecuada? 
    p.mb-5 Las ideas obtenidas de dicha evaluación beneficiarán al investigador y a los proyectos que emprenda en el futuro. (Malhotra,2008)
    .row.mb-5.justify-content-center
      .col-lg-12
        figure
          img.mb-3(src='@/assets/curso/img70.jpg', alt='Texto que describa la imagen') 



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
