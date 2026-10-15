/* TSC Notary — additive English/Spanish toggle.
   Translates visible text, placeholders, aria-labels, alt text, titles,
   the document title and meta description. Originals are remembered per
   node, so switching back restores exact English. Form field NAMES and
   option VALUES are untouched, so Netlify submissions arrive exactly as
   they do today. */
(function () {
  'use strict';

  var EN_TO_ES = {
    // Document
    'TSC Notary | Mobile Notary & Loan Signing': 'TSC Notary | Notario móvil y firma de préstamos',
    'Request Received | TSC Notary': 'Solicitud recibida | TSC Notary',
    'Professional mobile notary and loan signing services throughout Central Florida.': 'Servicios profesionales de notario móvil y firma de préstamos en toda la Florida Central.',

    // Header
    'TSC Notary home': 'Inicio de TSC Notary',
    'TSC Notary, Executing with Excellence': 'TSC Notary, Ejecutando con excelencia',
    'Open menu': 'Abrir menú',
    'Home': 'Inicio',
    'Services': 'Servicios',
    'About Us': 'Nosotros',
    'Service Area': 'Área de servicio',
    'Request a Notary': 'Solicitar un notario',
    'Contact': 'Contacto',

    // Hero
    'EXECUTING WITH EXCELLENCE': 'EJECUTANDO CON EXCELENCIA',
    'Professional.': 'Profesional.',
    'Reliable.': 'Confiable.',
    'Mobile.': 'Móvil.',
    'Professional mobile notary and loan signing services delivered with accuracy, confidentiality, and care throughout Central Florida.': 'Servicios profesionales de notario móvil y firma de préstamos, brindados con precisión, confidencialidad y atención en toda la Florida Central.',
    'View Services': 'Ver servicios',
    'Professional notary signing appointment': 'Cita profesional de firma notarial',

    // Services
    'OUR SERVICES': 'NUESTROS SERVICIOS',
    'Professional signing support for': 'Apoyo profesional para la firma de',
    'every important document.': 'cada documento importante.',
    'Purchase closing signing': 'Firma de cierre de compra',
    'Purchase Closings': 'Cierres de compra',
    'Buyer cash and financed transactions handled with precision and professionalism.': 'Transacciones de compra al contado y financiadas, manejadas con precisión y profesionalismo.',
    'Seller closing signing': 'Firma de cierre de venta',
    'Seller Closings': 'Cierres de venta',
    'Professional execution of seller packages at a convenient signing location.': 'Ejecución profesional de paquetes de venta en un lugar de firma conveniente.',
    'Refinance signing': 'Firma de refinanciamiento',
    'Refinance Signings': 'Firmas de refinanciamiento',
    'Refinance, HELOC, reverse mortgage, and loan modification appointments.': 'Citas de refinanciamiento, HELOC, hipoteca inversa y modificación de préstamos.',
    'General notary appointment': 'Cita de notario general',
    'General Notary': 'Notario general',
    'Acknowledgments, jurats, oaths, affidavits, powers of attorney, and more.': 'Reconocimientos, juramentos, declaraciones juradas, poderes notariales y más.',
    'Learn More': 'Más información',
    'We also provide commercial, construction, builder loan, estate-planning document notarization, and title-company coverage. We do not prepare legal documents or provide legal advice.': 'También ofrecemos notarización de documentos comerciales, de construcción, préstamos para constructores, documentos de planificación patrimonial y cobertura para compañías de título. No preparamos documentos legales ni brindamos asesoría legal.',

    // About
    'ABOUT TSC NOTARY': 'SOBRE TSC NOTARY',
    'Edwin &': 'Edwin y',
    'A husband-and-wife team committed to excellence.': 'Un equipo de esposos comprometido con la excelencia.',
    'TSC Notary, LLC brings more than 25 years of industry experience to real estate closings and mobile notary appointments throughout Central Florida.': 'TSC Notary, LLC aporta más de 25 años de experiencia en la industria a cierres de bienes raíces y citas de notario móvil en toda la Florida Central.',
    'Every signing is handled with integrity, accuracy, confidentiality, and respect for the clients and business partners we serve.': 'Cada firma se maneja con integridad, precisión, confidencialidad y respeto por los clientes y socios comerciales a quienes servimos.',

    // Service area
    'SERVICE AREA': 'ÁREA DE SERVICIO',
    'Serving Central Florida.': 'Sirviendo a la Florida Central.',
    'We come to you.': 'Vamos hasta usted.',
    '— Client review': '— Reseña de cliente',
    'Serving Central Florida • English & Spanish': 'Sirviendo a la Florida Central • Inglés y español',
    'Based in Groveland, TSC Notary provides professional mobile service throughout Central Florida and travels directly to clients.': 'Con sede en Groveland, TSC Notary brinda servicio móvil profesional en toda la Florida Central y viaja directamente hasta los clientes.',
    '◉ We come to you.': '◉ Vamos hasta usted.',
    'Homes, offices, title companies, hospitals, assisted-living communities, and other convenient locations.': 'Hogares, oficinas, compañías de título, hospitales, comunidades de vida asistida y otros lugares convenientes.',
    'Homes, offices, title companies, hospitals, assisted-living communities, and other convenient locations. Evening and weekend appointments available — after-hours fees are discussed when you book.': 'Hogares, oficinas, compañías de título, hospitales, comunidades de vida asistida y otros lugares convenientes. Hay citas disponibles por la noche y los fines de semana — los cargos por horario extendido se acuerdan al reservar.',
    'Central Florida service map covering Lake, Orange, Osceola, Polk, and Sumter counties': 'Mapa de servicio de la Florida Central que cubre los condados de Lake, Orange, Osceola, Polk y Sumter',
    'Based in Groveland': 'Con sede en Groveland',

    // Credentials
    'PROFESSIONAL CREDENTIALS': 'CREDENCIALES PROFESIONALES',
    'NNA Certified': 'Certificado por la NNA',
    'National Notary': 'Asociación Nacional',
    'Association': 'de Notarios',
    'Bonded and E&O Insured': 'Afianzado y asegurado contra errores y omisiones',
    'Bonded & E&O Insured': 'Afianzado y asegurado E&O',
    'Your protection.': 'Su protección.',
    'Our priority.': 'Nuestra prioridad.',

    // Trusted by
    'TRUSTED BY': 'RESPALDADO POR',
    'Florida Title and Abstract, Concierge Title, Straughn and Turner, Florida Realty Marketplace, Waypoint Realty, and more': 'Florida Title and Abstract, Concierge Title, Straughn and Turner, Florida Realty Marketplace, Waypoint Realty, y más',

    // Request section
    'REQUEST A NOTARY': 'SOLICITAR UN NOTARIO',
    'Tell us about the signing.': 'Cuéntenos sobre la firma.',
    'Submit the details below. We will contact you to verify availability and confirm the appointment.': 'Envíe los detalles a continuación. Nos comunicaremos con usted para verificar la disponibilidad y confirmar la cita.',
    'Please note:': 'Tenga en cuenta:',
    'Submitting this request does not confirm an appointment.': 'El envío de esta solicitud no confirma una cita.',

    // Form steps + headings
    '1 Contact': '1 Contacto',
    '2 Signing': '2 Firma',
    '3 Signers': '3 Firmantes',
    '4 Submit': '4 Enviar',
    'Contact Information': 'Información de contacto',
    'Signing Information': 'Información de la firma',
    'Signer Information': 'Información de los firmantes',
    'Additional Information': 'Información adicional',

    // Contact fields
    'Contact name': 'Nombre de contacto',
    'REQUIRED': 'OBLIGATORIO',
    'Company name': 'Nombre de la empresa',
    'Phone number': 'Número de teléfono',
    'Email address': 'Correo electrónico',
    'Preferred contact method': 'Método de contacto preferido',
    'Select one': 'Seleccione una opción',
    'Phone call': 'Llamada telefónica',
    'Text message': 'Mensaje de texto',
    'Email': 'Correo electrónico',

    // Signing fields
    'Service requested': 'Servicio solicitado',
    'General Notarization': 'Notarización general',
    'Purchase Closing': 'Cierre de compra',
    'Seller Package': 'Paquete de venta',
    'Refinance': 'Refinanciamiento',
    'Reverse Mortgage': 'Hipoteca inversa',
    'Loan Application': 'Solicitud de préstamo',
    'Estate Planning Documents': 'Documentos de planificación patrimonial',
    'I-9 Employment Verification': 'Verificación de empleo I-9',
    'Other': 'Otro',
    'File number': 'Número de expediente',
    'Enter N/A if not applicable': 'Escriba N/A si no aplica',
    'Title companies: enter the file number. General notary clients: enter N/A.': 'Compañías de título: ingrese el número de expediente. Clientes de notario general: escriba N/A.',
    'Signing location address': 'Dirección del lugar de firma',
    'Property address': 'Dirección de la propiedad',
    'Preferred language': 'Idioma preferido',
    'English': 'Inglés',
    'Spanish': 'Español',
    'Requested date': 'Fecha solicitada',
    'Requested time': 'Hora solicitada',
    'Select a time': 'Seleccione una hora',

    // Signer fields
    'Primary signer name': 'Nombre del firmante principal',
    'Primary signer phone': 'Teléfono del firmante principal',
    'Primary signer email': 'Correo electrónico del firmante principal',
    'Add a co-signer': 'Agregar un cofirmante',
    'Co-signer name': 'Nombre del cofirmante',
    'Co-signer phone': 'Teléfono del cofirmante',
    'Co-signer email': 'Correo electrónico del cofirmante',

    // Additional fields
    'Document delivery method': 'Método de entrega de documentos',
    'Documents already printed': 'Documentos ya impresos',
    'Email documents': 'Enviar documentos por correo electrónico',
    'Secure link': 'Enlace seguro',
    'Signer will have documents': 'El firmante tendrá los documentos',
    'Unknown': 'Desconocido',
    'Documents require printing?': '¿Los documentos requieren impresión?',
    'Yes — Letter': 'Sí — Carta',
    'Yes — Legal': 'Sí — Oficio',
    'Yes — Mixed sizes': 'Sí — Tamaños mixtos',
    'No': 'No',
    'How did you hear about us?': '¿Cómo se enteró de nosotros?',
    'Google Search': 'Búsqueda en Google',
    'Realtor': 'Agente de bienes raíces',
    'Title Company': 'Compañía de título',
    'Attorney': 'Abogado',
    'Referral': 'Recomendación',
    'Returning Client': 'Cliente recurrente',
    'Notes or special instructions': 'Notas o instrucciones especiales',
    'I understand this is a request and that the appointment is not confirmed until TSC Notary contacts me.': 'Entiendo que esto es una solicitud y que la cita no está confirmada hasta que TSC Notary se comunique conmigo.',

    // Footer
    'Mobile service only': 'Solo servicio móvil',
    'By appointment': 'Con cita previa',
    'Evening and weekend appointments available — after-hours fees are discussed when you book.': 'Citas disponibles por la noche y los fines de semana — los cargos por horario extendido se acuerdan al reservar.',
    'English & Spanish': 'Inglés y español',
    'Bonded & E&O insured': 'Afianzado y asegurado E&O',
    '© 2026 TSC Notary, LLC. All rights reserved.': '© 2026 TSC Notary, LLC. Todos los derechos reservados.',

    // Thank-you page
    'Thank you.': 'Gracias.',
    'Your request has been received. TSC Notary will contact you as soon as possible.': 'Su solicitud ha sido recibida. TSC Notary se comunicará con usted lo antes posible.',
    'Return to website': 'Volver al sitio web',

    // Redesign concept additions
    'The notary that': 'El notario que',
    'comes to you.': 'va hasta usted.',
    'We\u2019re Edwin & Sylvia Rivera — a husband-and-wife notary team serving Central Florida. Closings done right, at your home, office, or title company.': 'Somos Edwin y Sylvia Rivera — un matrimonio de notarios al servicio de la Florida Central. Cierres bien hechos, en su hogar, oficina o compañía de título.',
    'Call 321-758-5778': 'Llamar al 321-758-5778',
    'Years of experience': 'Años de experiencia',
    'Counties served': 'Condados atendidos',
    'Mobile service': 'Servicio móvil',
    'HOW IT WORKS': 'CÓMO FUNCIONA',
    'Signing made simple.': 'Firmar es fácil.',
    'Request your signing': 'Solicite su firma',
    'Tell us about your signing in the form below — it takes a minute.': 'Cuéntenos sobre su firma en el formulario — solo toma un minuto.',
    'We confirm the details': 'Confirmamos los detalles',
    'We contact you to verify availability and confirm your appointment.': 'Nos comunicamos con usted para verificar la disponibilidad y confirmar su cita.',
    'We come to you': 'Vamos hasta usted',
    'We travel to your home, office, or title company — at a time that works for you.': 'Viajamos hasta su hogar, oficina o compañía de título — a la hora que le convenga.',
    'WHAT CLIENTS SAY': 'LO QUE DICEN LOS CLIENTES',
    'Trusted across Central Florida.': 'Con la confianza de la Florida Central.',
    'from 7 Google reviews': 'según 7 reseñas de Google',
    'Read our Google reviews': 'Leer nuestras reseñas en Google',
    'Leave us a review': 'Déjenos una reseña',
    'via Google': 'vía Google',
    'Your Google reviews will shine here — real words from real clients.': 'Aquí brillarán sus reseñas de Google — palabras reales de clientes reales.',
    'Client review': 'Reseña de cliente',
    'Ready when you are.': 'Listos cuando usted lo esté.',
    "Request your signing in under a minute — we'll handle the rest.": 'Solicite su firma en menos de un minuto — nosotros nos encargamos del resto.',
    'Prefer to talk?': '¿Prefiere hablar?',
    'Title companies, law firms, and signing agencies: include your file number and appointment details — everything we need to invoice and schedule. General notary clients are welcome too; just enter N/A where it doesn\'t apply.': 'Compañías de título, bufetes de abogados y agencias de firma: incluya su número de expediente y los detalles de la cita — todo lo que necesitamos para facturar y programar. Para trámites generales de notaría, también son bienvenidos; solo escriba N/A donde no aplique.',
    'Send us your signing order.': 'Envíenos su orden de firma.',
    'Follow us': 'Síganos',
    'Call now': 'Llamar ahora',
    'Request': 'Solicitar',
  };

  var STORAGE_KEY = 'tsc-lang';
  var ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }

  function textNodes() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
        if (!norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var out = [];
    while (walker.nextNode()) out.push(walker.currentNode);
    return out;
  }

  function applyLang(lang, save) {
    var toEs = lang === 'es';

    textNodes().forEach(function (n) {
      if (n.__tscOrig === undefined) n.__tscOrig = n.nodeValue;
      var key = norm(n.__tscOrig);
      n.nodeValue = toEs && EN_TO_ES[key] ? EN_TO_ES[key] : n.__tscOrig;
    });

    document.querySelectorAll('[placeholder],[aria-label],[alt],[title]').forEach(function (el) {
      ATTRS.forEach(function (attr) {
        var v = el.getAttribute(attr);
        if (v === null) return;
        var store = el.__tscAttrs || (el.__tscAttrs = {});
        if (store[attr] === undefined) store[attr] = v;
        var key = norm(store[attr]);
        el.setAttribute(attr, toEs && EN_TO_ES[key] ? EN_TO_ES[key] : store[attr]);
      });
    });

    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      var c = meta.getAttribute('content');
      if (c !== null) {
        if (meta.__tscOrig === undefined) meta.__tscOrig = c;
        var mk = norm(meta.__tscOrig);
        meta.setAttribute('content', toEs && EN_TO_ES[mk] ? EN_TO_ES[mk] : meta.__tscOrig);
      }
    }

    if (document.__tscTitleOrig === undefined) document.__tscTitleOrig = document.title;
    var tk = norm(document.__tscTitleOrig);
    document.title = toEs && EN_TO_ES[tk] ? EN_TO_ES[tk] : document.__tscTitleOrig;

    document.documentElement.setAttribute('lang', lang);

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      if (toEs) {
        btn.textContent = 'English';
        btn.setAttribute('aria-label', 'Cambiar a inglés');
      } else {
        btn.textContent = 'Español';
        btn.setAttribute('aria-label', 'Switch to Spanish');
      }
    }

    if (save) { try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {} }
  }

  function currentLang() {
    try {
      var q = new URLSearchParams(window.location.search).get('lang');
      if (q === 'es' || q === 'en') { try { localStorage.setItem(STORAGE_KEY, q); } catch (e) {} return q; }
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === 'es' || s === 'en') return s;
    } catch (e) {}
    return 'en';
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang(), false);
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('lang') === 'es' ? 'en' : 'es';
      applyLang(next, true);
    });
  });
})();
