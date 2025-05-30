<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Indicadores
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        #t_5_1.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 5.1 Importancia
        .tarjeta.bg-fondo-5.p-4.mb-5
          SlyderA(tipo="b").bg-color-white.tarjeta.p-4
            .row
              .col-md-7.mb-4.mb-md-0.order-2
                p Los indicadores son herramientas esenciales para medir el rendimiento de cualquier estrategia de <em>merchandising</em>. Permiten hacer un seguimiento de los resultados alcanzados, comparar el rendimiento real con los objetivos establecidos y tomar decisiones informadas sobre posibles ajustes en la estrategia. Según el PMI (2021), “los indicadores clave de rendimiento (KPIs, por sus siglas en inglés) son fundamentales para evaluar el éxito de las iniciativas y mantener el enfoque en los objetivos estratégicos”.
              .col-md-5.order-1
                figure
                  img(src="@/assets/curso/temas/tema5/1.png", alt="Imagen de acompañamiento")
            .row
              .col-md-7.mb-4.mb-md-0.order-2
                p En el <em>merchandising</em>, los indicadores permiten medir el éxito de las exhibiciones, la rotación de productos, la efectividad de las promociones, y la experiencia del cliente. A través de ellos, los responsables de la estrategia pueden identificar qué acciones están generando los resultados esperados y cuáles requieren ajustes. Esto hace que los indicadores sean una parte fundamental para la evaluación continua y mejora de los planes.
              .col-md-5.order-1
                figure
                  img(src="@/assets/curso/temas/tema5/2.png", alt="Imagen de acompañamiento")

        separador

        #t_5_2.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 5.2	Método de definición
        
        p.mb-5 Para que los indicadores sean útiles, es crucial definirlos correctamente, asegurándose de que estén alineados con los objetivos comerciales del plan de <em>merchandising</em>. A continuación, se presenta un proceso detallado para definir los indicadores:

        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema5/3.png", alt="").mb-4.mb-lg-0
          .col-lg-7
            LineaTiempoD.color-acento-botones
              div(numero="1" titulo="Establecer objetivos") 
                p Los indicadores deben estar alineados con los objetivos generales del plan de <em>merchandising</em>, como aumentar las ventas, mejorar la experiencia de compra, o incrementar la fidelidad del cliente.
                h5 Objetivo: 
                p Aumentar la tasa de conversión en un 15 % durante el próximo trimestre.
              div(numero="2" titulo="Seleccionar los KPIs") 
                p Elegir los indicadores clave que sean relevantes para cada objetivo. Ejemplos: tasa de conversión, ventas por metro cuadrado, tiempo de permanencia de los clientes en la tienda.
                h5 KPI:  
                p Tasa de conversión, ventas por metro cuadrado, tiempo de permanencia en tienda.
              div(numero="3" titulo="Establecer metas") 
                p Definir valores concretos para cada indicador. Por ejemplo, aumentar las ventas en un 10 % en tres meses.
                h5 Meta: 
                p Incrementar las ventas por metro cuadrado en $100.
              div(numero="4" titulo="Determinar la frecuencia") 
                p Establecer con qué frecuencia se medirán los indicadores (semanal, mensual, trimestral).
                p Medición mensual del tráfico en tienda y conversión de visitantes a compradores.
              div(numero="5" titulo="Recopilar datos") 
                p Recolectar datos de ventas, tráfico, comportamiento de los consumidores y otros aspectos relacionados.
                p Uso de sensores de conteo de personas y <em>software</em> de ventas para recopilar los datos semanalmente.
              div(numero="6" titulo="Evaluar y ajustar") 
                p Evaluar los resultados y ajustar las tácticas si los indicadores muestran que no se están cumpliendo los objetivos.
                p Si no se cumple la meta de conversión, rediseñar la ubicación de productos y mejorar señalización.
    
    P Los indicadores deben ser específicos, medibles, alcanzables, relevantes y con un tiempo determinado (SMART) para asegurar su efectividad y utilidad.

    separador

    #t_5_3.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 5.3	Tipos de indicadores
    
    p.mb-5 Existen diversos tipos de indicadores que se utilizan en <em>merchandising</em>, y la elección de los mismos dependerá de los objetivos específicos de cada plan. Los principales son los siguientes:

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2.p-4
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 INDICADORES DE VENTAS
                img.mb-(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 DESCRIPCIÓN 
                p  Miden el volumen de ventas y la rentabilidad, como ventas totales, ventas por categoría o ventas por cliente.
                h5 FÓRMULA
                p Ventas totales = Precio x Cantidad vendida.
                h5 EJEMPLO  
                p.mb-0 Si se vendieron 500 camisetas a $30 cada una: 500 x 30 = $15.000 en ventas totales.
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 INDICADORES DE TRÁFICO
                img.mb-(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 DESCRIPCIÓN 
                p  Miden el flujo de personas que ingresan al punto de venta, como el número de visitantes por hora o día.
                h5 FÓRMULA
                p Tráfico diario = Total de visitantes / Días del mes.
                h5 EJEMPLO  
                p.mb-0 Si en un mes ingresaron 3.000 personas: 3.000 / 30 = 100 visitantes diarios promedio.
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 INDICADORES DE CONVERSIÓN
                img.mb-(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 DESCRIPCIÓN 
                p Evaluar la tasa de conversión, es decir, el porcentaje de visitantes que realizan una compra.
                h5 FÓRMULA
                p Tasa de conversión = (Número de compradores / Número de visitantes) x 100.
                h5 EJEMPLO  
                p.mb-0 Si ingresan 200 personas y compran 60: (60 / 200) x 100 = 30 % de conversión.
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 INDICADORES DE FIDELIDAD
                img.mb-(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 DESCRIPCIÓN 
                p Miden la lealtad del cliente, como el número de compras repetidas o el tiempo promedio entre compras.
                h5 FÓRMULA
                p Frecuencia de recompra = Número de compras repetidas / Total de clientes.
                h5 EJEMPLO  
                p.mb-0 Si 80 de 200 clientes compraron más de una vez: 80 / 200 = 0,4 (40 % de fidelidad).
              .bg-color-white.p-4.h-100.shadow-app
                h5.text-center.mb-4 INDICADORES DE EFECTIVIDAD DE LA EXHIBICIÓN
                img.mb-(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 DESCRIPCIÓN 
                p Evalúan el impacto de las exhibiciones de productos en las decisiones de compra de los clientes.
                h5 FÓRMULA
                p Efectividad de exhibición = (Ventas productos exhibidos / Ventas totales) x 100.
                h5 EJEMPLO  
                p.mb-0 Si se vendieron $4.000 de productos en exhibición y $10.000 en total: (4000 / 10000) x 100 = 40 % de efectividad.
  
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema5/4.png', alt='')
    
    p Estos indicadores proporcionan información crucial que puede ser utilizada para ajustar las estrategias y mejorar la eficacia del <em>merchandising</em>. 
    p.mb-5 Ir a los videos de apoyo, donde se establece información detallada del tema indicadores:


    .row.justify-content-center
      .col-lg-6
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/componentes/2.svg' alt='AvatarTop' style="width: 80px")
          .tarjeta.tarjeta--azul.align-content-center
            .row.justify-content-between.p-4
              .col.mb-3.mb-sm-0.align-content-center
                p.mb-0.text-white <b>Video.</b> Tipos y características de los indicadores
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=eN4UvzBrZ34" target="_blank")
                  span Enlace
                  i.fas.fa-file-download
    .row.justify-content-center
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/componentes/2.svg' alt='AvatarTop' style="width: 80px")
          .tarjeta.tarjeta--azul.align-content-center
            .row.justify-content-between.p-4
              .col.mb-3.mb-sm-0.align-content-center
                p.mb-0.text-white <b>Video.</b> Interpretación de indicadores de gestión (KPI)
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nCUYv5oPwJY" target="_blank")
                  span Enlace
                  i.fas.fa-file-download
    





</template>

<script>
export default {
  name: 'Tema5',
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
