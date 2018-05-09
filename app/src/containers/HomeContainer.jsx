import m from 'mithril'

import { connect } from '../connect'

const mapStateToProps = (state) => {
  return {
    home: state.home,
  }
}

export default connect(mapStateToProps, null)(Home)
