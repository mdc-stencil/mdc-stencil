import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcButtonFCProps
  extends JSXBase.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'unelevated' | 'raised' | 'outlined'
  'icon-leading'?: boolean
  'icon-trailing'?: boolean
}

export const MdcButtonFC: FunctionalComponent<MdcButtonFCProps> = (
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
      <MdcButtonRippleFC />
      <MdcButtonFocusRingFC />
      {children}
    </button>
  )
}

export interface MdcButtonRippleFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcButtonRippleFC: FunctionalComponent<MdcButtonRippleFCProps> = (
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

export interface MdcButtonFocusRingFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcButtonFocusRingFC: FunctionalComponent<MdcButtonFocusRingFCProps> = (
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

export interface MdcButtonLabelFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcButtonLabelFC: FunctionalComponent<MdcButtonLabelFCProps> = (
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

export interface MdcButtonTouchFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcButtonTouchFC: FunctionalComponent<MdcButtonTouchFCProps> = (
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
