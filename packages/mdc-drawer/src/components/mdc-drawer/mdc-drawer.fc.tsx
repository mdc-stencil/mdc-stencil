import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcDrawerFCProps
  extends JSXBase.HTMLAttributes<HTMLElement> {
  kind?: 'modal' | 'dismissible'
}

export const MdcDrawerFC: FunctionalComponent<MdcDrawerFCProps> = (
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

export interface MdcDrawerScrimFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcDrawerScrimFC: FunctionalComponent<MdcDrawerScrimFCProps> = (
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

export interface MdcDrawerHeaderFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcDrawerHeaderFC: FunctionalComponent<MdcDrawerHeaderFCProps> = (
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

export interface MdcDrawerTitleFCProps
  extends JSXBase.HTMLAttributes<HTMLHeadingElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const MdcDrawerTitleFC: FunctionalComponent<MdcDrawerTitleFCProps> = (
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

export interface MdcDrawerSubtitleFCProps
  extends JSXBase.HTMLAttributes<HTMLHeadingElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const MdcDrawerSubtitleFC: FunctionalComponent<MdcDrawerSubtitleFCProps> = (
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

export interface MdcDrawerContentFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcDrawerContentFC: FunctionalComponent<MdcDrawerContentFCProps> = (
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

export interface MdcDrawerAppContentFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcDrawerAppContentFC: FunctionalComponent<MdcDrawerAppContentFCProps> = (
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
