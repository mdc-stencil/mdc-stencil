import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcLineRippleFCProps
  extends JSXBase.ButtonHTMLAttributes<HTMLSpanElement> {
  kind?: 'active' | 'deactivating'
}

export const MdcLineRippleFC: FunctionalComponent<MdcLineRippleFCProps> = (
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
