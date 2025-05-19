<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cronograma

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        #t_4_1.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 4.1 Concepto

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5 
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p El cronograma es una herramienta clave en la gestión de proyectos que organiza las actividades y tareas en función del tiempo. Es un gráfico o tabla donde se detallan las fechas de inicio y finalización de cada acción, lo cual facilita la programación y el seguimiento de las tareas. En el contexto del <em>merchandising</em>, el cronograma no solo debe reflejar la ejecución de las acciones en el punto de venta, sino también los tiempos de entrega de los entregables, los hitos importantes y la disponibilidad de recursos humanos y materiales (Kerzner, 2017; SENA, 2020).

        .titulo-sexto.color-primario.mb-3
          h5 Tabla 2.
          span Cronograma de actividades - diagrama de Gantt
          
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: SENA, 2025.
            thead
              tr
                th.bg-color-4.text-white Actividades / Semanas
                th.p-1.bg-color-4.text-white Sem.1
                th.p-1.bg-color-4.text-white Sem.2
                th.p-1.bg-color-4.text-white Sem.3
                th.p-1.bg-color-4.text-white Sem.4
                th.p-1.bg-color-4.text-white Sem.5
                th.p-1.bg-color-4.text-white Sem.6
                th.p-1.bg-color-4.text-white Sem.7
                th.p-1.bg-color-4.text-white Sem.8
                th.p-1.bg-color-4.text-white Sem.9
                th.p-1.bg-color-4.text-white Sem.10
                th.p-1.bg-color-4.text-white Sem.11
                th.p-1.bg-color-4.text-white Sem.12
            tbody
              tr.bg-color-white
                td Diagnóstico estratégico
                td.bg-color-15 
                td 
                td
                td
                td 
                td 
                td
                td
                td 
                td 
                td
                td
              tr.bg-color-5
                td Diseño del <em>layout</em> y promociones
                td 
                td.bg-color-16 
                td.bg-color-16
                td
                td 
                td 
                td
                td
                td 
                td 
                td
                td
              tr.bg-color-white
                td Implementación en tienda
                td 
                td 
                td
                td.bg-color-17
                td.bg-color-17 
                td.bg-color-17 
                td.bg-color-17
                td
                td 
                td 
                td
                td
              tr.bg-color-5
                td Campañas digitales
                td 
                td 
                td
                td.bg-color-18
                td.bg-color-18 
                td.bg-color-18 
                td.bg-color-18
                td.bg-color-18
                td 
                td 
                td
                td
              tr.bg-color-white
                td Seguimiento y evaluación
                td 
                td 
                td
                td
                td 
                td 
                td
                td
                td.bg-color-19 
                td.bg-color-19 
                td.bg-color-19
                td.bg-color-19 
              tr.bg-color-5
                td(colspan="13") Nota: Las barras de colores representan semanas activas de ejecución por actividad.

    p El cronograma permite tener una visión clara del progreso de la implementación del plan de <em>merchandising</em>, ajustando recursos y plazos de manera oportuna.

    separador

    #t_4_2.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 4.2	Tipos e importancia
    
    p Existen varios tipos de cronogramas según el enfoque y el detalle de la información que se desee manejar. A continuación, se explican los más comunes en proyectos de <em>merchandising</em>:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema4/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-20")
          div(titulo="Cronograma Gantt") Un gráfico de barras que visualiza las tareas a realizar, los plazos y las interdependencias entre ellas.
          div(titulo="Cronograma de hitos") Enfocado en mostrar los eventos importantes o hitos a lo largo del proyecto, sin detallar cada tarea.
          div(titulo="Cronograma de recursos") Indica la asignación de recursos (personas, materiales, equipos) a cada tarea o actividad en el tiempo.
          div(titulo="Cronograma de fases") Organiza las actividades según etapas del proyecto, indicando claramente las fechas de inicio y fin.
          
    p.mb-5 Además de reflejar fechas y actividades, los cronogramas cumplen funciones clave que contribuyen a la gestión eficiente de un proyecto. A continuación, se describen algunos aspectos fundamentales que explican por qué esta herramienta es indispensable en la planeación del <em>merchandising</em>, desde la organización de tareas hasta la mejora de la comunicación y el control del avance.

    .row
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema4/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="Organización")
            h5 Organización
            p.mb-0 Permite distribuir adecuadamente las tareas y actividades, asegurando que se realicen en el orden correcto.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Control")
            h5 Control
            p.mb-0 Facilita el seguimiento del avance de las tareas, lo que permite detectar retrasos o desviaciones en el tiempo.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Prevención")
            h5 Prevención
            p.mb-0 Ayuda a anticipar posibles problemas de ejecución, lo que optimiza tiempos y recursos al estar preparado para ellos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Comunicación")
            h5 Comunicación
            p.mb-0 Mejora la coordinación del equipo, ya que todos tienen claro qué tareas deben realizar y cuándo, facilitando el trabajo conjunto.
    
    p.mb-5 Ir al video de apoyo, donde se establece información detallada del tema plan de <em>merchandising</em>: 

    .row.justify-content-center
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=WkDndhBadWw" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Video</b>. Cronograma y Diagramas de Gantt

    separador

    #t_4_3.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 4.3	Pasos de elaboración 
    
    p.mb-5 Elaborar un cronograma efectivo requiere seguir una serie de pasos metodológicos que permitan obtener una herramienta útil y clara. Estos pasos son:

    .row.align-items-start.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema4/4.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Definir actividades") Identificar todas las actividades necesarias para la ejecución del plan de <em>merchandising</em>.
          
          p(numero="2" titulo="Establecer la duración") Fijar el tiempo necesario para realizar cada una de las actividades.
          
          p(numero="3" titulo="Determinar relaciones") Establecer las dependencias entre tareas permite identificar qué actividades deben realizarse antes que otras.
          
          p(numero="4" titulo="Asignar recursos") Asignar el personal, materiales y recursos necesarios para cada tarea del cronograma.
          p(numero="5" titulo="Establecer fechas") Fijar las fechas de inicio y finalización para cada actividad e hito.
          p(numero="6" titulo="Evaluar y ajustar") Realizar un seguimiento continuo y ajustar el cronograma según los cambios que puedan surgir.
    
    p Este proceso asegura que el cronograma sea completo, realista y alineado con los objetivos del plan de <em>merchandising</em>.
    

          

              

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
