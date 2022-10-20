import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcLinearProgressFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  indeterminate?: boolean
  closed?: boolean
}

export const MdcLinearProgressFC: FunctionalComponent<MdcLinearProgressFCProps> = (
  props,
  children
) => {
  const { class: className, indeterminate, closed, ...rest } = props
  return (
    <div
      class={{
        'mdc-linear-progress': true,
        'mdc-linear-progress--indeterminate': indeterminate === true,
        'mdc-linear-progress--closed': closed === true,
        ...classNames(className)
      }}
      role='progressbar'
      {...rest}
    >
      <MdcLinearProgressBufferFC>
        <MdcLinearProgressBufferBarFC />
        <MdcLinearProgressBufferDotsFC />
      </MdcLinearProgressBufferFC>
      <MdcLinearProgressPrimaryBarFC>
        <MdcLinearProgressBarInnerFC />
      </MdcLinearProgressPrimaryBarFC>
      <MdcLinearProgressSecondaryBarFC>
        <MdcLinearProgressBarInnerFC />
      </MdcLinearProgressSecondaryBarFC>
      {children}
    </div>
  )
}

export interface MdcLinearProgressBufferFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcLinearProgressBufferFC: FunctionalComponent<MdcLinearProgressBufferFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-linear-progress__buffer': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcLinearProgressBufferBarFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcLinearProgressBufferBarFC: FunctionalComponent<MdcLinearProgressBufferBarFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-linear-progress__buffer-bar': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcLinearProgressBufferDotsFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcLinearProgressBufferDotsFC: FunctionalComponent<MdcLinearProgressBufferDotsFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-linear-progress__buffer-dots': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcLinearProgressPrimaryBarFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcLinearProgressPrimaryBarFC: FunctionalComponent<MdcLinearProgressPrimaryBarFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-linear-progress__bar': true,
        'mdc-linear-progress__primary-bar': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcLinearProgressSecondaryBarFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcLinearProgressSecondaryBarFC: FunctionalComponent<MdcLinearProgressSecondaryBarFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-linear-progress__bar': true,
        'mdc-linear-progress__secondary-bar': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcLinearProgressBarInnerFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcLinearProgressBarInnerFC: FunctionalComponent<MdcLinearProgressBarInnerFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-linear-progress__bar-inner': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
