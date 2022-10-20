import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'
import { MdcMenuSurfaceFC, MdcMenuSurfaceFCProps } from '@mdc-stencil/menu-surface'

export interface MdcMenuFCProps
  extends MdcMenuSurfaceFCProps {
}

export const MdcMenuFC: FunctionalComponent<MdcMenuFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <MdcMenuSurfaceFC
      class={{
        'mdc-menu': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcMenuSurfaceFC>
  )
}

export interface MdcMenuSelectionGroupFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcMenuSelectionGroupFC: FunctionalComponent<MdcMenuSelectionGroupFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <MdcMenuSurfaceFC
      class={{
        'mdc-menu__selection-group': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcMenuSurfaceFC>
  )
}
