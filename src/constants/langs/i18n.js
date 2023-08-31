import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation:{
      contacts: 'contactos',
      emergency: 'emergencia',
      services: 'servicios',
      products_services: 'productos y planes',
      want_called: 'quiero que me llamen',
      BTV_phone_email: 'teléfono y mail de blinda tu viaje',
      quote_plan_here: '¡Cotiza aquí tu plan de viaje!',
      form_front_desc: 'Compra tu asistencia al viajero en tres sencillos pasos:',
      buy_online: 'compra en linea',
      quote: 'cotiza',
      select_plan: 'selecciona tu plan'
    },
  },
  en: {
    translation:{
      contacts: 'contacts',
      emergency: 'emergency',
      services: 'services',
      products_services: 'products and plans',
      want_called: 'i want called',
      BTV_phone_email: 'blinda tu viaje phone and email',
      quote_plan_here: 'Quote your travel plan here!',
      form_front_desc: 'Purchase your travel assistance in three easy steps:',
      buy_online: 'buy online',
      quote: 'quote',
      select_plan: 'select your preferred plan'
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;