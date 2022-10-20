import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcNotchedOutlineFCProps
  extends JSXBase.ButtonHTMLAttributes<HTMLSpanElement> {
  kind?: 'notched' | 'no-label'
}

export const MdcNotchedOutlineFC: FunctionalComponent<MdcNotchedOutlineFCProps> = (
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
      <MdcNotchedOutlineLeadingFC />
      <MdcNotchedOutlineNotchFC>
        {children}
      </MdcNotchedOutlineNotchFC>
      <MdcNotchedOutlineTrailingFC />
    </span>
  )
}

export interface MdcNotchedOutlineLeadingProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcNotchedOutlineLeadingFC: FunctionalComponent<MdcNotchedOutlineLeadingProps> = (
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

export interface MdcNotchedOutlineNotchFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcNotchedOutlineNotchFC: FunctionalComponent<MdcNotchedOutlineNotchFCProps> = (
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

export interface MdcNotchedOutlineTrailingFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcNotchedOutlineTrailingFC: FunctionalComponent<MdcNotchedOutlineTrailingFCProps> = (
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
