import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface IconButtonProps
  extends JSXBase.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const IconButton: FunctionalComponent<IconButtonProps> = (
  props,
  children
) => {
  const {
    class: className,
    ...rest
  } = props
  return (
    <button class={{
      'mdc-icon-button': true,
      ...classNames(className)
    }}
      {...rest}
    >
      <IconButtonRipple />
      <IconButtonFocusRing />
      {children}
    </button>
  )
}

export interface IconButtonRippleProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const IconButtonRipple: FunctionalComponent<IconButtonRippleProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-icon-button__ripple': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface IconButtonFocusRingProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const IconButtonFocusRing: FunctionalComponent<IconButtonFocusRingProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-icon-button__focus-ring': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface IconButtonTouchProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const IconButtonTouch: FunctionalComponent<IconButtonTouchProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-icon-button__touch': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}
