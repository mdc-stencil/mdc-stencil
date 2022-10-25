import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface ButtonProps
  extends JSXBase.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'unelevated' | 'raised' | 'outlined'
  'icon-leading'?: boolean
  'icon-trailing'?: boolean
}

export const Button: FunctionalComponent<ButtonProps> = (
  props,
  children
) => {
  const {
    class: className,
    kind,
    'icon-leading': iconLeading,
    'icon-trailing': iconTrailing,
    ...rest
  } = props
  return (
    <button class={{
      'mdc-button': true,
      [`mdc-button--${kind}`]: kind !== undefined,
      'mdc-button--icon-leading': iconLeading === true,
      'mdc-button--icon-trailing': iconTrailing === true,
      ...classNames(className)
    }}
      {...rest}
    >
      <ButtonRipple />
      <ButtonFocusRing />
      {children}
    </button>
  )
}

export interface ButtonRippleProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const ButtonRipple: FunctionalComponent<ButtonRippleProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-button__ripple': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface ButtonFocusRingProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const ButtonFocusRing: FunctionalComponent<ButtonFocusRingProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-button__focus-ring': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface ButtonLabelProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const ButtonLabel: FunctionalComponent<ButtonLabelProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-button__label': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface ButtonTouchProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const ButtonTouch: FunctionalComponent<ButtonTouchProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-button__touch': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}
