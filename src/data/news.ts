const news = [
  {
    date: `2022/07/05`,
    name: `Villacís anuncia una ciudad de la música en torno al festival Mad Cool que se instalará en Villaverde`,
    alt: `ayuntamiento de madrid`,
    url: `https://www.madrid.es/portales/munimadrid/es/Inicio/Actualidad/Noticias/Villacis-anuncia-una-ciudad-de-la-musica-en-torno-al-festival-Mad-Cool-que-se-instalara-en-Villaverde/`
  },
  {
    date: `2023/02/03`,
    name: `Dueños de Mad Cool compran suelo en Villaverde`,
    alt: `servimedia`,
    url: `https://www.servimedia.es/noticias/duenos-mad-cool-compran-suelo-villaverde-madrid-para-construir-gran-ciudad-musica/3634230/`
  },
  {
    date: `2023/03/05`,
    name: `Mad Cool planea soterrar hasta 5 metros sus escenarios para aplacar la bomba de ruido en Marconi y Getafe`,
    alt: `abc`,
    url: `https://www.abc.es/espana/madrid/mad-cool-planea-soterrar-metros-escenarios-aplacar-20230306205306-nt.html`
  },
  {
    date: `2023/03/06`,
    name: `GETAFE/ Temor entre los vecinos: 'Mad Cool' tendrá recinto estable a 300 metros de Getafe Norte`,
    alt: `noticias para municipios`,
    url: `https://noticiasparamunicipios.com/municipios-madrid/getafe-temor-entre-los-vecinos-mad-cool-tendra-recinto-estable-a-300-metros-de-getafe-norte/`
  },
  {
    date: `2023/03/10`,
    name: `30000 vecinos de Getafe sufrirán el ruido y las molestias del festival Mad Cool`,
    alt: `cadena ser`,
    url: `https://cadenaser.com/cmadrid/2023/03/10/30000-vecinos-de-getafe-sufririan-el-ruido-y-las-molestias-del-festival-de-musica-mad-cool-ser-madrid-sur/`
  },
  {
    date: `2023/05/11`,
    name: `La Asociación de Vecinos de Getafe Norte contra el MadCool`,
    alt: `ondacero`,
    url: `https://www.ondaceromadridsur.es/todos-podcasts/12327/`
  },
  {
    date: `2023/05/12`,
    name: `Vecinos contra Mad Cool, otra batalla por el derecho a la ciudad frente al negocio de los festivales`,
    alt: `el salto`,
    url: `https://www.elsaltodiario.com/musica/vecinos-mad-cool-otra-batalla-derecho-ciudad-frente-al-negocio-festivales/`
  },
  {
    date: `2023/05/12`,
    name: `El Defensor del Pueblo admite a trámite la reclamación sobre un espacio para macrofestivales`,
    alt: `el periódico getafe`,
    url: `https://periodicogetafe.blogspot.com/2023/05/el-defensor-del-pueblo-admite-tramite.html`
  },
  {
    date: `2023/05/20`,
    name: `Vecinos de Getafe Norte comienzan a colgar avisos en las ventanas que dicen "No al Mad Cool" `,
    alt: `madridActual`,
    url: `https://www.madridactual.es/7893385-getafe-vecinos-de-getafe-norte-empiezan-a-colgar-carteles-en-las-ventanas-de-no-al-mad-cool/`
  },
  {
    date: `2023/05/22`,
    name: `Vecinos de Getafe Norte empiezan a colgar carteles en las ventanas de 'No al Mad Cool'`,
    alt: `cadena ser`,
    url: `https://cadenaser.com/cmadrid/2023/05/22/vecinos-de-getafe-norte-empiezan-a-colgar-carteles-en-las-ventanas-de-no-al-mad-cool-ser-madrid-sur/`
  },
  {
    date: `2023/05/23`,
    name: `Su gran evento cultural internacional destruye mi ciudad`,
    alt: `el salto`,
    url: `https://www.elsaltodiario.com/culturas/gran-evento-cultural-internacional-destruye-ciudad/`
  },
  {
    date: `2023/05/30`,
    name: `Los vecinos del Fòrum de Barcelona estallan de nuevo contra el Primavera Sound`,
    alt: `metropoli abierta`,
    url: `https://metropoliabierta.elespanol.com/el-pulso-de-la-ciudad/vecinos-forum-barcelona-estallan-contra-primavera-sound_73714_102.html`
  },
  {
    date: `2023/06/04`,
    name: `Vecinos de Getafe Norte, contra el ruido de los festivales`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/programas/telenoticias-fin-de-semana/Vecinos-de-Getafe-Norte-contra-el-ruido-de-los-festivales-2-2566263355--20230604024235.html`
  },
  {
    date: `2023/06/07`,
    name: `GETAFE/ Ecologistas en Acción presenta alegaciones al 'Mad Cool' por la proximidad a viviendas`,
    alt: `noticias para municipios`,
    url: `https://noticiasparamunicipios.com/municipios-madrid/getafe-ecologistas-en-accion-presenta-alegaciones-al-mad-cool-por-la-proximidad-a-viviendas/`
  },
  {
    date: `2023/06/08`,
    name: `Vecino de Getafe Norte, critica por irreal el estudio acústico del festival Mad Cool 2023`,
    alt: `cadena ser`,
    url: `https://cadenaser.com/audio/1686221284205/`
  },
  {
    date: `2023/06/09`,
    name: `Los habitantes de Getafe están recolectando firmas para detener los macrofestivales que se realizan a 300 metros de sus hogares`,
    alt: `madridActual`,
    url: `https://www.madridactual.es/7897116-getafe-vecinos-recogen-firmas-para-parar-los-macrofestivales-a-300-metros-de-sus-viviendas/`
  },
  {
    date: `2023/06/12`,
    name: `Mad Cool presenta su nuevo recinto en Villaverde: en medio de un trigal, lejos del transporte público y con quejas vecinales `,
    alt: `elDiario`,
    url: `https://www.eldiario.es/madrid/somos/mad-cool-presenta-nuevo-recinto-villaverde-medio-trigal-lejos-transporte-publico-quejas-vecinales_1_10270222.html`
  },
  {
    date: `2023/06/12`,
    name: `MADRID/ Así es el polémico recinto de festivales donde se celebrará este año Mad Cool`,
    alt: `noticias para municipios`,
    url: `https://noticiasparamunicipios.com/noticias-madrid/madrid-asi-es-el-polemico-recinto-de-festivales-donde-se-celebrara-este-ano-mad-cool/`
  },
  {
    date: `2023/06/13`,
    name: `Vecinos de Villaverde y Getafe, en contra del Mad Cool`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/noticias/madrid/Vecinos-de-Villaverde-y-Getafe-en-contra-del-Mad-Cool-0-2568943156--20230613073331.html`
  },
  {
    date: `2023/06/13`,
    name: `MADRID/ Colonia Marconi se rebela contra el intento de hacer del barrio «un parking para Mad Cool»`,
    alt: `noticias para municipios`,
    url: `https://noticiasparamunicipios.com/noticias-madrid/madrid-colonia-marconi-se-rebela-contra-el-intento-de-hacer-del-barrio-un-parking-para-mad-cool/`
  },
  {
    date: `2023/06/14`,
    name: `Why do the neighbors complain about Mad Cool’s celebration? it is a controversial fence`,
    alt: `D1SoftBallNews`,
    url: `https://d1softballnews.com/why-do-the-neighbors-complain-about-mad-cools-celebration-its-a-controversial-fence/`
  }
]

export default news
