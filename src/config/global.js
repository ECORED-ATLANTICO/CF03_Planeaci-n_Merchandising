export default {
  global: {
    Name: 'Diseño de un plan de <em>merchandising</em>',
    Description:
      'Este componente enseña a diseñar un plan de <em>merchandising</em>, explicando su importancia, estructura, y pasos clave. Incluye la organización de hitos, selección del talento humano, elaboración de cronogramas, definición de indicadores y presupuesto. Su objetivo es ayudar a aplicar estrategias comerciales efectivas en el punto de venta, mejorando la experiencia del cliente y los resultados del negocio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan de <em>merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estructura',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Hitos y entregables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Pautas de estructuración',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Perfilación de cargos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Responsabilidades',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Cronograma',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos e Importancia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Pasos de elaboración',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Importancia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Método de definición',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos de indicadores',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas de definición',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Ejemplo general',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Objetivo general',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Hitos y entregables',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Talento humano involucrado',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF03_63110189_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de <em>merchandising</em>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). Plan de Medios y Presupuesto [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CwLntmfbchs',
    },
    {
      tema: 'Cronograma',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Cronograma y Diagramas de Gantt [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WkDndhBadWw',
    },
    {
      tema: 'Indicadores',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 24). Tipos y características de los indicadores [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eN4UvzBrZ34',
    },
    {
      tema: 'Indicadores ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Interpretación de indicadores de gestión (KPI) [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nCUYv5oPwJY',
    },
  ],
  glosario: [
    {
      termino: 'Alcance',
      significado: 'extensión o cobertura de un proyecto.',
    },
    {
      termino: 'Cargos',
      significado: 'funciones laborales asignadas a los miembros del equipo.',
    },
    {
      termino: 'Cronograma',
      significado:
        'herramienta para planificar el tiempo de ejecución de actividades.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Diagnóstico análisis previo que permite tomar decisiones fundamentadas.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'capacidad para lograr objetivos con el menor uso de recursos.',
    },
    {
      termino: 'Entregables',
      significado:
        'resultados o productos que deben presentarse en un proyecto.',
    },
    {
      termino: 'Evaluación',
      significado: 'valoración del cumplimiento de metas o desempeño.',
    },
    {
      termino: 'Gestión',
      significado: 'coordinación eficaz de recursos y tareas.',
    },
    {
      termino: 'Hitos',
      significado: 'momentos clave dentro del cronograma de un proyecto.',
    },
    {
      termino: 'Indicadores',
      significado:
        'medidas que permiten verificar el avance o logro de objetivos.',
    },
    {
      termino: 'Medición',
      significado: 'proceso de cuantificar resultados o avances.',
    },
    {
      termino: 'Metas',
      significado: 'objetivos específicos y medibles que se desean alcanzar.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'estrategias para atraer y mantener clientes en el punto de venta.',
    },
    {
      termino: 'Organización',
      significado:
        'coordinación de elementos y recursos para lograr propósitos.',
    },
    {
      termino: 'Planeación',
      significado: 'proceso de establecer objetivos y definir acciones.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'estimación anticipada de costos para desarrollar un plan o proyecto.',
    },
    {
      termino: 'Responsabilidades',
      significado: 'obligaciones o funciones que debe cumplir una persona.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aaker, D. A., Kumar, V., & Day, G. S. (2013). <em>Marketing Research</em> (10th ed.). Wiley.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2019). Administración de recursos humanos (10.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Kerzner, H. (2017). <em>Project management: A systems approach to planning, scheduling, and controlling</em> (12th ed.). Wiley.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2021). Dirección de marketing (16.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Levy, M., & Weitz, B. A. (2012). <em>Retailing management</em> (8th ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Meredith, J. R., & Mantel, S. J. (2017). <em>Project management:</em> A managerial approach (9.ª ed.). Wiley.',
      link: '',
    },
    {
      referencia:
        'PMI - <em>Project Management Institute.</em> (2021). Guía de los fundamentos para la dirección de proyectos (Guía del PMBOK®) (7.ª ed.). <em>Project Management Institute.</em> ',
      link: '',
    },
    {
      referencia:
        'Schwalbe, K. (2015). Gestión de proyectos (7.ª ed.). <em>Cengage Learning.</em>',
      link: '',
    },
    {
      referencia:
        'SENA. (2020). Guía para la gestión del talento humano en entornos comerciales. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2006). Introducción a la teoría general de la administración (7.ª ed.). McGraw-Hill. ',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15525/mod_resource/content/0/Chiavenato%20Idalverto.%20Introducci%C3%B3n%20a%20la%20teor%C3%ADa%20general%20de%20la%20Administraci%C3%B3n.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos  ',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: '	Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
