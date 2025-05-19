<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Presupuesto

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5 
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p El presupuesto en el contexto del <em>merchandising</em> es un componente crucial para la planificación y ejecución de las estrategias dentro del punto de venta. A través de un presupuesto bien definido, se pueden asignar los recursos necesarios para alcanzar los objetivos del plan de <em>merchandising</em> de manera eficiente y efectiva. A continuación, ampliamos los conceptos, las técnicas y ejemplos de cómo establecer un presupuesto para un plan de <em>merchandising</em>.

        #t_6_1.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 6.1 Concepto

        .tarjeta.bg-fondo-5.p-4.mb-5
          SlyderA(tipo="b").bg-color-white.tarjeta.p-4
            .row
              .col-md-7.mb-4.mb-md-0.order-2
                p El  presupuesto de <em>merchandising</em> es un plan financiero detallado que estima los costos asociados con la ejecución de las actividades de <em>merchandising</em> en un punto de venta. Comprende los costos tanto directos como indirectos asociados con la promoción de los productos, su presentación visual en el espacio de venta, la capacitación del personal encargado y la ejecución de campañas publicitarias, entre otras actividades.
              .col-md-5.order-1
                figure
                  img(src="@/assets/curso/temas/tema6/2.png", alt="Imagen de acompañamiento")
            .row
              .col-md-7.mb-4.mb-md-0.order-2
                p En un mercado competitivo, un presupuesto adecuado garantiza que los recursos sean asignados de manera eficiente para maximizar el impacto de las estrategias de <em>merchandising</em>. Sin un presupuesto, el plan de <em>merchandising</em> podría volverse ineficaz, ya que los costos pueden desbordarse sin una planificación adecuada.
                h5 Ejemplo: 
                p Para una campaña de <em>merchandising</em> en un supermercado, los gastos podrían incluir:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Material promocional: carteles, etiquetas, y <em>displays</em>.
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Publicidad: anuncios en medios locales o redes sociales.
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Personal: salarios de los encargados de implementar y supervisar la disposición de los productos.
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-9
                    p.mb-0 Distribución: costos de transporte de productos hacia los puntos de venta.
              .col-md-5.order-1
                figure
                  img(src="@/assets/curso/temas/tema6/3.png", alt="Imagen de acompañamiento")

    .titulo-sexto.color-primario.mb-5
      h5 Tabla 3.
      span Ejemplo de presupuesto de <em>merchandising</em>
      
    .tabla-a.color-acento-botones.mb-5
      table
        caption Fuente: SENA, 2025.
        thead
          tr
            th.bg-color-4.text-white Componente
            th.bg-color-4.text-white Descripción
            th.bg-color-4.text-white Costo Estimado $
        tbody
          tr.bg-color-white
            td Material promocional
            td Carteles, etiquetas, <em>displays</em>
            td 4.000.000 
          tr.bg-color-5
            td Publicidad
            td Anuncios en redes sociales y medios locales
            td 4.500.000 
          tr.bg-color-white
            td Personal
            td Sueldos de empleados encargados de la ejecución
            td 10.000.000
          tr.bg-color-5
            td Distribución
            td Transporte de productos al punto de venta
            td 2.000.000
          tr.bg-color-white
            td Total
            td Suma total de los costos involucrados
            td $20.500.000
          
    separador

    #t_6_2.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 6.2	Técnicas de definición
    
    p.mb-5 Para definir un presupuesto de <em>merchandising</em> eficaz, existen varias técnicas que pueden ser adaptadas según el contexto y los objetivos del plan. Las tres técnicas principales para definir un presupuesto son:

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="PRESUPUESTO  INCREMENTAL")
        h5 PRESUPUESTO  INCREMENTAL
        p Esta técnica se basa en tomar el presupuesto del periodo anterior y ajustarlo según las necesidades del nuevo plan. En este método, el presupuesto se incrementa o decrementa en función de los cambios en las actividades de <em>merchandising</em> o de las metas propuestas. 
        p Ventajas: sencillez en su aplicación. Facilita la continuidad de los proyectos a largo plazo, ya que parte de los presupuestos previos.
        p.mb-0 Ejemplo: si el presupuesto destinado a <em>merchandising</em> en el año anterior fue de $10.000.000 y se decide aplicar un incremento del 5 % para ampliar las acciones promocionales, el nuevo presupuesto para el periodo actual sería de $10.500.000, reflejando el ajuste necesario para cubrir los objetivos ampliados.
      .tarjeta.color-acento-botones--borde.p-4(titulo="PRESUPUESTO BASADO EN ACTIVIDADES")
        h5 PRESUPUESTO BASADO EN ACTIVIDADES
        p En esta técnica, se define el presupuesto según las actividades específicas que se deben realizar para alcanzar los objetivos de <em>merchandising</em>. Cada actividad recibe una asignación de recursos y los costos se calculan detalladamente.
        p Ventajas: permite una asignación precisa de recursos a actividades prioritarias. Facilita la evaluación del retorno de inversión (ROI) de cada actividad.
        p.mb-0 Ejemplo: en un plan de <em>merchandising</em> que contempla la elaboración de displays, campañas en redes sociales y contratación de personal, el presupuesto se distribuye según el costo estimado de cada actividad. La suma de estas asignaciones individuales constituye el presupuesto total del proyecto.
      .tarjeta.color-acento-botones--borde.p-4(titulo="PRESUPUESTO POR OBJETIVOS")
        h5 PRESUPUESTO POR OBJETIVOS
        p El presupuesto por objetivos se calcula en función de los resultados que se esperan lograr. Este enfoque se basa en establecer metas claras, y luego estimar los recursos necesarios para alcanzarlas. Es ideal cuando los objetivos son medibles y se puede calcular el impacto de las actividades de <em>merchandising</em> en términos de ventas, visitas al punto de venta, o participación en promociones.
        p Ventajas: está orientado a resultados. Permite medir la efectividad del presupuesto al compararlo con los objetivos alcanzados.
        p.mb-0 Ejemplo: cuando el objetivo es incrementar en un 10 % las ventas de un producto durante un trimestre, el presupuesto se define en función de las actividades estratégicas necesarias como promociones, eventos o publicidad que contribuyan directamente al logro de esa meta. De esta manera, los recursos se asignan con base en los resultados esperados.
    
    .row.mb-5
      .col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema6/4.png", data-aos="zoom-in")
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.bg-color-14
          p.mb-0 El presupuesto en <em>merchandising</em> es esencial para gestionar de manera efectiva las estrategias dentro de un punto de venta. Un presupuesto bien estructurado no solo facilita la asignación de recursos, sino que también permite medir el éxito de las campañas y actividades. Dependiendo de las necesidades y los objetivos, se puede optar por una técnica como el presupuesto incremental, basado en actividades o por objetivos. Cada una de estas técnicas tiene sus beneficios y debe ser seleccionada según las características del proyecto de <em>merchandising</em>.
        

              

</template>

<script>
export default {
  name: 'Tema4',
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
