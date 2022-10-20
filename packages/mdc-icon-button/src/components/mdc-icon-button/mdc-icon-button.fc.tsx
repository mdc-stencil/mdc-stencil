import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcIconButtonFCProps
  extends JSXBase.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const MdcIconButtonFC: FunctionalComponent<MdcIconButtonFCProps> = (
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
      <MdcIconButtonRippleFC />
      <MdcIconButtonFocusRingFC />
      {children}
    </button>
  )
}

export interface MdcIconButtonRippleFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcIconButtonRippleFC: FunctionalComponent<MdcIconButtonRippleFCProps> = (
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

export interface MdcIconButtonFocusRingFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcIconButtonFocusRingFC: FunctionalComponent<MdcIconButtonFocusRingFCProps> = (
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

export interface MdcIconButtonTouchFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcIconButtonTouchFC: FunctionalComponent<MdcIconButtonTouchFCProps> = (
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
