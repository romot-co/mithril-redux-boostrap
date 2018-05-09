import devState from './initstate.dev'
import prodState from './initstate.production'

const isDev = process.env.NODE_ENV !== 'production'

const initState = isDev ? devState : prodState

export default initState
