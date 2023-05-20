import { BehaviorSubject } from 'rxjs';

export const klaroConfig = (event$: BehaviorSubject<any>) => ({
  version: 1,
  cookieExpiresAfterDays: 60,
  name: 'default',
  status: 'active',
  id: '84ef3220f4ace529ce88e5d670dfb63d',
  elementID: 'klaro',
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieDomain: 'cwsdev.net',
  lang: 'zz',
  languages: ['en'],
  hideToggleAll: false,
  htmlTexts: false,
  embedded: false,
  groupByPurpose: true,
  purposeOrder: ['advertising', 'functional', 'performance', 'marketing'],
  default: false,
  mustConsent: false,
  disablePoweredBy: true,
  acceptAll: true,
  hideDeclineAll: true,
  noticeAsModal: false,
  translations: {
    en: {
      purposes: {
        advertising: {},
        functional: {},
        marketing: {},
        performance: {},
      },
    },
    zz: {
      privacyPolicyUrl: 'https://cwsdev.net/privacy',
      purposes: {
        advertising: {},
        functional: {},
        marketing: {},
        performance: {},
      },
    },
  },
  styling: {
    theme: [],
  },
  services: [
    {
      id: 'f00a14a098802063bff57aa5ecd22bec',
      version: 1,
      name: 'cloudflare',
      purposes: ['functional'],
      default: true,
      required: true,
      optOut: false,
      contextualConsentOnly: false,
      onlyOnce: false,
      translations: {
        $en: {
          description:
            'Cloudflare provides a content delivery network (CDN) as well as security, caching and DNS services to companies.',
        },
        de: {
          description:
            'Cloudflare bietet ein Content Delivery Network (CDN) sowie Sicherheits-, Caching- und DNS-Dienste für Unternehmen.',
        },
        en: {
          description:
            'Cloudflare provides a content delivery network (CDN) as well as security, caching and DNS services to companies.',
        },
        es: {
          description:
            'Cloudflare ofrece a las empresas una red de distribución de contenidos (CDN), así como servicios de seguridad, almacenamiento en caché y DNS.',
        },
        fr: {
          description:
            'Cloudflare fournit un réseau de diffusion de contenu (CDN) ainsi que des services de sécurité, de mise en cache et de DNS aux entreprises.',
        },
        it: {
          description:
            'Cloudflare fornisce una rete di consegna dei contenuti (CDN) e servizi di sicurezza, caching e DNS alle aziende.',
        },
        nl: {
          description:
            'Cloudflare levert een content delivery network (CDN) en beveiligings-, caching- en DNS-diensten aan bedrijven.',
        },
        pl: {
          description:
            'Cloudflare oferuje sieć dostarczania treści (CDN), jak również usługi bezpieczeństwa, buforowania i DNS dla przedsiębiorstw.',
        },
        pt: {
          description:
            'O Cloudflare fornece uma rede de entrega de conteúdo (CDN), bem como serviços de segurança, cache e DNS para empresas.',
        },
        zh: {
          description:
            'Cloudflare为企业提供内容交付网络（CDN）以及安全、缓存和DNS服务。',
        },
        zz: {
          privacyPolicyUrl:
            'https://www.cloudflare.com/{lang}-{country}/privacypolicy',
          websiteUrl: 'https://www.cloudflare.com',
        },
      },
      cookies: [
        {
          pattern: '^__cfduid$',
          expiresAfter: '',
          path: '',
          _id: '_6j4kc9cy8',
        },
        {
          pattern: '^__cf_bm$',
          expiresAfter: '',
          path: '',
          _id: '_0mtm1asrq',
        },
        {
          pattern: '^cf_ob_info$',
          expiresAfter: '',
          path: '',
          _id: '_2vs5r09dn',
        },
        {
          pattern: '^__cflb$',
          expiresAfter: '',
          path: '',
          _id: '_s5fnj9tc6',
        },
      ],
      localStorage: [],
      sessionStorage: [],
      elements: null,
      requests: [],
      actions: null,
      _id: '_af7dn9e36',
    },
    {
      id: '524150fde8bafb3c3a1528556344a378',
      version: 1,
      name: 'google-analytics',
      purposes: ['performance'],
      default: true,
      required: true,
      optOut: false,
      contextualConsentOnly: false,
      onlyOnce: false,
      translations: {
        $en: {
          description:
            'Google Analytics is a web analytics solution offered by Google.',
        },
        de: {
          description:
            'Google Analytics ist eine Web-Analyse-Lösung, die von Google angeboten wird.',
        },
        en: {
          description:
            'Google Analytics is a web analytics solution offered by Google.',
        },
        es: {
          description:
            'Google Analytics es una solución de análisis web ofrecida por Google.',
        },
        fr: {
          description:
            "Google Analytics est une solution d'analyse web proposée par Google.",
        },
        it: {
          description:
            'Google Analytics è una soluzione di analisi web offerta da Google.',
        },
        nl: {
          description:
            'Google Analytics is een webanalyse-oplossing die door Google wordt aangeboden.',
        },
        pl: {
          description:
            'Google Analytics to rozwiązanie do analizy stron internetowych oferowane przez Google.',
        },
        pt: {
          description:
            'O Google Analytics é uma solução de análise da web oferecida pelo Google.',
        },
        zh: {
          description: 'Google Analytics是谷歌提供的网络分析解决方案。',
        },
        zz: {
          cookieDetailsUrl:
            'https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage',
          privacyPolicyUrl: 'https://policies.google.com/privacy?hl={lang}',
          title: 'Google Analytics',
        },
      },
      cookies: [
        {
          pattern: '^_ga$',
          expiresAfter: '2 years',
          path: '/',
          _id: '_lqqk8xup3',
        },
        {
          pattern: '^_gid$',
          expiresAfter: '24 hours',
          path: '',
          _id: '_khamjxgos',
        },
        {
          pattern: '^_gat$',
          expiresAfter: '1 minute',
          path: '',
          _id: '_9etvqgs7g',
        },
        {
          pattern: '^AMP_TOKEN$',
          expiresAfter: '1 year',
          path: '',
          _id: '_8i7hkvfuy',
        },
        {
          pattern: '^_gac_',
          expiresAfter: '90 days',
          path: '',
          _id: '_2c2ylaf8j',
        },
        {
          pattern: '^__utmz$',
          expiresAfter: '6 months',
          path: '',
          _id: '_utcnrioae',
        },
        {
          pattern: '^__utma$',
          expiresAfter: 'never',
          path: '',
          _id: '_uc5kge62g',
        },
        {
          pattern: '^__utmb$',
          expiresAfter: '30 minutes',
          path: '',
          _id: '_k458080rn',
        },
        {
          pattern: '^__utmv$',
          expiresAfter: 'never',
          path: '',
          _id: '_no7qalwlb',
        },
        {
          pattern: '^__utmt$',
          expiresAfter: '10 minutes',
          path: '',
          _id: '_lynh2c8ob',
        },
      ],
      localStorage: [],
      sessionStorage: [],
      elements: [
        {
          tagName: 'script',
          content: {
            patterns: [
              "ga\\('create'.*?\\)",
              'GoogleAnalyticsObject',
              'www\\.google-analytics\\.com/analytics\\.js',
            ],
          },
        },
      ],
      requests: [
        {
          url: 'https://www\\.google-analytics\\.com',
        },
      ],
      actions: null,
      _id: '_6m2nl8197',
    },
    {
      id: '5f8fc501d7c7d42615853c3388995408',
      version: 1,
      name: 'google-tag-manager',
      onAccept: () => {
        event$.next('accepted');
      },
      onDecline: () => {
        event$.next('declined');
      },
      onInit: () => {
        event$.next('init');
      },
      purposes: ['advertising'],
      default: true,
      required: true,
      optOut: false,
      contextualConsentOnly: false,
      onlyOnce: false,
      translations: {
        $en: {
          description:
            'Google Tag Manager is a solution that manages third-party scripts on websites.',
        },
        de: {
          description:
            'Google Tag Manager ist eine Lösung, die Skripte von Drittanbietern auf Websites verwaltet.',
        },
        en: {
          description:
            'Google Tag Manager is a solution that manages third-party scripts on websites.',
        },
        es: {
          description:
            'Google Tag Manager es una solución que gestiona los scripts de terceros en los sitios web.',
        },
        fr: {
          description:
            'Google Tag Manager est une solution qui gère les scripts tiers sur les sites Web.',
        },
        it: {
          description:
            'Google Tag Manager è una soluzione che gestisce script di terzi sui siti web.',
        },
        nl: {
          description:
            'Google Tag Manager is een oplossing waarmee scripts van derden op websites kunnen worden beheerd.',
        },
        pl: {
          description:
            'Google Tag Manager jest rozwiązaniem, które zarządza skryptami firm trzecich na stronach internetowych.',
        },
        pt: {
          description:
            'O Google Tag Manager é uma solução que gerencia scripts de terceiros em websites.',
        },
        zh: {
          description:
            'Google Tag Manager是一个管理网站上第三方脚本的解决方案。',
        },
        zz: {
          title: 'Google Tag Manager',
        },
      },
      cookies: [
        {
          pattern: '^_gcl_au$',
          expiresAfter: '1 year',
          path: '',
          _id: '_29kj6t40e',
        },
      ],
      localStorage: [],
      sessionStorage: [],
      elements: null,
      requests: [],
      actions: null,
      _id: '_aj1lcwv8f',
    },
  ],
});
