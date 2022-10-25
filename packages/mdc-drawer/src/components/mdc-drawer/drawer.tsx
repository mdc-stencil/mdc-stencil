import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface DrawerProps
  extends JSXBase.HTMLAttributes<HTMLElement> {
  kind?: 'modal' | 'dismissible'
}

export const Drawer: FunctionalComponent<DrawerProps> = (
  props,
  children
) => {
  const { class: className, kind, ...rest } = props
  return (
    <aside class={{
      'mdc-drawer': true,
      [`mdc-drawer--${kind}`]: kind !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </aside>
  )
}

export interface DrawerScrimProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const DrawerScrim: FunctionalComponent<DrawerScrimProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-drawer-scrim': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface DrawerHeaderProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const DrawerHeader: FunctionalComponent<DrawerHeaderProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-drawer__header': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface DrawerTitleProps
  extends JSXBase.HTMLAttributes<HTMLHeadingElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const DrawerTitle: FunctionalComponent<DrawerTitleProps> = (
  props,
  children
) => {
  const { class: className, tag: Tag = 'h3', ...rest } = props
  return (
    <Tag class={{
      'mdc-drawer__title': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export interface DrawerSubtitleProps
  extends JSXBase.HTMLAttributes<HTMLHeadingElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const DrawerSubtitle: FunctionalComponent<DrawerSubtitleProps> = (
  props,
  children
) => {
  const { class: className, tag: Tag = 'h6', ...rest } = props
  return (
    <Tag class={{
      'mdc-drawer__subtitle': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export interface DrawerContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const DrawerContent: FunctionalComponent<DrawerContentProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-drawer__content': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface DrawerAppContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const DrawerAppContent: FunctionalComponent<DrawerAppContentProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-drawer-app-content': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}
