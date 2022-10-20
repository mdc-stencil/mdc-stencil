import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcLayoutGridFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcLayoutGridFC: FunctionalComponent<MdcLayoutGridFCProps> = (
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

export interface MdcLayoutGridInnerFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcLayoutGridInnerFC: FunctionalComponent<MdcLayoutGridInnerFCProps> = (
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

export interface MdcLayoutGridCellFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  span?: number
  spanDesktop?: number
  spanTablet?: number
  spanPhone?: number
  align?: 'top' | 'middle' | 'bottom'
}

export const MdcLayoutGridCellFC: FunctionalComponent<MdcLayoutGridCellFCProps> = (
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
