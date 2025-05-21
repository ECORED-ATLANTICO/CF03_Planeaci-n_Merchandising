<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Talento humano 
    
    
    div.tarjeta-horz(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/tema3/1.png', alt='Imagen decorativa')
      div
        p.mb-0 El éxito de cualquier estrategia de <em>merchandising</em> no solo depende del diseño o la ubicación del producto, sino también del equipo humano que la ejecuta. El talento humano es el motor que pone en marcha las acciones previstas en el plan. Contar con personas idóneas, comprometidas y capacitadas permite materializar los objetivos comerciales y generar experiencias positivas para los clientes.
    
    p En importante analizar las principales características del talento humano en el contexto del <em>merchandising</em>, su perfil profesional y las responsabilidades específicas que asumen en la ejecución del plan. Comprender estos aspectos facilita una gestión efectiva de los equipos, optimizando los recursos humanos y maximizando el impacto de la estrategia.

    separador
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        #t_3_1.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 3.1	Características
    
        p.mb-5 El talento humano involucrado en la planeación y ejecución del <em>merchandising</em> debe reunir una serie de características que lo hagan competente frente a los retos del mercado, la innovación y la interacción con el consumidor. A continuación, se presentan estas características:

        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/2.png", alt="").mb-4.mb-lg-0
          .col-lg-8
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-20")
              div(titulo="Orientación al cliente") Capacidad para entender las necesidades y expectativas del consumidor y adaptar la experiencia de compra.
              div(titulo="Creatividad e innovación") Capacidad para generar propuestas originales y novedosas en la organización de productos, el diseño de escaparates y la creación de exhibiciones atractivas.
              div(titulo="Habilidades comunicativas") Facilidad para transmitir ideas, instrucciones y coordinar acciones con diferentes actores del proceso.
              div(titulo="Capacidad analítica") Competencia para interpretar datos, resultados de ventas y comportamientos de los clientes.
              div(titulo="Trabajo en equipo") Disposición para colaborar y articular acciones con áreas como ventas, <em>marketing</em> y operaciones.
              div(titulo="Adaptabilidad") Flexibilidad para ajustarse a cambios en las estrategias, productos o entornos comerciales.

        p Estas características deben desarrollarse mediante procesos de formación continua y prácticas de liderazgo participativo.

        separador
    
    #t_3_2.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 3.2	Perfilación de cargos 
    
    p.mb-5 Una gestión adecuada del talento humano requiere de la definición clara de perfiles de cargos, donde se especifiquen funciones, competencias requeridas y niveles de responsabilidad. Esto permite seleccionar, capacitar y evaluar al personal de forma coherente con los objetivos del plan.

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2.p-4
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 Coordinador de <em>merchandising</em>
                img.mb-(src='@/assets/curso/temas/tema3/4.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 PERFIL REQUERIDO
                p  Profesional en mercadeo, administración o diseño, con experiencia en puntos de venta.
                h5 FUNCIONES CLAVES
                p.mb-0 Diseñar estrategias, coordinar al equipo, supervisar ejecución.
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 <em>Merchandiser</em> o impulsador
                img.mb-(src='@/assets/curso/temas/tema3/5.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 PERFIL REQUERIDO
                p   Técnica/o en ventas o mercadeo, habilidades comunicativas y orientación al cliente.
                h5 FUNCIONES CLAVES
                p.mb-0 Implementar exhibiciones, reponer productos, reportar incidencias.
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 Diseñador de vitrinas
                img.mb-(src='@/assets/curso/temas/tema3/6.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 PERFIL REQUERIDO
                p   Formación en diseño gráfico o industrial, dominio de <em>software</em> visual.
                h5 FUNCIONES CLAVES
                p.mb-0 Crear conceptos visuales, bocetos y materiales de apoyo.
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 Analista de resultados
                img.mb-(src='@/assets/curso/temas/tema3/7.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 PERFIL REQUERIDO
                p   Profesional en administración, estadística o economía, conocimiento en KPIs y CRM.
                h5 FUNCIONES CLAVES
                p.mb-0 Monitorear indicadores, analizar tendencias y proponer mejoras.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema3/3.png', alt='')
    
    p.mb-5 Cada uno de estos perfiles contribuye desde su especialidad al logro de los objetivos del <em>merchandising</em>.

    .titulo-sexto.color-primario
      h5 Figura 2.
      span Perfiles del talento humano en <em>merchandising</em>

    figure.mb-3
      img(src="@/assets/curso/temas/tema3/8.svg", data-aos="zoom-in", alt="Se detalla a continuación los perfiles del talento humano en merchandising: - Coordinador de Merchandising: dirige estrategias y coordina el equipo. - Merchandiser o Impulsador: ejecuta exhibiciones y repone productos. - Diseñador de Vitrinas: crea conceptos visuales y vitrinas. - Analista de Resultados: analiza datos y propone mejoras.")
    figcaption Fuente: SENA, 2025.

    separador

    #t_3_3.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 3.3	Responsabilidades
    
    .cajon.color-acento-contenido.p-4.mb-4.bg-color-14
      p.mb-0 Distribuir responsabilidades claras dentro del equipo humano es fundamental para el cumplimiento efectivo de los planes. Las responsabilidades se deben alinear con los resultados que se esperan y los tiempos que se han definido. 
    
    p.mb-5 A continuación, se presentan las principales responsabilidades dentro de la ejecución del plan de <em>merchandising</em>. Cada sección muestra la función específica, la persona o equipo encargado de ejecutarla y una breve descripción de su propósito. Haz clic en cada título para conocer el detalle correspondiente.

    .row
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="Diseño del plan visual")
            h5 Coordinador y diseñador
            p.mb-0 Plasmar el concepto visual de la marca en los espacios del punto de venta.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Implementación de estrategias")
            h5 <em>Merchandisers</em> e impulsadores
            p.mb-0 Ejecutar actividades en el punto de venta según cronograma.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Seguimiento y evaluación")
            h5 Coordinador y analista de resultados
            p.mb-0 Revisar avances, comparar con KPIs y realizar ajustes.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Capacitación del equipo")
            h5 Coordinador y área de formación
            p.mb-0 Garantizar que todo el personal aplique de manera coherente las prácticas establecidas de <em>merchandising</em>.
          

    p Una gestión clara de las responsabilidades permite identificar fallas y fortalezas en el equipo. Al definir tareas y responsables, se detectan cuellos de botella y se reconoce el buen desempeño. Esto facilita ajustes eficientes y mejora el rendimiento colectivo.




</template>

<script>
export default {
  name: 'Tema3',
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
