<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Diseño de un plan de <em>merchandising</em> desarrolla conceptos fundamentales para la organización y ejecución estratégica del punto de venta. Abarca temas como el concepto, importancia y estructura del plan de <em>merchandising</em>, así como la identificación de hitos y entregables. También se profundiza en la gestión del talento humano, la elaboración de cronogramas, definición de indicadores y construcción de presupuestos. Este aprendizaje permite al estudiante integrar herramientas visuales, sensoriales y de gestión para mejorar la experiencia del cliente. Además, se incluye un ejemplo general que facilita la comprensión del proceso completo.
    .row.justify-content-center.bg-color-1.tarjeta
      .col-lg-12.mb-5.bgs.p-4.brad.p-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo “Diseño de un plan de <em>merchandising”</em> desarrolla conceptos fundamentales para la organización y ejecución estratégica del punto de venta. Abarca temas como el concepto, importancia y estructura del plan de <em>merchandising</em>, así como la identificación de hitos y entregables. También se profundiza en la gestión del talento humano, la elaboración de cronogramas, definición de indicadores y construcción de presupuestos. Este aprendizaje permite al estudiante integrar herramientas visuales, sensoriales y de gestión para mejorar la experiencia del cliente. Además, se incluye un ejemplo general que facilita la comprensión del proceso completo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
