import { BehaviorSubject } from 'rxjs';

export const klaroConfig = (event$: BehaviorSubject<any>) => ({
  "version": 1,
  "cookieExpiresAfterDays": 60,
  "name": "default",
  "status": "active",
  "id": "1911e749b36bd0e411929de1a37abc29",
  "elementID": "klaro",
  "storageMethod": "localStorage",
  "cookieName": "klaro",
  "lang": "zz",
  "languages": [
    "en"
  ],
  "hideToggleAll": false,
  "htmlTexts": false,
  "embedded": false,
  "groupByPurpose": true,
  "purposeOrder": [
    "advertising",
    "functional",
    "performance",
    "marketing"
  ],
  "default": false,
  "mustConsent": false,
  "disablePoweredBy": true,
  "acceptAll": true,
  "hideDeclineAll": true,
  "noticeAsModal": false,
  "translations": {
    "en": {
      "purposes": {
        "advertising": {},
        "functional": {},
        "marketing": {},
        "performance": {}
      }
    },
    "zz": {
      "privacyPolicyUrl": "https://cwsdev.net/privacy",
      "purposes": {
        "advertising": {},
        "functional": {},
        "marketing": {},
        "performance": {}
      }
    }
  },
  "styling": {
    "theme": [
      "top"
    ]
  },
  "services": [
    {
      "id": "524150fde8bafb3c3a1528556344a378",
      "version": 1,
      "name": "google-analytics",
      "purposes": [
        "performance"
      ],
      "default": true,
      "required": true,
      "optOut": false,
      "contextualConsentOnly": false,
      "onlyOnce": false,
      "translations": {
        "$en": {
          "description": "Google Analytics is a web analytics solution offered by Google."
        },
        "de": {
          "description": "Google Analytics ist eine Web-Analyse-Lösung, die von Google angeboten wird."
        },
        "en": {
          "description": "Google Analytics is a web analytics solution offered by Google."
        },
        "es": {
          "description": "Google Analytics es una solución de análisis web ofrecida por Google."
        },
        "fr": {
          "description": "Google Analytics est une solution d'analyse web proposée par Google."
        },
        "it": {
          "description": "Google Analytics è una soluzione di analisi web offerta da Google."
        },
        "nl": {
          "description": "Google Analytics is een webanalyse-oplossing die door Google wordt aangeboden."
        },
        "pl": {
          "description": "Google Analytics to rozwiązanie do analizy stron internetowych oferowane przez Google."
        },
        "pt": {
          "description": "O Google Analytics é uma solução de análise da web oferecida pelo Google."
        },
        "zh": {
          "description": "Google Analytics是谷歌提供的网络分析解决方案。"
        },
        "zz": {
          "cookieDetailsUrl": "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage",
          "privacyPolicyUrl": "https://policies.google.com/privacy?hl={lang}",
          "title": "Google Analytics"
        }
      },
      "cookies": [
        {
          "pattern": "^_ga$",
          "expiresAfter": "2 years",
          "path": "/",
          "_id": "_t5u26hiu6"
        },
        {
          "pattern": "^_gid$",
          "expiresAfter": "24 hours",
          "path": "",
          "_id": "_js92kdxwd"
        },
        {
          "pattern": "^_gat$",
          "expiresAfter": "1 minute",
          "path": "",
          "_id": "_dpyz2ujyl"
        },
        {
          "pattern": "^AMP_TOKEN$",
          "expiresAfter": "1 year",
          "path": "",
          "_id": "_binsgvvlu"
        },
        {
          "pattern": "^_gac_",
          "expiresAfter": "90 days",
          "path": "",
          "_id": "_av8tzpzi7"
        },
        {
          "pattern": "^__utmz$",
          "expiresAfter": "6 months",
          "path": "",
          "_id": "_q2argueva"
        },
        {
          "pattern": "^__utma$",
          "expiresAfter": "never",
          "path": "",
          "_id": "_hpei0mqny"
        },
        {
          "pattern": "^__utmb$",
          "expiresAfter": "30 minutes",
          "path": "",
          "_id": "_5wjdgi4kf"
        },
        {
          "pattern": "^__utmv$",
          "expiresAfter": "never",
          "path": "",
          "_id": "_gl07vxy77"
        },
        {
          "pattern": "^__utmt$",
          "expiresAfter": "10 minutes",
          "path": "",
          "_id": "_byvitvyug"
        }
      ],
      "localStorage": [],
      "sessionStorage": [],
      "elements": [
        {
          "tagName": "script",
          "content": {
            "patterns": [
              "ga\\('create'.*?\\)",
              "GoogleAnalyticsObject",
              "www\\.google-analytics\\.com/analytics\\.js"
            ]
          }
        }
      ],
      "requests": [
        {
          "url": "https://www\\.google-analytics\\.com"
        }
      ],
      "actions": null,
      "_id": "_hwi7p92gn"
    },
    {
      "id": "",
      "version": 1,
      "name": "smarty-ads",
      onAccept: () => {
        event$.next('accepted');
      },
      onDecline: () => {
        event$.next('declined');
      },
      onInit: () => {
        event$.next('init');
      },
      "purposes": [
        "advertising"
      ],
      "default": true,
      "required": true,
      "optOut": false,
      "contextualConsentOnly": false,
      "onlyOnce": false,
      "translations": {
        "en": {},
        "zz": {}
      },
      "cookies": [
        {
          "pattern": "^_smtads$",
          "expiresAfter": "",
          "path": "",
          "_id": "_ltp0cf3hs"
        }
      ],
      "localStorage": [],
      "sessionStorage": [],
      "elements": null,
      "requests": [],
      "actions": null,
      "_id": "_kpdiodfs8"
    }
  ]
});
