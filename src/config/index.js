import { vuetifyOptions } from './vuetify'

const config =
  process.env.NODE_ENV === 'production' ? require('./config.prod').default : require('./config.dev').default

export { config, vuetifyOptions }
