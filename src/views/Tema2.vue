<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Estadística.
    figure
      img.mb-3(src='@/assets/curso/img71.jpg', alt='Texto que describa la imagen') 
    p.mb-5 La estadística es la ciencia por medio de la cual se recogen, organizan, presentan, analizan e interpretan datos con el fin de propiciar una toma de decisiones más eficaz. (Lind,2015)
      br
      br
      |Se refiere a un conjunto de métodos, normas, reglas y principios para observar, agrupar, describir, cuantificar y analizar el comportamiento de un grupo (Martinez,2011) 
      br
      br
      |La estadística se divide en dos ramas:
    .row.mb-5.justify-content-center
      .col-lg-4
        .cuadros--salmon.p-4
          h5.mb-0.text-white.text-center Estadística descriptiva
        .d-flex
          .cuadros--gris-fit.d-block.p-5
            p.my-auto.d-block Métodos para organizar, resumir y presentar datos de manera informativa mediante distribuciones de frecuencia y presentarlas con gráficas y tablas. (Lind,2015)
      .col-lg-4
        .cuadros--rojo.p-4
          h5.mb-0.text-white.text-center Estadística Inferencial
        .d-flex
          .cuadros--gris-fit.d-block.p-5
            p.my-auto Métodos que se emplean para determinar una propiedad de una población con base en la información de una muestra de esta. (Lind,2015)
    p.mb-5 La finalidad de la estadística para Martínez Bencardino (2011)
    .row.mb-1.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img33.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p.d-block.my-5 Tener una visión general de la empresa en su conjunto, para que la administración pueda formular directrices con pleno conocimiento de causa.
    .row.mb-1.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img34.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p.d-block.my-5 Descubrir las relaciones de causa a efecto en las diversas manifestaciones económicas de la empresa.
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img35.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              p.d-block.my-5 Reconocer y separar, en vista del control, lo normal y anormal, observando las fluctuaciones internas ligadas estrechamente a las condiciones externas, para obtener una mayor orientación a la actividad de la empresa.
    h4 Tipos de variables
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img72.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor
    p.mb-5 Existen dos tipos básicos de variables: cualitativas y cuantitativas. Cuando el objeto se observa y registra como una característica no numérica, recibe el nombre de variable cualitativa o atributo. Algunos ejemplos de variables cualitativas son: género, preferencia en bebidas, tipo de automóvil que se posee, estado de nacimiento y color de ojos. Cuando la variable puede presentarse en forma numérica, se le denomina variable cuantitativa; por ejemplo, el saldo en su cuenta, las edades de los empleados, y el número de personas contratadas en una empresa. (Lind, 2015).
    #t_2_1.titulo-segundo
      h2 2.1 Población estudio
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img73.svg', alt='Texto que describa la imagen') 
    p.mb-5 Al determinar cuáles son las características particulares de las personas que van a ser parte de la investigación, los investigadores escogen si recolectan la información de un censo o una muestra. La diferencia entre las dos es el tamaño de las poblaciones. En un censo el investigador observa o pregunta a todos y cada uno de los miembros de la población objetivo. Por tanto, en poblaciones pequeñas un censo es el método más utilizado (Hair, Bush, y Ortinau, 2010). Mientras que en una investigación donde la población es muy grande, donde un censo es casi imposible de llevar a cabo, lo que se hace es tomar una pequeña parte de una población particular que sea representativa (individuos que representen a los individuos de dicha población). A esta pequeña parte de la población se le conoce como muestreo,  (Neme,2017).
      br
      br
      |Según McDaniel (2016) la población, o población de interés, en referencia al grupo entero de personas sobre las que se obtiene información. Definir la población de interés suele ser el primer paso del proceso de muestreo, y con frecuencia implica definir el mercado objetivo del producto o servicio en cuestión.
      br
      br
      | En la Población estudio se reconocen los siguientes factores:  
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img74.svg', alt='Texto que describa la imagen') 
    p.mb-5 Usaremos el siguiente ejemplo para determinar cómo se obtiene la población estudio.
    ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 1
            p
              b Elemento:
              b-none es quien se observa, se mide o a quien corresponde la información. Ej. Detergente marca Ariel presentación: granulado, barra, liquido.
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 2
            p
              b Unidad muestral:
              b-none colección de elementos con características homogéneas. Ej. Supermercados, bodegas, despensas, tiendas, fabricas, hogares.
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 3
            p
              b Alcance:
              b-none  área o espacio geográfico que abarca la investigación: país, departamento, municipio, barrio, localidad. Ej. País: Colombia, departamento: Santander, ciudad: Bucaramanga, barrio: centro 
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 4
            p
              b Tiempo:
              b-none época o fecha en la que se realiza la investigación. Ej. Un mes (marzo). 
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 5
            p
              b Variable:
              b-none lo que se va a estudiar del elemento. Ej. Ventas (unidades, pesos, gramos).
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 6
            p
              b Marco muestral:
              b-none listado de unidades muéstrales que conforman la población estudio. Ej. Listado de supermercados Éxito.
    p.mb-5 Luego de definir cada uno de los ítems anteriores se realiza un resumen para obtener la población estudio. 
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img75.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-auto.d-block
              h6 Población estudio
              p.d-block Monitorear las ventas de la detergente marca Ariel, presentación granulada con suavizante de 500 gramos en los supermercados Éxito de la ciudad de Bucaramanga durante el mes de marzo.
    p.mb-5 Las poblaciones se deben definir con toda claridad de tal manera que no exista confusión sobre si un determinado elemento pertenece o no a la población. 
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img76.svg', alt='Texto que describa la imagen') 
    p.mb-5 Ej. En un estudio del nivel salarial de los operarios del sector de confecciones de la ciudad, una definición de población podría ser la siguiente: “Todos los operarios del sector de confecciones de la ciudad”
      br
      br
      |La población se representa por la letra N mayúscula y existen dos clases de poblaciones: 
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta--gris.p-4
          h4.text-center.mb-0 Clases de poblaciones
    .row.mb-5.justify-content-center
      .col-lg-5
        .cuadros--rojo.p-4
          h5.text-center.mb-0.text-white Poblaciones Finitas
        figure.p-5
          img.mb-3(src='@/assets/curso/img77.svg', alt='Texto que describa la imagen') 
        p.text-center Son las poblaciones a las cuales se les pueden determinar fácilmente el número de elementos que las componen, es decir, su tamaño.
      .col-lg-5
        .cuadros--naranja.p-4
          h5.text-center.mb-0.text-white Poblaciones infinitas
        figure.p-5
          img.mb-3(src='@/assets/curso/img78.svg', alt='Texto que describa la imagen') 
        p.text-center Son las poblaciones que físicamente es imposible numerarlas o determinar su tamaño.
    #t_2_2.titulo-segundo
      h2 2.2 Muestra
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img79.svg', alt='Texto que describa la imagen') 
    p.mb-5 En la investigación de mercados lo ideal sería contar con la información de todo su mercado o universo; pero es costoso, de difícil control y requiere un tiempo muy considerable para la investigación, por lo que tomar una muestra representativa y suficiente que permita obtener resultados confiables y oportunos con una inversión efectiva. Para determinar la muestra es necesario considerar primero cuál es el universo total de elementos posibles a investigar. (Martinez,2011) 
      br
      br
      |Este subgrupo de la población de interés sobre el cual se recolectan datos y debe ser representativo de dicha población. La muestra es estadísticamente representativa.
      br
      br
      |Santiago Martínez Vela (2011) explica se debe entender que la muestra es una parte del universo y debe presentar los mismos fenómenos que ocurren en este con el fin de estudiarlos y medirlos. Para que la muestra alcance los objetivos preestablecidos debe reunir las siguientes características: 
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              h5 Ser representativa
              p Es decir, todos sus elementos deben presentar las mismas cualidades y características del universo.
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              h5 Ser suficiente
              p La cantidad de elementos seleccionados, si bien tiene que ser representativa del universo, debe ser amplia y plural.  
    h4 Cálculo del tamaño de la muestra
    p.mb-5 En la investigación de mercados lo ideal sería contar con la información de todo su mercado o universo; pero es costoso, de difícil control y requiere un tiempo muy considerable para la investigación, por lo que tomar una muestra representativa y suficiente que permita obtener resultados confiables y oportunos con una inversión efectiva. Para determinar la muestra es necesario considerar primero cuál es el universo total de elementos posibles a investigar. (Martinez,2011) 
      br
      br
      |Este subgrupo de la población de interés sobre el cual se recolectan datos y debe ser representativo de dicha población. La muestra es estadísticamente representativa.
      br
      br
      |Santiago Martínez Vela (2011) explica se debe entender que la muestra es una parte del universo y debe presentar los mismos fenómenos que ocurren en este con el fin de estudiarlos y medirlos. Para que la muestra alcance los objetivos preestablecidos debe reunir las siguientes características: 
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Una población infinita: aquella donde el universo está compuesto por más de 100.000 elementos. 
      .col-lg-8
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Una población finita: donde el universo se compone por un número inferior a 100.000 elementos. (Martinez,2011)
    p.mb-5 Para poblaciones infinitas la muestra se obtiene con la siguiente fórmula:
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.my-3.d-inline-block
                b n  =
              p.d-inline-block.ps-2
                b z^2 p*q
                  hr.hr.m-0
                b e^2
    p.mb-5 Para poblaciones finitas la muestra se obtiene con la siguiente fórmula:
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.my-3.d-inline-block
                b n  =
              p.d-inline-block.ps-2
                b N*z^2  p*q
                  hr.hr.m-0
                b e^2 (N-1)+z^2*p*q
    p.mb-5 En donde:
    
      .row.mb-5.justify-content-center
        .col-6
          .tarjeta--gris.p-4
            ul.lista-ul--color.mb-5.p-4
                li 
                  i.fas.fa-angle-right
                  | N= Población o universo 
                li 
                  i.fas.fa-angle-right
                  | p= Probabilidad a favor 
                li 
                  i.fas.fa-angle-right
                  | q= Probabilidad en contra (100%-p)
                li 
                  i.fas.fa-angle-right
                  | e= Error estimado – 2 al 5% 
                li 
                  i.fas.fa-angle-right
                  | n= Tamaño de la muestra
                li 
                  i.fas.fa-angle-right
                  | z^2 = 1.96 al cuadrado (Si la seguridad es del 95%)
                  br
                  |1.645 (Si la seguridad es del 90%)
                  br
                  |2.576 (Si la seguridad es del 99%)
    #t_2_3.titulo-segundo
      h2 2.3 Muestreo
    p.mb-5 El muestreo es una técnica para la selección de una muestra a partir de una población estadística puede ser probabilística o no probabilística.
    h4 Muestreo probabilístico
    p.mb-5 Cada unidad de muestreo de la población objetivo definida tiene una probabilidad conocida de ser elegida para la muestra. La probabilidad real de selección de cada unidad de muestreo puede o no ser igual a la de las demás, lo cual depende del tipo de diseño de muestreo que se utilice (Hair et al., 2010; Hernández et al., 2014).
    h4 Muestreo No probabilístico
    p.mb-5 Son aquellas en las que elementos específicos de la población han sido seleccionados en forma no aleatoria. No aleatoriedad resulta cuando elementos de la población se seleccionan por conveniencia del investigador (McDaniel,2016).
    .row.mb-5.justify-content-center
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img80.svg', alt='Texto que describa la imagen') 
          figcaption Fuente: Autor
    p.mb-5 El muestreo No probabilístico lo explica McDaniel (2016) de la siguiente manera:
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Muestras por conveniencia: basadas en personas fácilmente accesibles y que están gustosos de colaborar con la investigación. 
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Muestras por criterio o juicio: se basan en el juicio del investigador sobre la representatividad de la población en estudio.
    .row.mb-1.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Muestras por cuotas: basadas en factores demográficos o de clasificación seleccionados por el investigador, se establece para subgrupos de la población.
      .col-lg-5
        .tarjeta-avatar-b.mb-2
          img(src='@/assets/curso/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-4.py-5
              p Muestras de bola de nieve: los encuestados adicionales se seleccionan con base en referencias de los encuestados iniciales.
    p.mb-5 Los tres principales métodos de muestreo probabilístico son: muestreo aleatorio simple, muestreo sistemático y muestreo estratificado.
    h4 Muestreo aleatorio simple
    p.mb-5 Muestreo aleatorio simple: asegura que cada unidad de muestreo en la población objetivo tenga una conocida o igual oportunidad de ser elegida; una forma práctica de elegir la muestra es crear una tabla de números aleatorios en computador, o con el uso de números randómicos. (Hair et al., 2010; Hernández, et al., 2014)
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.my-3.d-inline-block
                b Probabilidad de selección  =
              p.d-inline-block.ps-2
                b Tamaño de la muestra
                  hr.hr.m-0
                b Tamaño de la población
    p.mb-5 Se garantiza que cada miembro de la población tenga una posibilidad conocida e igual de ser seleccionado para la muestra. El muestreo aleatorio simple comienza con un listado actualizado y completo de la población. (McDaniel, 2016).
    h4 Muestreo estratificado
    p.mb-5 Muestreo aleatorio estratificado: se le llama estratificado ya que la población va a ser dividida en diferentes grupos o estratos.  Este muestreo se utiliza cuando la población objetivo presenta distorsión o extremos en la distribución de la probabilidad de la población objetivo. El objetivo es minimizar la variabilidad dentro de cada estrato y maximizar las diferencias entre estos (Hair et al., 2010; Hernández, et al., 2014).
    h4 Muestreo sistemático
    p.mb-5 Muestreo aleatorio sistemático: es similar al muestreo aleatorio simple, pero requiere que la población se ordene de alguna manera. Para aplicar este muestreo el investigador debe tener la capacidad de obtener una lista de todas las unidades de muestreo potenciales que compongan la población objetivo definida (Hair et al., 2010; Hernández, et al., 2014).
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.my-3.d-inline-block
                b Intervalo de salto =
              p.d-inline-block.ps-2
                b Tamaño de la población
                  hr.hr.m-0
                b Tamaño de la muestra
    #t_2_4.titulo-segundo
      h2 2.4 Frecuencia
    p.mb-5 
      b Frecuencia. 
      b-none Los datos se clasifican y ordenan de acuerdo a ciertas características cualitativas o cuantitativas indicando el número de veces que se repiten los valores, (MartínezB,2011). Si se da en números absolutos es frecuencia absoluta y en porcentajes es frecuencia relativa.
    p.mb-5 
      b Frecuencia relativa. 
      b-none La frecuencia relativa de una clasificación es el número de veces que una observación cae sobre la clasificación, la cual está representada como una proporción del número total de observaciones. Por esta razón, la frecuencia relativa se expresa en fracciones, decimales o porcentajes, (Domínguez,2015).
      br
      br
      |El cálculo de la frecuencia relativa se obtiene empleando la expresión, en donde n es el número total de datos. 
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.my-3.d-inline-block
                b frecuencia relativa  =
              p.d-inline-block.ps-2.text-center
                b frecuencia
                  hr.hr.m-0
                b n
    p.mb-5 
      b Frecuencia relativa acumulada. 
      b-none Lafrecuencia relativa acumulada de una clase Ci es la suma de las frecuencias relativas de todas las clases anteriores a Ci. Ésta se expresa como fracción, decimal o porcentaje. (Domínguez,2015)
      br
      br
      b Intervalos. 
      b-none La variable es continua todos sus valores se agrupan, dividiendo el espacio entre valores límites. 
      br
      br
      |En la siguiente tabla se explica numéricamente la frecuencia.
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5.text-center
          table
            caption Fuente: Autor
            thead
              tr
                th.cuadros--azul.text-white Clase
                th.cuadros--azul.text-white Intervalo
                th.cuadros--azul.text-white Frecuencia absoluta
                th.cuadros--azul.text-white Frecuencia relativa
                th.cuadros--azul.text-white Frecuencia relativa acumulada
            tbody
              tr.tarjeta--gris
                td.cuadros--mostaza.text-white.text-center 01
                td 15 - 18
                td 4
                td 11%
                td 11%
              tr
                td.cuadros--mostaza.text-white.text-center 02
                td 19 – 22
                td 8
                td 22%
                td 33%
              tr.tarjeta--gris
                td.cuadros--mostaza.text-white.text-center 03
                td 23 – 26
                td 2
                td 5%
                td 38%
              tr
                td.cuadros--mostaza.text-white.text-center 04
                td 27 – 30
                td 10
                td 28%
                td 66%
              tr.tarjeta--gris
                td.cuadros--mostaza.text-white.text-center 05
                td 31 – 34
                td 6
                td 17%
                td 83%
              tr
                td.cuadros--mostaza.text-white.text-center 06
                td 35 - 38
                td 6
                td 17%
                td 100%
              tr.tarjeta--gris
                td.cuadros--mostaza.text-white.text-center 
                td 
                td 36
                td 100%
                td 
    #t_2_5.titulo-segundo
      h2 2.5 Distribución de frecuencias
    p.mb-5 La distribución de frecuencias es una de las primeras formas de presentar la información para analizarla. Su objetivo es obtener el conteo de un número de respuestas asociadas con diferentes valores de una variable que se expresa en números o porcentajes. Una distribución de frecuencias para una variable produce una tabla de frecuencias, éstas pueden ser presentadas en gráficos (barras, o sectores) (Benassini, 2009; Hernández et al., 2014; Malhotra, 2008)
      br
      br
      |Es una manera de presentar los datos de forma organizada, donde se muestra el conteo de las respuestas obtenidas y clasificadas según variables de análisis. esta se expresa de dos formas: en números absolutos y en porcentajes. (Aragón,2011). 
      br
      br
      |Una vez se han recolectado los datos es importante determinar la frecuencia en que ocurren así podremos observar cómo se distribuye un conjunto de datos.
      br
      br
      |Ej. Se entrevistó a 20 jóvenes para determinar cuántos refrescos consumen al día.
    h6 Resultados.
    .row.mb-5.justify-content-center
      .col-lg-6
        figure
          img.mb-3(src='@/assets/curso/img81.svg', alt='Texto que describa la imagen') 
    h6 Cuadro de frecuencia. 
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5.text-center
          table
            caption Fuente: Autor
            thead
              tr
                th.cuadros--azul.text-white Ubicación
                th.cuadros--azul.text-white Tipo
                th.cuadros--azul.text-white Ejemplos
                th.cuadros--azul.text-white Razón
            tbody
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 00
                td 3
                td 15%
                td 15%
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 01    
                td 3
                td 15%
                td 30% 
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 02
                td 6
                td 30%
                td 60%
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 03   
                td 4
                td 20%
                td 80%
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 04    
                td 2
                td 10%
                td 90%
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 05
                td 2
                td 10%
                td 100%
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center Total
                td 20
                td 100%|
                td 
    #t_2_6.titulo-segundo
      h2 2.6 Tabulación
    p.mb-5 La tabulación de datos es el proceso consistente en contar la cantidad de observaciones (casos) que se clasifican en ciertas categorías, presenta los datos estadísticos en forma de tablas o cuadros y aplica para variables cualitativas y cuantitativas. (Hair,2010)
      br
      br
      |En la investigación de mercados se utilizan dos formas comunes de tabulación de datos. La tabulación unidireccional indica la cantidad de entrevistados que dieron cada posible respuesta a cada pregunta en un cuestionario. La tabulación cruzada ofrece una categorización de los entrevistados y trata dos o más variables simultáneamente. La categorización se basa en la cantidad de entrevistados que han respondido a dos o más preguntas consecutivas. (Hair, 2010).
    .row.mb-5.justify-content-center
      .col-lg-12
        figure
          img.mb-3(src='@/assets/curso/img82.jpg', alt='Texto que describa la imagen') 
    #t_2_7.titulo-segundo
      h2 2.7 Graficas
      p.mb-5 Las representaciones gráficas de datos se sirven de imágenes más que de tablas para presentar resultados de investigación. Los resultados -en particular los resultados clave– pueden presentarse más eficaz y eficientemente mediante gráficas. (McDaniel,2016).
    h6 Tipos de gráficas
    ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 1
            p
              b Graficas lineales.
              b-none Son una de las formas de gráficas más simples. Son particularmente útiles para presentar medidas en el curso del tiempo. 
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 2
            p
              b Graficas circulares.
              b-none  Muestran la parte o porcentaje que representa cada clase del total de número de frecuencia. (Lind,2015). Son apropiadas para presentar resultados en una extensa gama de situaciones.
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 3
            p
              b Histograma o graficas de barras.
              b-none gráfica en la que las clases se señalan en el eje horizontal y las frecuencias de clase, en el eje vertical. Las frecuencias de clase se representan por medio de las alturas de barras, que se dibujan de manera adyacente. (Lind,2015) Existen varios tipos de gráficas de barras: simple, agrupadas, apiladas y tridimensional de filas múltiples.
    #t_2_8.titulo-segundo
      h2 2.8 Tablas
    p.mb-5 En la estadística se utilizan diferentes tablas para representar la información, las principales son las tablas de frecuencia que para (Lind, 2015), son una agrupación de datos cualitativos en clases mutuamente excluyentes y colectivamente exhaustivas que muestra el número de observaciones de cada clase.
      br
      br
      |La tabla de frecuencias es una clasificación de datos y permite tener una mejor idea acerca de los datos iniciales. Además, los valores de las frecuencias individuales se ven influidos por el tamaño de la muestra, pues cuando las muestras son grandes, las frecuencias individuales serán mayores que cuando son pequeñas. La comparación entre diferentes muestras se vuelve complicada; también se torna difícil de interpretar y comprender la problemática planteada, por ello se recurre al concepto de frecuencia relativa, (Domínguez,2015)
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5.text-center
          table
            caption
            thead
              tr
                th.cuadros--azul.text-white X
                th.cuadros--azul.text-white Frecuencia absoluta
                th.cuadros--azul.text-white Frecuencia absoluta acumulada
                th.cuadros--azul.text-white Frecuencia Relativa
                th.cuadros--azul.text-white Frecuencia relativa acumulada
            tbody
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 1
                td 7
                td 7
                td 0,6
                td 0,6
              tr
                td.cuadros--oro.text-white.text-center 2
                td 19
                td 26
                td 0,15
                td 0,21
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 3
                td 25
                td 51
                td 0,20
                td 0,41
              tr
                td.cuadros--oro.text-white.text-center 4 
                td 12
                td 63
                td 0,10
                td 0,50
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 5
                td 23
                td 86
                td 0,18
                td 0,69
              tr
                td.cuadros--oro.text-white.text-center 6
                td 15
                td 101
                td 0,12
                td 0,81
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 7
                td 8
                td 109
                td 0,06
                td 0,87
              tr
                td.cuadros--oro.text-white.text-center 8
                td 16
                td 125
                td 0,13
                td 1,00
                
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center Total
                td 125
                td 125
                td 1
                td 1
    #t_2_9.titulo-segundo
      h2 2.9 Medidas de tendencia central
    p.mb-5 La estadística descriptiva es un medio eficiente de resumir las características básicas de grandes conjuntos de datos. En un análisis estadístico, el analista calcula uno o varios números que revelan algo sobre las características de grandes conjuntos de datos, (McDaniel,2016).
      br
      br
      |Las medidas de tendencia central son puntos en una distribución obtenida, los valores medios o centrales de ésta, y nos ayudan a ubicarla dentro de la escala de medición. Las principales medidas de tendencia central son: moda, mediana y media, (Hernández et al., 2014)
    p.mb-5 
      b Moda. 
      b-none es la categoría o puntuación que ocurre con mayor frecuencia. (Hernández et al., 2014) 

      
      |Definida como aquel valor de la variable que más se repite, es decir que tiene la máxima frecuencia de la distribución. 
      br
      |Datos: 6, 8, 6, 10, 5          
      br
      |La moda: la que más se repite: 
      br
      |Md = 6
      br
      br
      |Si hay dos modas se denomina Bimodal
      br
      |Si hay más modas se denomina Multimodal
    p.mb-5 
      b Media. 
      b-none es el valor que divide la distribución por la mitad. Esto es, la mitad de los casos caen por debajo de la mediana y la otra mitad se ubica por encima de ésta. La mediana refleja la posición intermedia de la distribución (Hernández et al., 2014)
      br
      br
      |Es el valor central, ya sea mediante la observación directa de los datos o a través de la aplicación de la fórmula que determina la posición en donde se encuentra la mediana:
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.mx-2.d-inline-block
                b x  =
              p.d-inline-block.ps-2.text-center
                b Σxi
                  hr.hr.m-0
                b n
              p.d-inline-block.mx-2
                b ≡
              p.d-inline-block.ps-2.text-center
                b suma de todos los valores observados
                  hr.hr.m-0
                b número de observaciones
    p.mb-5
      b Ej.
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.mx-2.d-inline-block
                b x  =
              p.d-inline-block.ps-2.text-center
                b Σxi
                  hr.hr.m-0
                b n
              p.d-inline-block.mx-2
                b ≡
              p.d-inline-block.ps-2.text-center
                b 6+8+6+10+15
                  hr.hr.m-0
                b 5
              p.mx-2.d-inline-block
                b =
              p.d-inline-block.ps-2.text-center
                b 45
                  hr.hr.m-0
                b 5
              p.mx-2.d-inline-block
                b =
              p.d-inline-block.ps-2.text-center
                b 9
    p.mb-5 
      b Mediana. 	
      b-none es el valor que divide la distribución por la mitad. Esto es, la mitad de los casos caen por debajo de la mediana y la otra mitad se ubica por encima de ésta. La mediana refleja la posición intermedia de la distribución (Hernández et al., 2014)
        br
        br
        |Es el valor central, ya sea mediante la observación directa de los datos o a través de la aplicación de la fórmula que determina la posición en donde se encuentra la mediana:
        br
        br
        |((n+1))/2  , donde n corresponde al número de datos.
        br
        br
        |Si el número de datos es impar dará en el medio y si es par se suman los 2 datos y se dividen en 2
        br
        br
        |Consideremos los datos 5, 6, 6, 8, 10
        br
        br
        |Al realizar la formula (5+1) / 2 se determina que la posición que ocupa la mediana es 3 entonces la mediana es me=6
    #t_2_10.titulo-segundo
      h2 2.10 Desviaciones
    p.mb-5 Las medidas de dispersión son los siguientes:
      br
      br
      b Varianza. 
      b-none Media aritmética de los valores absolutos de las desviaciones con respecto a la media aritmética. (Lind,2015)
      br
      br
      |En datos no agrupados se tiene en cuenta la siguiente formula:
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.mx-2.d-inline-block
                b S^2  =
              p.d-inline-block.ps-2.text-center
                b Σ〖(xi-x)〗^2
                  hr.hr.m-0
                b N
    p.mb-5 
      b Desviación estándar. 
      b-none Esta medida se expresa en las unidades originales de medición de la distribución, y se interpreta en relación con la media. Cuanto mayor sea la dispersión de los datos alrededor de la media, mayor será la desviación estándar. O, dicho de otra manera, la desviación estándar es el promedio o variación esperada en relación con la media aritmética (Benassini, 2009; Hernández et al., 2014; Malhotra, 2008).
      br
      br
      |Para la fórmula es necesario sacarle la raíz cuadrada a la varianza.
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.mx-2.d-inline-block
                b S=√(s^2 )
    p.mb-5 Desviación media. es igual a la media aritmética de las diferencias entre los diversos elementos y su media.
    .row.mb-5.justify-content-center
      .col-10
        .tabla-a.color-acento-botones.mb-5.text-center
          table
            caption Fuente: Autor
            thead
              tr
                th.cuadros--azul.text-white Rango
                th.cuadros--azul.text-white Xi
                th.cuadros--azul.text-white fi
                th.cuadros--azul.text-white Xifi
                th.cuadros--azul.text-white l Xi – X l
                th.cuadros--azul.text-white l X i– X l fi
            tbody
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 30 -50
                td 40
                td 6
                td 240
                td 20
                td 120
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 50 - 70
                td 60
                td 5
                td 300
                td 0
                td 0
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center 70 - 90
                td 80
                td 4
                td 320
                td 20
                td 80
              tr.tarjeta--gris
                td.cuadros--oro.text-white.text-center Total   
                td 100
                td 15
                td 860
                td 40
                td 200
    p.mb-5 Luego de completar el cuadro se utilizan las siguientes fórmulas para hallar la desviación media para datos agrupados son:
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.mx-2.d-inline-block
                b  y  =
              p.d-inline-block.ps-2.text-center
                b ∑ Xi . fi
                  hr.hr.m-0
                b fi
    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.justify-content-center
              p.mx-2.d-inline-block
                b Da =
              p.d-inline-block.ps-2.text-center
                b ∑l X i– X l fi
                  hr.hr.m-0
                b ȳ








</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
