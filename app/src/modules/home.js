// ActionType
export const SET_WELCOME = 'SET_WELCOME'

// ActionCreator
export const setWelcome = (message = 'welcome') => {
  return {
    type: SET_WELCOME,
    message,
  }
}

// Reducer
const initialState = {
  message: 'welcome',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_WELCOME: {
      return Object.assign({}, state, {
        message: action.message,
      })
    }
    default: {
      return state
    }
  }
}
