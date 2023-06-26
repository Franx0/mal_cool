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
    date: `2023/03/08`,
    name: `Los vecinos de Getafe se movilizan contra el traslado del 'Mad Cool' a Villaverde`,
    alt: `la vanguardia`,
    url: `https://www.lavanguardia.com/local/madrid/20230308/8809108/vecinos-getafe-movilizan-traslado-mad-cool-villaverde.html`
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
    date: `2023/03/14`,
    name: `Por qué nadie quiere el Mad Cool: del "problemón" con el Zendal a casas cerca de "drogas y borracheras"`,
    alt: `el español`,
    url: `https://www.elespanol.com/madrid/sociedad/20230314/quiere-mad-cool-problemon-zendal-drogas-borracheras/747425624_0.html`
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
    alt: `ElDiario.es`,
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
  },
  {
    date: `2023/06/14`,
    name: `Mad Cool propone que la mayoría de su público acuda en coche a Villaverde en lugar de usar transporte colectivo `,
    alt: `ElDiario.es`,
    url: `https://www.eldiario.es/madrid/somos/mad-cool-propone-mayoria-publico-acuda-coche-villaverde-lugar-transporte-colectivo_1_10287345.html`
  },
  {
    date: `2023/06/14`,
    name: `Macrofestivales: malos tiempos para la lírica`,
    alt: `ElDiario.es`,
    url: `https://www.eldiario.es/carnecruda/programas/macrofestivales-malos-tiempos-lirica_132_10294684.html`
  },
  {
    date: `2023/06/19`,
    name: `Macro Mad Cool`,
    alt: `san cristobal de los angeles barrio sur`,
    url: `https://sancristobaldelosangelesbarriosur.blogspot.com/2023/06/segun-un-estudio-de-ipg-mediabrands-los.html`
  },
  {
    date: `2023/06/19`,
    name: `Afectados por Mad Cool marcharán el 27 de junio contra el nuevo recinto para macrofestivales`,
    alt: `el periódico getafe`,
    url: `https://periodicogetafe.blogspot.com/2023/06/afectados-por-mad-cool-marcharan-el-27.html`
  },
  {
    date: `2023/06/19`,
    name: `Convocadas dos marchas desde Getafe y Villaverde contra la celebración del Mad Cool`,
    alt: `la calle`,
    url: `https://alcabodelacalle.es/convocadas-dos-marchas-desde-getafe-y-villaverde-contra-la-celebracion-del-mad-cool`
  },
  {
    date: `2023/06/19`,
    name: `Afectados por MadCool en Getafe marcharán el 27 de junio`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/noticias/madrid/Afectados-por-MadCool-en-Getafe-marcharan-el-27-de-junio-0-2570742916--20230619074542.html`
  },
  {
    date: `2023/06/20`,
    name: `Mahou San Miguel adquiere el 51% de la empresa que gestiona el nuevo recinto del Mad Cool`,
    alt: `ElDiario.es`,
    url: `https://www.eldiario.es/cultura/musica/mahou-san-miguel-adquiere-51-empresa-organiza-festival-mad-cool_1_10309875.html`
  },
  {
    date: `2023/06/21`,
    name: `FACUA Madrid exige un nuevo plan de ruidos y revisar las autorizaciones del Mad Cool`,
    alt: `facua`,
    url: `http://facua.org/es/noticia.php?Id=19711`
  },
  {
    date: `2023/06/21`,
    name: `La línea 3 de Metro alargará su cierre hasta las 4.00 para la salida en transporte público del Mad Cool`,
    alt: `ElDiario.es`,
    url: `https://www.eldiario.es/madrid/somos/linea-3-metro-alargara-cierre-4-00-salida-transporte-publico-mad-cool_1_10314482.html`
  },
  {
    date: `2023/06/22`,
    name: `Más horas de Metro y escenarios con límite de ruido: el lavado de cara del Mad Cool ante las quejas de los vecinos`,
    alt: `el mundo`,
    url: `https://www.elmundo.es/madrid/2023/06/22/649337ad21efa09a178b4571.html`
  },
  {
    date: `2023/06/22`,
    name: `Lo que se sabe (y lo que no) del Mad Cool a sólo dos semanas de su inicio: preguntas, respuestas e incertidumbres`,
    alt: `abc`,
    url: `https://www.abc.es/cultura/musica/sabe-mad-cool-solo-dos-semanas-inicio-20230622043016-nt_amp.html`
  },
  {
    date: `2023/06/23`,
    name: `El Ayuntamiento de Getafe apoya la concentración contra Mad Cool`,
    alt: `madrid es noticia`,
    url: `https://www.madridesnoticia.es/2023/06/concentracion-contra-mad-cool/`
  },
  {
    date: `2023/06/23`,
    name: `GETAFE/ El Ayuntamiento medirá el ruido en viviendas durante el ‘Mad Cool’`,
    alt: `noticias para municipios`,
    url: `https://noticiasparamunicipios.com/municipios-madrid/getafe-el-ayuntamiento-medira-el-ruido-en-viviendas-durante-el-mad-cool-ultima-hora`
  },
  {
    date: `2023/06/23`,
    name: `El Ayuntamiento de Getafe apoya la concentración contra Mad Cool y otros macroconciertos`,
    alt: `getafe.`,
    url: `https://getafe.es/el-ayuntamiento-de-getafe-apoya-la-concentracion-contra-mad-cool-y-otros-macroconciertos/`
  },
  {
    date: `2023/06/23`,
    name: `Getafe y Villaverde se movilizan contra el Madcool`,
    alt: `aavv madrid`,
    url: `https://aavvmadrid.org/convivencia-y-seguridad/getafe-y-villaverde-se-movilizan-contra-el-madcool/`
  },
  {
    date: `2023/06/23`,
    name: `Marcha vecinal contra el nuevo recinto para macrofestivales`,
    alt: `periodico distrito de villaverde`,
    url: `https://distritovillaverde.com/marcha-vecinal-contra-el-nuevo-recinto-para-macrofestivales/`
  },
  {
    date: `2023/06/24`,
    name: `El Ayuntamiento de Getafe, contra el Mad Cool en Villaverde: apoya las protestas vecinales y anuncia que medirá el ruido`,
    alt: `ElDiario.es`,
    url: `https://www.eldiario.es/madrid/somos/ayuntamiento-getafe-mad-cool-villaverde-apoya-protestas-vecinales-anuncia-medira-ruido_1_10323090.html`
  }
]

export default news
