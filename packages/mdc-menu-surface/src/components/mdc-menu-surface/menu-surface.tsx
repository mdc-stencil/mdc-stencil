import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MenuSurfaceProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  kind?: 'fixed' | 'fullwidth'
}

export const MenuSurface: FunctionalComponent<MenuSurfaceProps> = (
  props,
  children
) => {
  const { class: className, kind, ...rest } = props
  return (
    <div
      class={{
        'mdc-menu-surface': true,
        [`mdc-menu-surface--${kind}`]: kind !== undefined,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MenuSurfaceAnchorProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MenuSurfaceAnchor: FunctionalComponent<MenuSurfaceAnchorProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-menu-surface--anchor': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
