import * as devEnv from './env.dev'
import * as prodEnv from './env.production'

const isDev = process.env.NODE_ENV !== 'production'

const env = isDev ? devEnv : prodEnv

export default env
