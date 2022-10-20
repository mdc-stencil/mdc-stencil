import { MdcCheckboxFC, MdcCheckboxFCProps } from '@mdc-stencil/checkbox'
import { classNames } from '@mdc-stencil/common'
import {
  MdcIconButtonFC,
  MdcIconButtonFCProps
} from '@mdc-stencil/icon-button'
import {
  MdcLinearProgressFC,
  MdcLinearProgressFCProps
} from '@mdc-stencil/linear-progress'
import { MdcSelectFC, MdcSelectFCProps } from '@mdc-stencil/select'
import { FunctionalComponent, h } from '@stencil/core'
import { JSXBase } from '@stencil/core/internal'

export interface MdcDataTableFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  'sticky-header'?: boolean
}

export const MdcDataTableFC: FunctionalComponent<MdcDataTableFCProps> = (
  props,
  children
) => {
  const { class: className, 'sticky-header': stickyHeader, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table': true,
        'mdc-data-table--sticky-header': stickyHeader === true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTableTableContainerFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTableTableContainerFC: FunctionalComponent<
MdcDataTableTableContainerFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__table-container': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTableTableFCProps
  extends JSXBase.TableHTMLAttributes<HTMLTableElement> {}

export const MdcDataTableTableFC: FunctionalComponent<MdcDataTableTableFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <table
      class={{
        'mdc-data-table__table': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </table>
  )
}

export interface MdcDataTableHeaderRowFCProps
  extends JSXBase.HTMLAttributes<HTMLTableRowElement> {}

export const MdcDataTableHeaderRowFC: FunctionalComponent<
MdcDataTableHeaderRowFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <tr
      class={{
        'mdc-data-table__header-row': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </tr>
  )
}

export interface MdcDataTableHeaderCellFCProps
  extends JSXBase.ThHTMLAttributes<HTMLTableCellElement> {
  checkbox?: boolean
  numeric?: boolean
  sorted?: 'ascending' | 'descending'
  'with-sort'?: boolean
}

export const MdcDataTableHeaderCellFC: FunctionalComponent<
MdcDataTableHeaderCellFCProps
> = (props, children) => {
  const {
    class: className,
    checkbox,
    numeric,
    sorted,
    'with-sort': withSort,
    ...rest
  } = props
  return (
    <th
      class={{
        'mdc-data-table__header-cell': true,
        'mdc-data-table__header-cell--checkbox': checkbox === true,
        'mdc-data-table__header-cell--numeric': numeric === true,
        'mdc-data-table__header-cell--sorted': sorted !== undefined,
        'mdc-data-table__header-cell--sorted-descending':
          sorted === 'descending',
        'mdc-data-table__header-cell--with-sort': withSort === true,
        ...classNames(className)
      }}
      role='columnheader'
      scope='col'
      {...(withSort === true && {
        'aria-sort': sorted === undefined ? 'none' : sorted
      })}
      {...rest}
    >
      {children}
    </th>
  )
}

export interface MdcDataTableHeaderCellWrapperFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTableHeaderCellWrapperFC: FunctionalComponent<
MdcDataTableHeaderCellWrapperFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <th
      class={{
        'mdc-data-table__header-cell-wrapper': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </th>
  )
}

export interface MdcDataTableHeaderCellLabelFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTableHeaderCellLabelFC: FunctionalComponent<
MdcDataTableHeaderCellLabelFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <th
      class={{
        'mdc-data-table__header-cell-label': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </th>
  )
}

export interface MdcDataTableHeaderRowCheckboxFCProps extends MdcCheckboxFCProps {}

export const MdcDataTableHeaderRowCheckboxFC: FunctionalComponent<
MdcDataTableHeaderRowCheckboxFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <MdcCheckboxFC
      class={{
        'mdc-data-table__header-row-checkbox': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcCheckboxFC>
  )
}

export interface MdcDataTableContentFCProps
  extends JSXBase.HTMLAttributes<HTMLElement> {}

export const MdcDataTableContentFC: FunctionalComponent<
MdcDataTableContentFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <tbody
      class={{
        'mdc-data-table__content': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </tbody>
  )
}

export interface MdcDataTableRowFCProps
  extends JSXBase.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean
}

export const MdcDataTableRowFC: FunctionalComponent<MdcDataTableRowFCProps> = (
  props,
  children
) => {
  const { class: className, selected, ...rest } = props
  return (
    <tr
      class={{
        'mdc-data-table__row': true,
        'mdc-data-table__row--selected': selected === true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </tr>
  )
}

export interface MdcDataTableRowCheckboxFCProps extends MdcCheckboxFCProps {}

export const MdcDataTableRowCheckboxFC: FunctionalComponent<
MdcDataTableRowCheckboxFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <MdcCheckboxFC
      class={{
        'mdc-data-table__row-checkbox': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcCheckboxFC>
  )
}

export interface MdcDataTableCellFCProps {
  checkbox?: boolean
  numeric?: boolean
}

export interface MdcDataTableCellTdFCProps
  extends JSXBase.TdHTMLAttributes<HTMLTableCellElement>,
  MdcDataTableCellFCProps {
  tag?: 'td'
}

export interface MdcDataTableCellThFCProps
  extends JSXBase.ThHTMLAttributes<HTMLTableCellElement>,
  MdcDataTableCellFCProps {
  tag: 'th'
}

export const MdcDataTableCellFC: FunctionalComponent<
MdcDataTableCellTdFCProps | MdcDataTableCellThFCProps
> = (props, children) => {
  const {
    tag: Tag = 'td',
    class: className,
    checkbox,
    numeric,
    ...rest
  } = props
  return (
    <Tag
      class={{
        'mdc-data-table__cell': true,
        'mdc-data-table__cell--checkbox': checkbox === true,
        'mdc-data-table__cell--numeric': numeric === true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export interface MdcDataTableSortIconButtonFCProps extends MdcIconButtonFCProps {}

export const MdcDataTableSortIconButtonFC: FunctionalComponent<
MdcDataTableSortIconButtonFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <MdcIconButtonFC
      class={{
        'mdc-data-table__sort-icon-button': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcIconButtonFC>
  )
}

export interface MdcDataTableSortStatusFCProps
  extends JSXBase.HTMLAttributes<HTMLElement> {}

export const MdcDataTableSortStatusFC: FunctionalComponent<
MdcDataTableSortStatusFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__sort-status-label': true,
        ...classNames(className)
      }}
      aria-hidden='true'
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTablePaginationFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTablePaginationFC: FunctionalComponent<
MdcDataTablePaginationFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__pagination': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTablePaginationTrailingFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTablePaginationTrailingFC: FunctionalComponent<
MdcDataTablePaginationTrailingFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__pagination-trailing': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTablePaginationRowsPerPageFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTablePaginationRowsPerPageFC: FunctionalComponent<
MdcDataTablePaginationRowsPerPageFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__pagination-rows-per-page': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTablePaginationRowsPerPageLabelFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTablePaginationRowsPerPageLabelFC: FunctionalComponent<
MdcDataTablePaginationRowsPerPageLabelFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__pagination-rows-per-page-label': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTablePaginationRowsPerPageSelectFCProps
  extends MdcSelectFCProps {}

export const MdcDataTablePaginationRowsPerPageSelectFC: FunctionalComponent<
MdcDataTablePaginationRowsPerPageSelectFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <MdcSelectFC
      class={{
        'mdc-data-table__pagination-rows-per-page-select': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcSelectFC>
  )
}

export interface MdcDataTablePaginationNavigationFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTablePaginationNavigationFC: FunctionalComponent<
MdcDataTablePaginationNavigationFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__pagination-navigation': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTablePaginationTotalFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTablePaginationTotalFC: FunctionalComponent<
MdcDataTablePaginationTotalFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__pagination-total': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTablePaginationButtonFCProps extends MdcIconButtonFCProps {}

export const MdcDataTablePaginationButtonFC: FunctionalComponent<
MdcDataTablePaginationButtonFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <MdcIconButtonFC
      class={{
        'mdc-data-table__pagination-button': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcIconButtonFC>
  )
}

export interface MdcDataTableProgressIndicatorFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTableProgressIndicatorFC: FunctionalComponent<
MdcDataTableProgressIndicatorFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__progress-indicator': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTableScrimFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDataTableScrimFC: FunctionalComponent<MdcDataTableScrimFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-data-table__scrim': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcDataTableLinearProgressFCProps
  extends MdcLinearProgressFCProps {}

export const MdcDataTableLinearProgressFC: FunctionalComponent<
MdcDataTableLinearProgressFCProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <MdcLinearProgressFC
      class={{
        'mdc-data-table__linear-progress': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcLinearProgressFC>
  )
}
