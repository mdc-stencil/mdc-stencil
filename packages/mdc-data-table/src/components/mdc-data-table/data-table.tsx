import { Checkbox, CheckboxProps } from '@mdc-stencil/checkbox'
import { classNames } from '@mdc-stencil/common'
import {
  IconButton,
  IconButtonProps
} from '@mdc-stencil/icon-button'
import {
  LinearProgress,
  LinearProgressProps
} from '@mdc-stencil/linear-progress'
import { Select, SelectProps } from '@mdc-stencil/select'
import { FunctionalComponent, h } from '@stencil/core'
import { JSXBase } from '@stencil/core/internal'

export interface DataTableProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  'sticky-header'?: boolean
}

export const DataTable: FunctionalComponent<DataTableProps> = (
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

export interface DataTableTableContainerProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTableTableContainer: FunctionalComponent<
DataTableTableContainerProps
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

export interface DataTableTableProps
  extends JSXBase.TableHTMLAttributes<HTMLTableElement> {}

export const DataTableTable: FunctionalComponent<DataTableTableProps> = (
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

export interface DataTableHeaderRowProps
  extends JSXBase.HTMLAttributes<HTMLTableRowElement> {}

export const DataTableHeaderRow: FunctionalComponent<
DataTableHeaderRowProps
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

export interface DataTableHeaderCellProps
  extends JSXBase.ThHTMLAttributes<HTMLTableCellElement> {
  checkbox?: boolean
  numeric?: boolean
  sorted?: 'ascending' | 'descending'
  'with-sort'?: boolean
}

export const DataTableHeaderCell: FunctionalComponent<
DataTableHeaderCellProps
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

export interface DataTableHeaderCellWrapperProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTableHeaderCellWrapper: FunctionalComponent<
DataTableHeaderCellWrapperProps
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

export interface DataTableHeaderCellLabelProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTableHeaderCellLabel: FunctionalComponent<
DataTableHeaderCellLabelProps
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

export interface DataTableHeaderRowCheckboxProps extends CheckboxProps {}

export const DataTableHeaderRowCheckbox: FunctionalComponent<
DataTableHeaderRowCheckboxProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <Checkbox
      class={{
        'mdc-data-table__header-row-checkbox': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </Checkbox>
  )
}

export interface DataTableContentProps
  extends JSXBase.HTMLAttributes<HTMLElement> {}

export const DataTableContent: FunctionalComponent<
DataTableContentProps
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

export interface DataTableRowProps
  extends JSXBase.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean
}

export const DataTableRow: FunctionalComponent<DataTableRowProps> = (
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

export interface DataTableRowCheckboxProps extends CheckboxProps {}

export const DataTableRowCheckbox: FunctionalComponent<
DataTableRowCheckboxProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <Checkbox
      class={{
        'mdc-data-table__row-checkbox': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </Checkbox>
  )
}

export interface DataTableCellProps {
  checkbox?: boolean
  numeric?: boolean
}

export interface DataTableCellTdProps
  extends JSXBase.TdHTMLAttributes<HTMLTableCellElement>,
  DataTableCellProps {
  tag?: 'td'
}

export interface DataTableCellThProps
  extends JSXBase.ThHTMLAttributes<HTMLTableCellElement>,
  DataTableCellProps {
  tag: 'th'
}

export const DataTableCell: FunctionalComponent<
DataTableCellTdProps | DataTableCellThProps
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

export interface DataTableSortIconButtonProps extends IconButtonProps {}

export const DataTableSortIconButton: FunctionalComponent<
DataTableSortIconButtonProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <IconButton
      class={{
        'mdc-data-table__sort-icon-button': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </IconButton>
  )
}

export interface DataTableSortStatusProps
  extends JSXBase.HTMLAttributes<HTMLElement> {}

export const DataTableSortStatus: FunctionalComponent<
DataTableSortStatusProps
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

export interface DataTablePaginationProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTablePagination: FunctionalComponent<
DataTablePaginationProps
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

export interface DataTablePaginationTrailingProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTablePaginationTrailing: FunctionalComponent<
DataTablePaginationTrailingProps
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

export interface DataTablePaginationRowsPerPageProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTablePaginationRowsPerPage: FunctionalComponent<
DataTablePaginationRowsPerPageProps
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

export interface DataTablePaginationRowsPerPageLabelProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTablePaginationRowsPerPageLabel: FunctionalComponent<
DataTablePaginationRowsPerPageLabelProps
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

export interface DataTablePaginationRowsPerPageSelectProps
  extends SelectProps {}

export const DataTablePaginationRowsPerPageSelect: FunctionalComponent<
DataTablePaginationRowsPerPageSelectProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <Select
      class={{
        'mdc-data-table__pagination-rows-per-page-select': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </Select>
  )
}

export interface DataTablePaginationNavigationProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTablePaginationNavigation: FunctionalComponent<
DataTablePaginationNavigationProps
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

export interface DataTablePaginationTotalProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTablePaginationTotal: FunctionalComponent<
DataTablePaginationTotalProps
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

export interface DataTablePaginationButtonProps extends IconButtonProps {}

export const DataTablePaginationButton: FunctionalComponent<
DataTablePaginationButtonProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <IconButton
      class={{
        'mdc-data-table__pagination-button': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </IconButton>
  )
}

export interface DataTableProgressIndicatorProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTableProgressIndicator: FunctionalComponent<
DataTableProgressIndicatorProps
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

export interface DataTableScrimProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DataTableScrim: FunctionalComponent<DataTableScrimProps> = (
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

export interface DataTableLinearProgressProps
  extends LinearProgressProps {}

export const DataTableLinearProgress: FunctionalComponent<
DataTableLinearProgressProps
> = (props, children) => {
  const { class: className, ...rest } = props
  return (
    <LinearProgress
      class={{
        'mdc-data-table__linear-progress': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </LinearProgress>
  )
}
