import m from 'mithril'
import { store } from './index'

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (component) => ({
    oninit(vnode) {
      this.store = store
      this.attrs = vnode.attrs || {}
      this.unsubscribe = null

      this.setSubscribe = () => {
        this.unsubscribe = this.store.subscribe(this.handleChange.bind(this))
        this.handleChange()
      }

      this.setUnsubscribe = () => {
        if (typeof this.unsubscribe === 'function') {
          this.unsubscribe()
          this.unsubscribe = null
        }
      }

      this.handleChange = () => {
        const state = (typeof mapStateToProps === 'function') ? mapStateToProps(this.store.getState()) : {}
        const dispatches = (typeof mapDispatchToProps === 'function') ? mapDispatchToProps(this.store.dispatch) : {}
        this.attrs = Object.assign({}, state, dispatches, vnode.attrs)
        setTimeout(m.redraw())
      }

      this.setSubscribe()
    },
    onremove() {
      this.store = null
      this.setUnsubscribe()
    },
    view(vnode) {
      return m(component, this.attrs, vnode.children)
    }
  })
}

export default connect
