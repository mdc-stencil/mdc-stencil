import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcTopAppBarFCProps
  extends JSXBase.HTMLAttributes<HTMLElement> {
}

export const MdcTopAppBarFC: FunctionalComponent<MdcTopAppBarFCProps> = (
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

export interface MdcTopAppBarRowFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcTopAppBarRowFC: FunctionalComponent<MdcTopAppBarRowFCProps> = (
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

export interface MdcTopAppBarSectionFCProps
  extends JSXBase.HTMLAttributes<HTMLElement> {
  align?: 'start' | 'end'
}

export const MdcTopAppBarSectionFC: FunctionalComponent<MdcTopAppBarSectionFCProps> = (
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

export interface MdcTopAppBarTitleFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcTopAppBarTitleFC: FunctionalComponent<MdcTopAppBarTitleFCProps> = (
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
