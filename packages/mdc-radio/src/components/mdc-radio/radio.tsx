import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface RadioProps extends RadioNativeControlProps {
  touch?: boolean
}

export const Radio: FunctionalComponent<RadioProps> = (
  props,
  children
) => {
  const { class: className, touch, ...rest } = props
  const { disabled } = props
  return (
    <div
      class={{
        'mdc-radio': true,
        'mdc-radio--touch': touch === true,
        'mdc-radio--disabled': disabled === true,
        ...classNames(className)
      }}
    >
      <RadioNativeControl {...rest} />
      <RadioBackground>
        <RadioOuterCircle />
        <RadioInnerCircle />
      </RadioBackground>
      <RadioRipple />
      {children}
    </div>
  )
}

export interface RadioNativeControlProps
  extends JSXBase.InputHTMLAttributes<HTMLInputElement> {}

export const RadioNativeControl: FunctionalComponent<
RadioNativeControlProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <input
      class={{
        'mdc-radio__native-control': true,
        ...classNames(className)
      }}
      type='radio'
      {...rest}
    >
      {children}
    </input>
  )
}

export interface RadioBackgroundProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const RadioBackground: FunctionalComponent<
RadioBackgroundProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-radio__background': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface RadioOuterCircleProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const RadioOuterCircle: FunctionalComponent<
RadioOuterCircleProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-radio__outer-circle': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface RadioInnerCircleProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const RadioInnerCircle: FunctionalComponent<
RadioInnerCircleProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-radio__inner-circle': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface RadioRippleProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const RadioRipple: FunctionalComponent<RadioRippleProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-radio__ripple': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
