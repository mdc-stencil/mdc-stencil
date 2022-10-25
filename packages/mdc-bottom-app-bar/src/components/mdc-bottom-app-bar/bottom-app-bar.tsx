import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface BottomAppBarProps
  extends JSXBase.HTMLAttributes<HTMLElement> {
}

export const BottomAppBar: FunctionalComponent<BottomAppBarProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <footer class={{
      'mdc-bottom-app-bar': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </footer>
  )
}

export interface BottomAppBarRowProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const BottomAppBarRow: FunctionalComponent<BottomAppBarRowProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-bottom-app-bar__row': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface BottomAppBarSectionProps
  extends JSXBase.HTMLAttributes<HTMLElement> {
  align?: 'start' | 'end'
}

export const BottomAppBarSection: FunctionalComponent<BottomAppBarSectionProps> = (
  props,
  children
) => {
  const { class: className, align, ...rest } = props
  return (
    <section class={{
      'mdc-bottom-app-bar__section': true,
      [`mdc-bottom-app-bar__section--align-${align}`]: align !== undefined,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </section>
  )
}
