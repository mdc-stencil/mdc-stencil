import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface CheckboxProps extends CheckboxNativeControlProps {
  touch?: boolean
}

export const Checkbox: FunctionalComponent<CheckboxProps> = (
  props,
  children
) => {
  const { class: className, touch, ...rest } = props
  const { disabled } = props
  return (
    <div
      class={{
        'mdc-checkbox': true,
        'mdc-checkbox--touch': touch === true,
        'mdc-checkbox--disabled': disabled === true,
        ...classNames(className)
      }}
    >
      <CheckboxNativeControl {...rest} />
      <CheckboxBackground>
        <CheckboxCheckmark />
        <CheckboxMixedmark />
      </CheckboxBackground>
      <CheckboxRipple />
      <CheckboxFocusRing />
      {children}
    </div>
  )
}

export interface CheckboxNativeControlProps
  extends JSXBase.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean
}

export const CheckboxNativeControl: FunctionalComponent<
CheckboxNativeControlProps
> = (props, children) => {
  const { class: className, indeterminate, ...rest } = props
  return (
    <input
      class={{
        'mdc-checkbox__native-control': true,
        ...classNames(className)
      }}
      type='checkbox'
      data-indeterminate={indeterminate}
      {...rest}
    >
      {children}
    </input>
  )
}

export interface CheckboxBackgroundProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const CheckboxBackground: FunctionalComponent<
CheckboxBackgroundProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-checkbox__background': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface CheckboxCheckmarkProps
  extends JSXBase.SVGAttributes<SVGElement> {}

export const CheckboxCheckmark: FunctionalComponent<
CheckboxCheckmarkProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class={{
        'mdc-checkbox__checkmark': true,
        ...classNames(className)
      }}
      viewBox='0 0 24 24'
      {...rest}
    >
      <CheckboxCheckmarkPath />
      {children}
    </svg>
  )
}

export interface CheckboxCheckmarkPathProps
  extends JSXBase.SVGAttributes<SVGPathElement> {}

export const CheckboxCheckmarkPath: FunctionalComponent<
CheckboxCheckmarkPathProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <path
      class={{
        'mdc-checkbox__checkmark-path': true,
        ...classNames(className)
      }}
      fill='none'
      d='M1.73,12.91 8.1,19.28 22.79,4.59'
      {...rest}
    >
      {children}
    </path>
  )
}

export interface CheckboxMixedmarkProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const CheckboxMixedmark: FunctionalComponent<
CheckboxMixedmarkProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-checkbox__mixedmark': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface CheckboxRippleProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const CheckboxRipple: FunctionalComponent<CheckboxRippleProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-checkbox__ripple': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface CheckboxFocusRingProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const CheckboxFocusRing: FunctionalComponent<CheckboxFocusRingProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-checkbox__focus-ring': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
