import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcFloatingLabelFCProps
  extends JSXBase.ButtonHTMLAttributes<HTMLSpanElement> {
  kind?: 'float-above' | 'shake' | 'required'
}

export const MdcFloatingLabelFC: FunctionalComponent<MdcFloatingLabelFCProps> = (
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
      'mdc-floating-label': true,
      [`mdc-floating-label--${kind}`]: kind !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}
