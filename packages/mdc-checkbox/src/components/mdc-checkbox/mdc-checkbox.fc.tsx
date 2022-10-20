import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcCheckboxFCProps extends MdcCheckboxNativeControlFCProps {
  touch?: boolean
}

export const MdcCheckboxFC: FunctionalComponent<MdcCheckboxFCProps> = (
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
      <MdcCheckboxNativeControlFC {...rest} />
      <MdcCheckboxBackgroundFC>
        <MdcCheckboxCheckmarkFC />
        <MdcCheckboxMixedmarkFC />
      </MdcCheckboxBackgroundFC>
      <MdcCheckboxRippleFC />
      <MdcCheckboxFocusRingFC />
      {children}
    </div>
  )
}

export interface MdcCheckboxNativeControlFCProps
  extends JSXBase.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean
}

export const MdcCheckboxNativeControlFC: FunctionalComponent<
MdcCheckboxNativeControlFCProps
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

export interface MdcCheckboxBackgroundFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcCheckboxBackgroundFC: FunctionalComponent<
MdcCheckboxBackgroundFCProps
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

export interface MdcCheckboxCheckmarkFCProps
  extends JSXBase.SVGAttributes<SVGElement> {}

export const MdcCheckboxCheckmarkFC: FunctionalComponent<
MdcCheckboxCheckmarkFCProps
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
      <MdcCheckboxCheckmarkPathFC />
      {children}
    </svg>
  )
}

export interface MdcCheckboxCheckmarkPathFCProps
  extends JSXBase.SVGAttributes<SVGPathElement> {}

export const MdcCheckboxCheckmarkPathFC: FunctionalComponent<
MdcCheckboxCheckmarkPathFCProps
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

export interface MdcCheckboxMixedmarkFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcCheckboxMixedmarkFC: FunctionalComponent<
MdcCheckboxMixedmarkFCProps
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

export interface MdcCheckboxRippleFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcCheckboxRippleFC: FunctionalComponent<MdcCheckboxRippleFCProps> = (
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

export interface MdcCheckboxFocusRingFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcCheckboxFocusRingFC: FunctionalComponent<MdcCheckboxFocusRingFCProps> = (
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
