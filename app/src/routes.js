import m from 'mithril'

import {
  HomeContainer,
} from './containers'

const routes = {
  '/': {
    render: () => {
      return m(HomeContainer)
    }
  },
}

export default routes
