import config from 'const'

type Coins =
  | 'Dollars'
  | 'Chilean Peso'
  | 'Euros'
  | 'Japanese Yen'
  | 'Pounds'
  | 'Swiss Franc'
  | 'Uruguayan Peso'
  | 'Bolívares'

interface CurrencyInterface {
  label: Coins
  value: string
}

interface MethodsInterface {
  label: string
  img: string
}

interface PaymentInterface {
  label: Coins
  methods: MethodsInterface[]
}

export const languages = [
  { label: 'English', value: 'EN' },
  { label: 'Spanish', value: 'ES' }
]

export const fonts = [
  { label: 'Arial', value: '234g785638547' },
  { label: 'Courier New', value: '237dd8547' },
  { label: 'Open Sans', value: '2r565w54ar5' },
  { label: 'Georgia', value: '234gh85e2c547' },
  { label: 'Gill Sans', value: '234g4dfgxd8547' },
  { label: 'Times New Roman', value: '234gtdd8547' }
]

export const currency: CurrencyInterface[] = [
  { label: 'Dollars', value: '$' },
  { label: 'Chilean Peso', value: '$' },
  { label: 'Euros', value: '€' },
  { label: 'Japanese Yen', value: '¥' },
  { label: 'Pounds', value: '£' },
  { label: 'Swiss Franc', value: '₣' },
  { label: 'Uruguayan Peso', value: '$U' },
  { label: 'Bolívares', value: 'Bs.' }
]

export const paymentMethods: PaymentInterface[] = [
  {
    label: 'Dollars',
    methods: [
      { label: 'Credit', img: `${config.UrlBaseImg}payment/card.svg` },
      { label: 'Paypal', img: `${config.UrlBaseImg}payment/paypal.svg` },
      { label: 'Zelle', img: `${config.UrlBaseImg}payment/zelle.svg` },
      { label: 'USD Transfer', img: `${config.UrlBaseImg}payment/zelle.svg` }
    ]
  },
  {
    label: 'Chilean Peso',
    methods: [
      { label: 'Khipu', img: `${config.UrlBaseImg}payment/khipu.svg` },
      { label: 'Transbank', img: `${config.UrlBaseImg}payment/transbank.svg` }
    ]
  },
  {
    label: 'Euros',
    methods: [
      { label: 'Bluesnap', img: `${config.UrlBaseImg}payment/card.svg` },
      { label: 'Paypal', img: `${config.UrlBaseImg}payment/paypal.svg` },
      { label: 'Stripe', img: `${config.UrlBaseImg}payment/card.svg` }
    ]
  },
  {
    label: 'Japanese Yen',
    methods: [
      { label: 'Credit', img: `${config.UrlBaseImg}payment/card.svg` },
      { label: 'Paypal', img: `${config.UrlBaseImg}payment/paypal.svg` }
    ]
  },
  {
    label: 'Pounds',
    methods: [
      { label: 'Bluesnap', img: `${config.UrlBaseImg}payment/card.svg` },
      { label: 'Paypal', img: `${config.UrlBaseImg}payment/paypal.svg` },
      { label: 'Stripe', img: `${config.UrlBaseImg}payment/card.svg` }
    ]
  },
  {
    label: 'Swiss Franc',
    methods: [
      { label: 'Credit', img: `${config.UrlBaseImg}payment/card.svg` }
    ]
  },
  {
    label: 'Uruguayan Peso',
    methods: [
      { label: 'Credit', img: `${config.UrlBaseImg}payment/card.svg` }
    ]
  },
  {
    label: 'Bolívares',
    methods: [
      { label: 'Credit', img: `${config.UrlBaseImg}payment/bnc.svg` },
      { label: 'Debit', img: `${config.UrlBaseImg}payment/mercantil.svg` },
      { label: 'C2P', img: `${config.UrlBaseImg}payment/c2p.svg` },
      { label: 'Pago Móvil', img: `${config.UrlBaseImg}payment/c2p.svg` }
    ]
  }
]

export const currencyValues = [
  { label: 'Dollars', value: 'USD' },
  { label: 'Chilean Peso', value: 'CLP' },
  { label: 'Euros', value: 'EUR' },
  { label: 'Japanese Yen', value: 'JPY' },
  { label: 'Pounds', value: 'GBP' },
  { label: 'Swiss Franc', value: 'Fr' },
  { label: 'Uruguayan Peso', value: 'UYU' },
  { label: 'Bolívares', value: 'VES' }
]

export const subjects = [
  'Select a subject',
  'Incident',
  'Requirement',
  'Inquiry'
]

export const transactions = [
  'Select an option',
  'None, getting started',
  'Less than 500',
  'Between 500 & 2500',
  'Between 2500 & 5000',
  'More than 5000'
]

export const countries = [
  { name: 'Argentine Peso', currency: 'ARS', code: 'AR' },
  { name: 'Arubian Guilder', currency: 'AWG', code: 'AW' },
  { name: 'Australian Dollar', currency: 'AUD', code: 'AU' },
  { name: 'Bolivian Boliviano', currency: 'BOB', code: 'BO' },
  { name: 'Brazilian Real', currency: 'BRL', code: 'BR' },
  { name: 'British Pound Sterling', currency: 'GBP', code: 'GB' },
  { name: 'Canadian Dollar', currency: 'CAD', code: 'CA' },
  { name: 'Chilean Peso', currency: 'CLP', code: 'CL' },
  { name: 'China Yuan Renminbi', currency: 'CNY', code: 'CN' },
  { name: 'Colombian Peso', currency: 'COP', code: 'CO' },
  { name: 'Costa Rican Colon', currency: 'CRC', code: 'CR' },
  { name: 'Dominican Republic Peso', currency: 'DOP', code: 'DO' },
  { name: 'Euro', currency: 'EUR', code: 'EU' },
  { name: 'Guatemalan Quetzal', currency: 'GTQ', code: 'GT' },
  { name: 'Hong Kong Dollar', currency: 'HKD', code: 'HK' },
  { name: 'Japanese Yen', currency: 'JPY', code: 'JP' },
  { name: 'Mexican Peso', currency: 'MXN', code: 'MX' },
  { name: 'Norwegian Krone', currency: 'NOK', code: 'NO' },
  { name: 'Panamanian Balboa', currency: 'PAB', code: 'PA' },
  { name: 'Peruvian Nuevo Sol', currency: 'PEN', code: 'PE' },
  { name: 'Singapore Dollar', currency: 'SGD', code: 'SG' },
  { name: 'South Korean Won', currency: 'KRW', code: 'KR' },
  { name: 'Swedish Krona', currency: 'SEK', code: 'SE' },
  { name: 'Swiss Franc', currency: 'CHF', code: 'CH' },
  { name: 'United State Dollar', currency: 'USD', code: 'US' },
  { name: 'Uruguayan Peso', currency: 'UYU', code: 'UY' },
  { name: 'Venezuelan Bolivar Soberano', currency: 'VES', code: 'VE' }
]

export const allCountries = [
  {
    code: 'AF',
    label: 'Afghanistan',
    phone: '93'
  },
  {
    code: 'AL',
    label: 'Albania',
    phone: '355'
  },
  {
    code: 'AR',
    label: 'Argentina',
    phone: '54'
  },
  {
    code: 'AT',
    label: 'Austria',
    phone: '43'
  },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61'
  },
  {
    code: 'BE',
    label: 'Belgium',
    phone: '32'
  },
  {
    code: 'BR',
    label: 'Brazil',
    phone: '55'
  },
  {
    code: 'CH',
    label: 'Switzerland',
    phone: '41'
  },
  {
    code: 'CL',
    label: 'Chile',
    phone: '56'
  },
  {
    code: 'CM',
    label: 'Cameroon',
    phone: '237'
  },
  {
    code: 'CN',
    label: 'China',
    phone: '86'
  },
  {
    code: 'CO',
    label: 'Colombia',
    phone: '57'
  },
  {
    code: 'CR',
    label: 'Costa Rica',
    phone: '506'
  },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49'
  },
  {
    code: 'DJ',
    label: 'Djibouti',
    phone: '253'
  },
  {
    code: 'DK',
    label: 'Denmark',
    phone: '45'
  },
  {
    code: 'DM',
    label: 'Dominica',
    phone: '1-767'
  },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809'
  },
  {
    code: 'FR',
    label: 'France',
    phone: '33'
  },
  {
    code: 'GB',
    label: 'United Kingdom',
    phone: '44'
  },
  {
    code: 'GR',
    label: 'Greece',
    phone: '30'
  },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500'
  },
  {
    code: 'GT',
    label: 'Guatemala',
    phone: '502'
  },
  {
    code: 'HK',
    label: 'Hong Kong',
    phone: '852'
  },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672'
  },
  {
    code: 'HN',
    label: 'Honduras',
    phone: '504'
  },
  {
    code: 'HR',
    label: 'Croatia',
    phone: '385'
  },
  {
    code: 'HT',
    label: 'Haiti',
    phone: '509'
  },
  {
    code: 'HU',
    label: 'Hungary',
    phone: '36'
  },
  {
    code: 'ID',
    label: 'Indonesia',
    phone: '62'
  },
  {
    code: 'IE',
    label: 'Ireland',
    phone: '353'
  },
  {
    code: 'IL',
    label: 'Israel',
    phone: '972'
  },
  {
    code: 'IT',
    label: 'Italy',
    phone: '39'
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850'
  },
  {
    code: 'KR',
    label: 'Korea, Republic of',
    phone: '82'
  },
  {
    code: 'MX',
    label: 'Mexico',
    phone: '52'
  },
  {
    code: 'NL',
    label: 'Netherlands',
    phone: '31'
  },
  {
    code: 'NO',
    label: 'Norway',
    phone: '47'
  },
  {
    code: 'NP',
    label: 'Nepal',
    phone: '977'
  },
  {
    code: 'NZ',
    label: 'New Zealand',
    phone: '64'
  },
  {
    code: 'OM',
    label: 'Oman',
    phone: '968'
  },
  {
    code: 'PA',
    label: 'Panama',
    phone: '507'
  },
  {
    code: 'PE',
    label: 'Peru',
    phone: '51'
  },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970'
  },
  {
    code: 'PT',
    label: 'Portugal',
    phone: '351'
  },
  {
    code: 'PW',
    label: 'Palau',
    phone: '680'
  },
  {
    code: 'PY',
    label: 'Paraguay',
    phone: '595'
  },
  {
    code: 'QA',
    label: 'Qatar',
    phone: '974'
  },
  {
    code: 'SE',
    label: 'Sweden',
    phone: '46'
  },
  {
    code: 'SG',
    label: 'Singapore',
    phone: '65'
  },
  {
    code: 'SH',
    label: 'Saint Helena',
    phone: '290'
  },
  {
    code: 'SV',
    label: 'El Salvador',
    phone: '503'
  },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721'
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963'
  },
  {
    code: 'SZ',
    label: 'Swaziland',
    phone: '268'
  },
  {
    code: 'TR',
    label: 'Turkey',
    phone: '90'
  },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868'
  },
  {
    code: 'TV',
    label: 'Tuvalu',
    phone: '688'
  },
  {
    code: 'UA',
    label: 'Ukraine',
    phone: '380'
  },
  {
    code: 'UG',
    label: 'Uganda',
    phone: '256'
  },
  {
    code: 'US',
    label: 'United States',
    phone: '1'
  },
  {
    code: 'UY',
    label: 'Uruguay',
    phone: '598'
  },
  {
    code: 'VE',
    label: 'Venezuela',
    phone: '58'
  }
]
