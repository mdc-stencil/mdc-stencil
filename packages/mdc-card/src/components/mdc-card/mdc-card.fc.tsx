import { MdcButtonFC, MdcButtonFCProps } from '@mdc-stencil/button'
import { classNames } from '@mdc-stencil/common'
import { MdcIconButtonFC, MdcIconButtonFCProps } from '@mdc-stencil/icon-button'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcCardFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  kind?: 'outlined'
}

export const MdcCardFC: FunctionalComponent<MdcCardFCProps> = (
  props,
  children
) => {
  const {
    class: className,
    kind,
    ...rest
  } = props
  return (
    <div class={{
      'mdc-card': true,
      [`mdc-card--${kind}`]: kind !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcCardPrimaryActionFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcCardPrimaryActionFC: FunctionalComponent<MdcCardPrimaryActionFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-card__primary-action': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcCardRippleFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcCardRippleFC: FunctionalComponent<MdcCardRippleFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-card__ripple': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface MdcCardMediaFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  kind?: 'square' | '16-9'
}

export const MdcCardMediaFC: FunctionalComponent<MdcCardMediaFCProps> = (
  props,
  children
) => {
  const {
    class: className,
    kind,
    ...rest
  } = props
  return (
    <div class={{
      'mdc-card__media': true,
      [`mdc-card__media--${kind}`]: kind !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcCardMediaContentFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcCardMediaContentFC: FunctionalComponent<MdcCardMediaContentFCProps> = (
  props,
  children
) => {
  const {
    class: className,
    ...rest
  } = props
  return (
    <div class={{
      'mdc-card__media-content': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcCardActionsFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  kind?: 'full-bleed'
}

export const MdcCardActionsFC: FunctionalComponent<MdcCardActionsFCProps> = (
  props,
  children
) => {
  const {
    class: className,
    kind,
    ...rest
  } = props
  return (
    <div class={{
      'mdc-card__actions': true,
      [`mdc-card__actions--${kind}`]: kind !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcCardActionButtonsFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcCardActionButtonsFC: FunctionalComponent<MdcCardActionButtonsFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-card__action-buttons': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcCardActionIconsFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcCardActionIconsFC: FunctionalComponent<MdcCardActionIconsFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-card__action-icons': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcCardActionButtonFCProps
  extends MdcButtonFCProps {
}

export const MdcCardActionButtonFC: FunctionalComponent<MdcCardActionButtonFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <MdcButtonFC class={{
      'mdc-card__action': true,
      'mdc-card__action--button': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </MdcButtonFC>
  )
}

export interface MdcCardActionIconFCProps
  extends MdcIconButtonFCProps {
}

export const MdcCardActionIconFC: FunctionalComponent<MdcCardActionIconFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <MdcIconButtonFC class={{
      'mdc-card__action': true,
      'mdc-card__action--icon': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </MdcIconButtonFC>
  )
}

export interface MdcCardContentFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcCardContentFC: FunctionalComponent<MdcCardContentFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-card__content': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}
