import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface FormFieldProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  align?: 'end'
  nowrap?: boolean
}

export const FormField: FunctionalComponent<FormFieldProps> = (
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
