import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface LayoutGridProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const LayoutGrid: FunctionalComponent<LayoutGridProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-layout-grid': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface LayoutGridInnerProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const LayoutGridInner: FunctionalComponent<LayoutGridInnerProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-layout-grid__inner': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface LayoutGridCellProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  span?: number
  spanDesktop?: number
  spanTablet?: number
  spanPhone?: number
  align?: 'top' | 'middle' | 'bottom'
}

export const LayoutGridCell: FunctionalComponent<LayoutGridCellProps> = (
  props,
  children
) => {
  const {
    class: className,
    align,
    span = 0,
    spanDesktop = 0,
    spanTablet = 0,
    spanPhone = 0,
    ...rest
  } = props
  return (
    <div
      class={{
        'mdc-layout-grid__cell': true,
        [`mdc-layout-grid__cell--span-${span}`]: span > 0,
        [`mdc-layout-grid__cell--span-${spanDesktop}-desktop`]: spanDesktop > 0,
        [`mdc-layout-grid__cell--span-${spanTablet}-tablet`]: spanTablet > 0,
        [`mdc-layout-grid__cell--span-${spanPhone}-phone`]: spanPhone > 0,
        [`mdc-layout-grid__cell--align-${align}`]: align !== undefined,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
