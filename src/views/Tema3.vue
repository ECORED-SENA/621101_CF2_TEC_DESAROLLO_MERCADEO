<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
        .titulo-principal__numero
          span 3
        h1 Manejo de Software para estadística.
        figure.mb-5 
          img(src='@/assets/curso/img83.jpg', alt='Texto que describa la imagen') 
    p.mb-5 Se debe tener en cuenta el software licenciado que tiene el Sena el más indicado es el SPSS. Se debe incorporar un manual de uso del programa SPSS (Statistical Package for the Social Sciences) (SPSS, Inc.) para la tabulación, tratamiento y análisis de los datos. 
      br
      br
      |De igual manera, usted puede utilizar otro software para el tratamiento de los datos estadísticos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
