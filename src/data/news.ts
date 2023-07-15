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
    alt: `eldiario.es`,
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
    alt: `eldiario.es`,
    url: `https://www.eldiario.es/madrid/somos/mad-cool-propone-mayoria-publico-acuda-coche-villaverde-lugar-transporte-colectivo_1_10287345.html`
  },
  {
    date: `2023/06/14`,
    name: `Macrofestivales: malos tiempos para la lírica`,
    alt: `eldiario.es`,
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
    alt: `eldiario.es`,
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
    alt: `eldiario.es`,
    url: `https://www.eldiario.es/madrid/somos/linea-3-metro-alargara-cierre-4-00-salida-transporte-publico-mad-cool_1_10314482.html`
  },
  {
    date: `2023/06/22`,
    name: `Más horas de Metro y escenarios con límite de ruido: el lavado de cara del Mad Cool ante las quejas de los vecinos`,
    alt: `el mundo`,
    url: `https://www. .es/madrid/2023/06/22/649337ad21efa09a178b4571.html`
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
    alt: `eldiario.es`,
    url: `https://www.eldiario.es/madrid/somos/ayuntamiento-getafe-mad-cool-villaverde-apoya-protestas-vecinales-anuncia-medira-ruido_1_10323090.html`
  },
  {
    date: `2023/06/26`,
    name: `Getafe y Villaverde se movilizan contra Mad Cool`,
    alt: `Madrid Diario`,
    url: `https://www.madridiario.es/getafe-villaverde-movilizan-contra-mad-cool`
  },
  {
    date: `2023/06/27`,
    name: `Cientos de vecinos de Villaverde y Getafe protestan contra Mad Cool, primer evento de un recinto que “es una invasión”`,
    alt: `eldiario.es`,
    url: `https://www.eldiario.es/madrid/somos/cientos-vecinos-villaverde-getafe-protestan-mad-cool-primer-evento-recinto-invasion_1_10330491.amp.html`
  },
  {
    date: `2023/06/27`,
    name: `Los vecinos de Getafe y Villaverde, contra la nueva ubicación del MAD COOL`,
    alt: `Madrid Directo`,
    url: `https://www.telemadrid.es/programas/madrid-directo/Los-vecinos-de-Getafe-y-Villaverde-contra-la-nueva-ubicacion-del-MAD-COOL-2-2573162705--20230627092614.html`
  },
  {
    date: `2023/06/28`,
    name: `Unas 2.000 personas marchan contra el espacio para macrofestivales Mad Cool`,
    alt: `20minutos`,
    url: `https://www.20minutos.es/noticia/5142131/0/unas-2-000-personas-marchan-contra-espacio-para-macrofestivales-mad-cool/`
  },
  {
    date: `2023/06/28`,
    name: `Debut del Mad Cool en Villaverde: contará con más Metro, seguridad y público`,
    alt: `la razon`,
    url: `https://www.larazon.es/madrid/debut-mad-cool-villaverde-contara-mas-metro-seguridad-publico_20230628649c752241ef3d0001b6be63.html?outputType=amp`
  },
  {
    date: `2023/06/28`,
    name: `Facua sobre Madcool`,
    alt: `lega radio`,
    url: `https://www.youtube.com/live/J1S8czD9Wdk?feature=share`
  },
  {
    date: `2023/06/29`,
    name: `Getafe alerta a Guardia Civil, Ayuntamiento de Madrid y Comunidad de los problemas de Mad Cool y el recinto de macrofestivales`,
    alt: `getafe.`,
    url: `https://getafe.es/getafe-alerta-a-guardia-civil-ayuntamiento-de-madrid-y-comunidad-de-los-problemas-de-mad-cool-y-el-recinto-de-macrofestivales/`
  },
  {
    date: `2023/06/29`,
    name: `GETAFE/ Nuevo intento para frenar el Mad Cool: cartas de alerta a todas las autoridades`,
    alt: `noticias para municipios`,
    url: `https://noticiasparamunicipios.com/municipios-madrid/getafe-nuevo-intento-para-frenar-el-mad-cool-cartas-a-todas-las-autoridades/`
  },
  {
    date: `2023/06/29`,
    name: `El Ayuntamiento diseña un plan de movilidad especial para el Mad Cool de Villaverde`,
    alt: `el mundo`,
    url: `https://www.elmundo.es/madrid/2023/06/29/649daaed21efa0b93d8b45b1.html`
  },
  {
    date: `2023/07/01`,
    name: `Los secretos de los festivales de música para sacarte (a ti, a artistas y a proveedores) hasta el último céntimo`,
    alt: `el periodico de españa`,
    url: `https://www.epe.es/es/reportajes/20230628/festivales-musica-negocio-89196537`
  },
  {
    date: `2023/07/04`,
    name: `Dormir a 300 metros de un macrofestival: así afectan a los barrios eventos masivos como el Mad Cool`,
    alt: `público`,
    url: `https://www.publico.es/sociedad/dormir-300-metros-macrofestival-afectan-barrios-eventos-masivos-mad-cool.html/amp`
  },
  {
    date: `2023/07/05`,
    name: `El recinto del Mad Cool se llamará Iberdrola Music y se alimentará a base de energía verde`,
    alt: `20minutos`,
    url: `https://www.20minutos.es/noticia/5144798/0/recinto-mad-cool-se-llamara-iberdrola-music-sera-un-espacio-energia-renovable/`
  },
  {
    date: `2023/07/06`,
    name: `Arranca el MadCool 2023 con el malestar de los vecinos de Villaverde y Getafe`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/programas/telenoticias-1/Arranca-el-MadCool-2023-con-el-malestar-de-los-vecinos-de-Villaverde-y-Getafe-2-2575862410--20230706032539.html`
  },
  {
    date: `2023/07/06`,
    name: `Así fue la peor edición del Mad Cool: ¿Podría repetirse?`,
    alt: `público`,
    url: `https://www.publico.es/uwu/cultura/asi-fue-la-peor-edicion-del-mad-cool-podria-repetirse/`
  },
  {
    date: `2023/07/06`,
    name: `Madrid aboga por hablar con Getafe para evitar "una batalla política" por el Mad Cool`,
    alt: `20minutos`,
    url: `https://www.20minutos.es/noticia/5145056/0/madrid-aboga-por-dialogar-con-getafe-frente-abrir-una-batalla-politica-por-mad-cool/`
  },
  {
    date: `2023/07/06`,
    name: `Quejas por "colas interminables" para acceder al Mad Cool`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/noticias/madrid/Quejas-por-colas-interminables-para-acceder-al-Mad-Cool-0-2575842468--20230706081421.html`
  },
  {
    date: `2023/07/06`,
    name: `Aparcamientos, ruido, suciedad y corte de calles: así afectará Mad Cool a Getafe durante todo el año`,
    alt: `getafe.es`,
    url: `https://getafe.es/aparcamientos-ruido-suciedad-y-corte-de-calles-asi-afectara-mad-cool-a-getafe-durante-todo-el-ano/`
  },
  {
    date: `2023/07/07`,
    name: `Mad Cool festival estrena recinto`,
    alt: `rtve`,
    url: `https://www.rtve.es/play/videos/telediario/mas-cien-bandas-actuaran-festival-mad-cool/6928683/`
  },
  {
    date: `2023/07/07`,
    name: `Comienza Mad Cool con la inquietud en Getafe Norte: “Nos preocupan los decibelios y la salida del recinto de madrugada”`,
    alt: `cadena ser`,
    url: `https://cadenaser.com/cmadrid/2023/07/06/comienza-mad-cool-con-la-inquietud-en-getafe-norte-nos-preocupan-los-decibelios-y-la-salida-del-recinto-a-las-3-de-la-manana-ser-madrid-sur/`
  },
  {
    date: `2023/07/07`,
    name: `Caos a la salida del Mad Cool: coches que no llegan y precios desorbitados para llegar a casa`,
    alt: `el pais`,
    url: `https://elpais.com/espana/madrid/2023-07-07/caos-a-la-salida-del-mad-cool-coches-que-no-llegan-y-precios-desorbitados-para-llegar-a-casa.html`
  },
  {
    date: `2023/07/07`,
    name: `Leyendas sobre la Colonia Marconi: un barrio 'yonki' donde actuarán los Red Hot Chilli Peppers`,
    alt: `el confidencial`,
    url: `https://www.elconfidencial.com/espana/madrid/2023-07-07/colonia-marconi-barrio-yonki-madrid-mad-cool_3691935/`
  },
  {
    date: `2023/07/07`,
    name: `El lado oscuro de los festivales de música`,
    alt: `cronica vasca`,
    url: `https://cronicavasca.elespanol.com/opinion/20230707/el-lado-oscuro-de-los-festivales-musica/776922356_0.amp.html`
  },
  {
    date: `2023/07/07`,
    name: `El Mad Cool la vuelve a liar: varias horas de cola, salidas cortadas y una única entrada al recinto`,
    alt: `la sexta`,
    url: `https://amp.lasexta.com/noticias/cultura/mad-cool-vuelve-liar-varias-horas-cola-salidas-cortadas-unica-entrada-recinto_2023070764a7d7421f11910001edbd84.html`
  },
  {
    date: `2023/07/07`,
    name: `Facua denuncia al Mad Cool por cobrar a los usuarios los gastos de gestión para recuperar el dinero no gastado`,
    alt: `20minutos`,
    url: `https://www.20minutos.es/noticia/5145532/0/facua-denuncia-mad-cool-por-cobrar-gestion-devolucion-dinero-no-gastado/`
  },
  {
    date: `2023/07/08`,
    name: `Ser vecino del Mad Cool: atascos durante el periodo de acceso al recinto y noches sin dormir`,
    alt: `el pais`,
    url: `https://elpais.com/espana/madrid/2023-07-08/ser-vecino-del-mad-cool-atascos-durante-el-periodo-de-acceso-al-recinto-y-noches-sin-dormir.html`
  },
  {
    date: `2023/07/08`,
    name: `Cómo llegar al Mad Cool 2023: dónde está el recinto, opciones para ir en transporte público y cortes de tráfico`,
    alt: `cadena ser`,
    url: `https://cadenaser.com/cmadrid/2023/07/06/como-llegar-al-mad-cool-2023-donde-esta-el-recinto-opciones-para-ir-en-transporte-publico-y-cortes-de-trafico-ser-madrid-sur/`
  },
  {
    date: `2023/07/08`,
    name: `Atascos y mucha paciencia para regresar a casa tras los conciertos de Mad Cool`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/programas/telenoticias-fin-de-semana/Atascos-y-mucha-paciencia-para-regresar-a-casa-tras-los-conciertos-de-Mad-Cool-2-2576462329--20230708023146.amp.html`
  },
  {
    date: `2023/07/09`,
    name: `Unos Red Hot Chili Peppers sin colmillo despiden un Mad Cool masificado`,
    alt: `el pais`,
    url: `https://elpais.com/cultura/2023-07-09/unos-red-hot-chili-peppers-sin-colmillo-despiden-un-mad-cool-masificado.html`
  },
  {
    date: `2023/07/09`,
    name: `Mad Cool: agorafobia para principiantes`,
    alt: `la razon`,
    url: `https://www.larazon.es/cultura/musica/mad-cool-agorafobia-principiantes_2023070964aa09fe1f11910001f57941.html`
  },
  {
    date: `2023/07/09`,
    name: `RNE Crónica Madrid - Madcool (minuto 18:14)`,
    alt: `rne`,
    url: `https://rtve-mediavod-lote3.rtve.es/resources/TE_SINFMA/mp3/7/3/1688905006037.mp3?idasset=6931369#t=00:11:49`
  },
  {
    date: `2023/07/09`,
    name: `Red Hot Chili Peppers supera al colapso claustrofóbico del Mad Cool 2023`,
    alt: `el independiente`,
    url: `https://www.elindependiente.com/tendencias/2023/07/09/red-hot-chili-peppers-supera-al-colapso-claustrofobico-del-mad-cool-2023/`
  },
  {
    date: `2023/07/10`,
    name: `Crónica: Mad Cool Festival 2023, lo mejor y lo peor del “Coachella español”`,
    alt: `mas decibelios`,
    url: `https://masdecibelios.es/mad-cool-2023-cronica/`
  },
  {
    date: `2023/07/10`,
    name: `GETAFE/ El Mad Cool superó «gravemente» los límites de ruido durante sus tres jornadas`,
    alt: `noticias para municipios`,
    url: `https://noticiasparamunicipios.com/municipios-madrid/getafe-el-mad-cool-supero-gravemente-los-limites-de-ruido-durante-sus-tres-jornadas/`
  },
  {
    date: `2023/07/10`,
    name: `Un detenido, 63 denuncias por venta ilegal y 43 mediciones de ruido en el Mad Cool`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/noticias/madrid/Un-detenido-63-denuncias-por-venta-ilegal-y-43-mediciones-de-ruido-en-el-Mad-Cool-0-2577042309--20230710015718.amp.html`
  },
  {
    date: `2023/07/10`,
    name: `El Ayuntamiento de Getafe denuncia que el festival Mad Cool superó los límites de ruido todos los días`,
    alt: `cadena ser`,
    url: `https://cadenaser.com/cmadrid/2023/07/10/el-ayuntamiento-de-getafe-denuncia-que-el-festival-mad-cool-supero-los-limites-de-ruido-todos-los-dias-ser-madrid-sur/`
  },
  {
    date: `2023/07/10`,
    name: `GETAFE/ El acceso peatonal de Getafe Norte al macro-recinto de festivales será eliminado`,
    alt: `noticias para municipios`,
    url: `https://noticiasparamunicipios.com/municipios-madrid/getafe-el-acceso-peatonal-de-getafe-norte-al-macro-recinto-de-festivales-sera-eliminado-ultima-hora/`
  },
  {
    date: `2023/07/13`,
    name: `GETAFE/ El acceso peatonal de Getafe Norte al macro-recinto de festivales será eliminado`,
    alt: `eldiario.es`,
    url: `https://www.eldiario.es/madrid/somos/getafe-corta-paso-municipio-recinto-conciertos-madrid-no-habra-paso-peatonal-limitara-vtc_1_10375154.html`
  },
  {
    date: `2023/07/13`,
    name: `Plan Especial de Movilidad en Villaverde por el concierto de Harry Styles`,
    alt: `gacetín madrid`,
    url: `https://gacetinmadrid.com/2023/07/13/plan-especial-de-movilidad-en-villaverde-por-el-concierto-de-harry-styles/`
  },
  {
    date: `2023/07/13`,
    name: `El Defensor del Pueblo exige a los ayuntamientos que controlen el ruido de los festivales y de las fiestas patronales`,
    alt: `público`,
    url: `https://www.publico.es/sociedad/defensor-del-pueblo-exige-ayuntamientos-controlen-ruido-festivales-y-fiestas-patronales.html`
  },
  {
    date: `2023/07/14`,
    name: `Almeida reconoce que las fiestas de Villaverde se han trasladado al lugar “menos malo”`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/noticias/madrid/Almeida-reconoce-que-las-fiestas-de-Villaverde-se-han-trasladado-al-lugar-menos-malo-0-2578242184--20230714013144.amp.html`
  },
  {
    date: `2023/07/14`,
    name: `Una cola kilométrica para ver a Harry Styles en Villaverde: “Creo que ya hemos salido hasta de Madrid”`,
    alt: `eldiario.es`,
    url: `https://www.eldiario.es/madrid/somos/blogs/cocidito/colas-kilometro-ver-harry-styles-villaverde-creo-hemos-salido-madrid_132_10378614.html`
  },
  {
    date: `2023/07/14`,
    name: `Comienzan a entrar los asistentes al concierto de Harry Styles`,
    alt: `telemadrid`,
    url: `https://www.telemadrid.es/programas/telenoticias-1/Comienzan-a-entrar-los-asistentes-al-concierto-de-Harry-Styles-2-2578262178--20230714033642.amp.html`
  },
  {
    date: `2023/07/14`,
    name: `La odisea de los 'stylers': colas kilométricas, desfallecimientos y "pésima organización" para disfrutar del concierto de sus vidas`,
    alt: `el mundo`,
    url: `https://amp.elmundo.es/madrid/2023/07/14/64b19fbae9cf4a54238b45c9.html`
  },
  {
    date: `2023/07/14`,
    name: `Miles de fans hacen cola para entrar al concierto de Harry Styles en Madrid`,
    alt: `el periodico`,
    url: `https://www.elperiodico.com/es/videos/ocio-y-cultura/miles-fans-cola-concierto-harry-styles-madrid/89888556.shtml`
  }
]

export default news
