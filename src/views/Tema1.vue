<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de Merchandising
    
    #t_1_1.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 1.1 Concepto

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p El merchandising, como estrategia comercial integral, se ha convertido en una herramienta esencial para las empresas que desean destacarse en mercados competitivos. Más allá de la simple exhibición de productos, el merchandising implica una planificación detallada que abarca desde la organización del punto de venta hasta el análisis de resultados, con el fin de influir positivamente en la decisión de compra del consumidor (Kotler & Keller, 2016; Santesmases, 2012). <br>
        p.mb-0 El plan de merchandising es un documento estratégico que organiza, define y orienta las acciones relacionadas con la presentación, promoción y posicionamiento de productos o servicios de un punto de venta. Su propósito es atraer al cliente, facilitar la compra y optimizar los resultados comerciales.
    
    p.mb-5 Según Levy y Weitz (2012), el merchandising “involucra la planificación de la gama de productos, su disposición visual y la ambientación del establecimiento, de forma tal que se incentive el comportamiento de compra”. Por tanto, el plan articula elementos visuales, sensoriales y estratégicos que se traducen en una experiencia de compra más atractiva y rentable.

    separador

    #t_1_2.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 1.2.	Importancia
    
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        p.mb-5 El plan de merchandising cumple múltiples funciones estratégicas dentro de una organización comercial. A continuación, se describen sus principales beneficios:

        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/2.png", alt="").mb-4.mb-lg-0
          .col-lg-7
            LineaTiempoD.color-acento-botones
              p(numero="1" titulo="Atracción de clientes") Mejora el atractivo del punto de venta, incrementando el tráfico de personas.
              
              p(numero="2" titulo="Incremento en ventas") Facilita la toma de decisiones de compra al reducir la fricción visual.
              
              p(numero="3" titulo="Fidelización del consumidor") Genera experiencias positivas que fortalecen el vínculo con la marca.
              
              p(numero="4" titulo="Posicionamiento del producto") Mejora la percepción del valor del producto en la mente del consumidor.
              p(numero="5" titulo="Optimización del espacio físico") Aprovecha racionalmente cada área del punto de venta para generar más ingresos.
    
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-primario
              h5 Figura 1.
              span Ventajas estratégicas del plan de merchandising 

            figure.mb-3
              img(src="@/assets/curso/temas/tema1/3.png", data-aos="zoom-in")
            figcaption Fuente. SENA, 2025.
    
    separador

    #t_1_3.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 1.3.	Estructura
    
    p.mb-5 Un plan de merchandising bien estructurado debe contemplar al menos los siguientes elementos:

    .titulo-sexto.color-primario.mb-5
      h5 Tabla 1.
      span Estructura de un plan de merchandising 
      
    .tabla-a.color-acento-botones.mb-5
      table
        caption Fuente: Kotler & Keller, 2021.
        thead
          tr
            th.bg-color-4.text-white(width="20%") Elemento
            th.bg-color-4.text-white Descripción
            th.bg-color-4.text-white Ejemplos
        tbody
          tr.bg-color-white
            td Objetivos
            td Metas claras y medibles que orientan las acciones de merchandising.
            td 
              p 1. Aumentar en un 15 % las ventas de productos frescos en el primer trimestre.
              p.mb-0 2. Incrementar el flujo de clientes en un 20 % durante el fin de semana. 
          tr.bg-color-5
            td Público objetivo
            td Características demográficas y comportamentales del cliente al que se dirige.
            td 
              p 1. Mujeres entre 25 y 45 años, interesadas en alimentación saludable.
              p.mb-0 2. Jóvenes entre 18 y 30 años, con hábitos de compra digital y rápida decisión. 
          tr.bg-color-white
            td Estrategias
            td Conjunto de acciones planificadas para lograr los objetivos establecidos.
            td 
              p 1. Rediseñar la exhibición de frutas y verduras con señalización atractiva.
              p.mb-0 2. Implementar promociones cruzadas entre productos complementarios. 
          tr.bg-color-5
            td Plan de acción
            td Actividades detalladas, responsables, recursos y cronograma.
            td 
              p 1. Capacitar al personal en técnicas de exhibición y reorganizar estantes.
              p.mb-0 2. Coordinar con proveedores la entrega anticipada de productos destacados. 
          tr.bg-color-white
            td Indicadores de evaluación
            td Métricas que permiten medir el impacto de las acciones implementadas.
            td 
              p 1. Incremento del ticket promedio diario.
              p.mb-0 2. Aumento en la rotación de productos por categoría.
          tr.bg-color-5
            td Presupuesto
            td Estimación y asignación de recursos financieros para ejecutar el plan.
            td 
              p 1. $2.000.000 COP para rediseño de góndolas y material POP.
              p.mb-0 2. $1.200.000 COP para campañas promocionales y capacitación del personal. 
    
    p Cada elemento responde a una lógica secuencial que permite una ejecución eficiente, evaluación continua y mejora permanente del plan.

         
    


 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
