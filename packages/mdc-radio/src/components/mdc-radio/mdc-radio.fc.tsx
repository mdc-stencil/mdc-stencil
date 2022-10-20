import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcRadioFCProps extends MdcRadioNativeControlFCProps {
  touch?: boolean
}

export const MdcRadioFC: FunctionalComponent<MdcRadioFCProps> = (
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
      <MdcRadioNativeControlFC {...rest} />
      <MdcRadioBackgroundFC>
        <MdcRadioOuterCircleFC />
        <MdcRadioInnerCircleFC />
      </MdcRadioBackgroundFC>
      <MdcRadioRippleFC />
      {children}
    </div>
  )
}

export interface MdcRadioNativeControlFCProps
  extends JSXBase.InputHTMLAttributes<HTMLInputElement> {}

export const MdcRadioNativeControlFC: FunctionalComponent<
MdcRadioNativeControlFCProps
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

export interface MdcRadioBackgroundFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcRadioBackgroundFC: FunctionalComponent<
MdcRadioBackgroundFCProps
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

export interface MdcRadioOuterCircleFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcRadioOuterCircleFC: FunctionalComponent<
MdcRadioOuterCircleFCProps
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

export interface MdcRadioInnerCircleFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcRadioInnerCircleFC: FunctionalComponent<
MdcRadioInnerCircleFCProps
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

export interface MdcRadioRippleFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcRadioRippleFC: FunctionalComponent<MdcRadioRippleFCProps> = (
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
