<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/1.png", data-aos="zoom-in")
          .col-lg-8(data-aos="fade-left").order-lg-1
            p En el mundo del comercio actual, lograr que un producto destaque en el punto de venta no es cuestión de suerte, sino de estrategia. El merchandising se convierte en una herramienta clave para atraer clientes, optimizar espacios y aumentar las ventas. Este componente formativo te introduce a la planeación de estas estrategias, centrándose en los elementos fundamentales para lograr una ejecución exitosa.

            .cajon.color-acento-botones.p-4.mb-4.bg-color-8
              p.mb-0 A lo largo del componente, descubrirás cómo estructurar un plan de merchandising, organizar los hitos y entregables, definir el talento humano necesario, programar las actividades en un cronograma, establecer indicadores de seguimiento y proyectar un presupuesto. Todo esto será abordado con ejemplos prácticos y una visión clara, que te permitirá aplicar los conocimientos en contextos reales y mejorar los resultados de cualquier espacio comercial.
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Ltew0XXgn_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Sena 2025.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
