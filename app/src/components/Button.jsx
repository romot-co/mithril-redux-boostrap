import m from 'mithril'
import classNames from 'classnames'
class Button {
  constructor() {}
  view(vnode) {
    const {
      size     = 'md',
      color    = 'link',
      block    = false,
      active   = false,
      disabled = false,
      onClick,
      children,
    } = vnode.attrs

    const classes = classNames('btn', {
      [`btn-${size}`]: true,
      [`btn-${color}`]: true,
      'btn-block': block,
      'active': active,
      'disabled': disabled,
    })

    return (
      <button className={classes} role="button" onclick={onclick}>
        {children}
      </button>
    )
  }
}
export default Button
