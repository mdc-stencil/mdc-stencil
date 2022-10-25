import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface LinearProgressProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  indeterminate?: boolean
  closed?: boolean
}

export const LinearProgress: FunctionalComponent<LinearProgressProps> = (
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
      <LinearProgressBuffer>
        <LinearProgressBufferBar />
        <LinearProgressBufferDots />
      </LinearProgressBuffer>
      <LinearProgressPrimaryBar>
        <LinearProgressBarInner />
      </LinearProgressPrimaryBar>
      <LinearProgressSecondaryBar>
        <LinearProgressBarInner />
      </LinearProgressSecondaryBar>
      {children}
    </div>
  )
}

export interface LinearProgressBufferProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const LinearProgressBuffer: FunctionalComponent<LinearProgressBufferProps> = (
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

export interface LinearProgressBufferBarProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const LinearProgressBufferBar: FunctionalComponent<LinearProgressBufferBarProps> = (
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

export interface LinearProgressBufferDotsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const LinearProgressBufferDots: FunctionalComponent<LinearProgressBufferDotsProps> = (
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

export interface LinearProgressPrimaryBarProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const LinearProgressPrimaryBar: FunctionalComponent<LinearProgressPrimaryBarProps> = (
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

export interface LinearProgressSecondaryBarProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const LinearProgressSecondaryBar: FunctionalComponent<LinearProgressSecondaryBarProps> = (
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

export interface LinearProgressBarInnerProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const LinearProgressBarInner: FunctionalComponent<LinearProgressBarInnerProps> = (
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
