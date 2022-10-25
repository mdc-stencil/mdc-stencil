import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface LineRippleProps
  extends JSXBase.ButtonHTMLAttributes<HTMLSpanElement> {
  kind?: 'active' | 'deactivating'
}

export const LineRipple: FunctionalComponent<LineRippleProps> = (
  props,
  children
) => {
  const {
    class: className,
    kind,
    ...rest
  } = props
  return (
    <span class={{
      'mdc-line-ripple': true,
      [`mdc-line-ripple--${kind}`]: kind !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}
