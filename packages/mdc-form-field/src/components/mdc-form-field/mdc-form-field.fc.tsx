import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcFormFieldFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  align?: 'end'
  nowrap?: boolean
}

export const MdcFormFieldFC: FunctionalComponent<MdcFormFieldFCProps> = (
  props,
  children
) => {
  const { class: className, align, nowrap, ...rest } = props
  return (
    <div
      class={{
        'mdc-form-field': true,
        [`mdc-form-field--align-${align}`]: align !== undefined,
        'mdc-form-field--nowrap': nowrap === true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
