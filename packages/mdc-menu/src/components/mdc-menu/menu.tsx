import { classNames } from '@mdc-stencil/common'
import { MenuSurface, MenuSurfaceProps } from '@mdc-stencil/menu-surface'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MenuProps
  extends MenuSurfaceProps {
}

export const Menu: FunctionalComponent<MenuProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <MenuSurface
      class={{
        'mdc-menu': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MenuSurface>
  )
}

export interface MenuSelectionGroupProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MenuSelectionGroup: FunctionalComponent<MenuSelectionGroupProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <MenuSurface
      class={{
        'mdc-menu__selection-group': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MenuSurface>
  )
}
