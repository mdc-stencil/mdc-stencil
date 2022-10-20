import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcMenuSurfaceFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  kind?: 'fixed' | 'fullwidth'
}

export const MdcMenuSurfaceFC: FunctionalComponent<MdcMenuSurfaceFCProps> = (
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

export interface MdcMenuSurfaceAnchorFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcMenuSurfaceAnchorFC: FunctionalComponent<MdcMenuSurfaceAnchorFCProps> = (
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
