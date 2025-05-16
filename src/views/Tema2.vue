<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Hitos y entregables
    
    #t_2_1.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 2.1 Concepto
    
    .row.mb-5.align-items-center
      .col-lg-6.order-2
        figure
          img(src="@/assets/curso/temas/tema2/1.png", data-aos="zoom-in")
      .col-lg-6.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Dentro de la planeación del merchandising, los hitos y entregables representan puntos de control y resultados tangibles que permiten evaluar el avance y éxito de un proyecto. Los hitos son eventos clave o logros significativos que marcan el progreso de un plan; mientras que los entregables son los productos, servicios o documentos específicos que deben generarse como parte del proceso.
    
    p.mb-5 Según Kerzner (2017), los hitos “representan eventos verificables dentro de un proyecto que no consumen recursos ni tienen duración, pero que reflejan el cumplimiento de objetivos parciales”. Por su parte, los entregables son definidos como “resultados concretos y medibles que se esperan al finalizar una fase o tarea específica”.

    .cajon.color-acento-contenido.p-4.mb-4.bg-color-14
      p.mb-0 En el merchandising, ejemplos de hitos incluyen la aprobación del diseño del punto de venta o la instalación del mobiliario. Los entregables podrían ser los manuales visuales, planos de exhibición o los informes de ejecución.

    separador

    #t_2_2.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 2.2.	Características
    
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        p.mb-5 A continuación, se describen las principales características que deben cumplir los hitos y entregables para garantizar su utilidad y eficacia dentro de un plan de merchandising. Cada elemento se presenta de forma individual para facilitar su análisis y comprensión.

        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema2/2.png", alt="").mb-4.mb-lg-0
          .col-lg-8
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-20")
              div(titulo="Hitos")
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 No tienen duración ni consumo de recursos. 
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Marcan decisiones o logros clave. 
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Son verificables y permiten evaluar avances.
              div(titulo="Entregables")
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Tangibles, concretos y medibles. 
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Requieren recursos y tiempo para ser elaborados. 
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Pueden ser productos físicos o documentos.
        
        p El seguimiento adecuado de estos elementos facilita la gestión del plan y permite identificar retrasos, desviaciones o necesidades de ajuste a tiempo.

        separador

        #t_2_3.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 2.3.	Pautas de estructuración
        
        p.mb-5 Para estructurar correctamente los hitos y entregables en un plan de merchandising, es necesario seguir ciertas pautas metodológicas que aseguren la coherencia, la trazabilidad y la eficiencia de los procesos. A continuación, se explican algunas recomendaciones clave:

        .row
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/temas/tema2/3.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            TabsA.color-acento-botones.mb-5
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-acento-botones--borde.p-4(titulo="Definir objetivos específicos")
                p Relacionar cada hito y entregable con un objetivo general y específico del plan.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Establecer cronograma realista")
                p Asociar cada hito con una fecha de cumplimiento y cada entregable con un tiempo estimado de producción.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Asignar responsables")
                p Determinar qué personas o equipos serán responsables de alcanzar los hitos y producir los entregables.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Establecer criterios de validación")
                p Definir cómo se comprobará que un hito ha sido alcanzado y que un entregable cumple con los estándares.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Documentar todo")
                p Registrar cada hito y entregable con detalle en el plan para permitir su seguimiento y evaluación.
    
        p Estas pautas no solo favorecen la organización, sino que también permiten que el equipo de trabajo se alinee en torno a metas comunes y medibles. 
    
    


                
        
                
              
              


</template>

<script>
export default {
  name: 'Tema2',
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
