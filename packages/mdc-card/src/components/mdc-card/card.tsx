import { Button, ButtonProps } from '@mdc-stencil/button'
import { classNames } from '@mdc-stencil/common'
import { IconButton, IconButtonProps } from '@mdc-stencil/icon-button'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface CardProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  kind?: 'outlined'
}

export const Card: FunctionalComponent<CardProps> = (
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

export interface CardPrimaryActionProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const CardPrimaryAction: FunctionalComponent<CardPrimaryActionProps> = (
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

export interface CardRippleProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const CardRipple: FunctionalComponent<CardRippleProps> = (
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

export interface CardMediaProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  kind?: 'square' | '16-9'
}

export const CardMedia: FunctionalComponent<CardMediaProps> = (
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

export interface CardMediaContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const CardMediaContent: FunctionalComponent<CardMediaContentProps> = (
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

export interface CardActionsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  kind?: 'full-bleed'
}

export const CardActions: FunctionalComponent<CardActionsProps> = (
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

export interface CardActionButtonsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const CardActionButtons: FunctionalComponent<CardActionButtonsProps> = (
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

export interface CardActionIconsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const CardActionIcons: FunctionalComponent<CardActionIconsProps> = (
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

export interface CardActionButtonProps
  extends ButtonProps {
}

export const CardActionButton: FunctionalComponent<CardActionButtonProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <Button class={{
      'mdc-card__action': true,
      'mdc-card__action--button': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export interface CardActionIconProps
  extends IconButtonProps {
}

export const CardActionIcon: FunctionalComponent<CardActionIconProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <IconButton class={{
      'mdc-card__action': true,
      'mdc-card__action--icon': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </IconButton>
  )
}

export interface CardContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const CardContent: FunctionalComponent<CardContentProps> = (
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
