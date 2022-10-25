import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface TopAppBarProps
  extends JSXBase.HTMLAttributes<HTMLElement> {
}

export const TopAppBar: FunctionalComponent<TopAppBarProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = {
    ...props
  }
  return (
    <header class={{
      'mdc-top-app-bar': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </header>
  )
}

export interface TopAppBarRowProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const TopAppBarRow: FunctionalComponent<TopAppBarRowProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = {
    ...props
  }
  return (
    <div class={{
      'mdc-top-app-bar__row': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface TopAppBarSectionProps
  extends JSXBase.HTMLAttributes<HTMLElement> {
  align?: 'start' | 'end'
}

export const TopAppBarSection: FunctionalComponent<TopAppBarSectionProps> = (
  props,
  children
) => {
  const { class: className, align, ...rest } = {
    ...props
  }
  return (
    <section class={{
      'mdc-top-app-bar__section': true,
      [`mdc-top-app-bar__section--align-${align}`]: align !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </section>
  )
}

export interface TopAppBarTitleProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const TopAppBarTitle: FunctionalComponent<TopAppBarTitleProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = {
    ...props
  }
  return (
    <span class={{
      'mdc-top-app-bar__title': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}
