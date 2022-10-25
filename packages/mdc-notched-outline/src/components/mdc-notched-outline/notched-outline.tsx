import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface NotchedOutlineProps
  extends JSXBase.ButtonHTMLAttributes<HTMLSpanElement> {
  kind?: 'notched' | 'no-label'
}

export const NotchedOutline: FunctionalComponent<NotchedOutlineProps> = (
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
      'mdc-notched-outline': true,
      [`mdc-notched-outline--${kind}`]: kind !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      <NotchedOutlineLeading />
      <NotchedOutlineNotch>
        {children}
      </NotchedOutlineNotch>
      <NotchedOutlineTrailing />
    </span>
  )
}

export interface NotchedOutlineLeadingProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const NotchedOutlineLeading: FunctionalComponent<NotchedOutlineLeadingProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-notched-outline__leading': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface NotchedOutlineNotchProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const NotchedOutlineNotch: FunctionalComponent<NotchedOutlineNotchProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-notched-outline__notch': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface NotchedOutlineTrailingProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const NotchedOutlineTrailing: FunctionalComponent<NotchedOutlineTrailingProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-notched-outline__trailing': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}
