import { classNames } from '@mdc-stencil/common'
import { MdcMenuFC, MdcMenuFCProps } from '@mdc-stencil/menu'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcSelectFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  filled?: boolean
  required?: boolean
  disabled?: boolean
  noLabel?: boolean
  withLeadingIcon?: boolean
  kind?: 'outlined'
}

export const MdcSelectFC: FunctionalComponent<MdcSelectFCProps> = (
  props,
  children
) => {
  const { class: className, filled, required, disabled, noLabel, withLeadingIcon, kind, ...rest } = props
  return (
    <div
      class={{
        'mdc-select': true,
        'mdc-select--filled': filled === true,
        'mdc-select--required': required === true,
        'mdc-select--disabled': disabled === true,
        'mdc-select--no-label': noLabel === true,
        'mdc-select--with-leading-icon': withLeadingIcon === true,
        [`mdc-select--${kind}`]: kind !== undefined,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcSelectAnchorFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcSelectAnchorFC: FunctionalComponent<MdcSelectAnchorFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div
      class={{
        'mdc-select__anchor': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface MdcSelectRippleFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcSelectRippleFC: FunctionalComponent<MdcSelectRippleFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span
      class={{
        'mdc-select__ripple': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface MdcSelectSelectedTextContainerFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcSelectSelectedTextContainerFC: FunctionalComponent<MdcSelectSelectedTextContainerFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span
      class={{
        'mdc-select__selected-text-container': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface MdcSelectSelectedTextFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcSelectSelectedTextFC: FunctionalComponent<MdcSelectSelectedTextFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span
      class={{
        'mdc-select__selected-text': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface MdcSelectDropdownIconFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const MdcSelectDropdownIconFC: FunctionalComponent<MdcSelectDropdownIconFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span
      class={{
        'mdc-select__dropdown-icon': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface MdcSelectDropdownIconGraphicFCProps
  extends JSXBase.SVGAttributes<SVGElement> {
}

export const MdcSelectDropdownIconGraphicFC: FunctionalComponent<MdcSelectDropdownIconGraphicFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={{
        'mdc-select__dropdown-icon-graphic': true,
        ...classNames(className)
      }}
      viewBox='7 10 10 5'
      focusable='false'
      {...rest}
    >
      <MdcSelectDropdownIconInactiveFC />
      <MdcSelectDropdownIconActiveFC />
      {children}
    </svg>
  )
}

interface MdcSelectDropdownIconInactiveFCProps
  extends JSXBase.SVGAttributes<SVGPolygonElement> {
}

const MdcSelectDropdownIconInactiveFC: FunctionalComponent<MdcSelectDropdownIconInactiveFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <polygon
      class={{
        'mdc-select__dropdown-icon-inactive': true,
        ...classNames(className)
      }}
      stroke='none'
      fill-rule='evenodd'
      points='7 10 12 15 17 10'
      {...rest}
    >
      {children}
    </polygon>
  )
}

interface MdcSelectDropdownIconActiveFCProps
  extends JSXBase.SVGAttributes<SVGPolygonElement> {
}

const MdcSelectDropdownIconActiveFC: FunctionalComponent<MdcSelectDropdownIconActiveFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <polygon
      class={{
        'mdc-select__dropdown-icon-active': true,
        ...classNames(className)
      }}
      stroke='none'
      fill-rule='evenodd'
      points='7 15 12 10 17 15'
      {...rest}
    >
      {children}
    </polygon>
  )
}

export interface MdcSelectMenuFCProps
  extends MdcMenuFCProps {
}

export const MdcSelectMenuFC: FunctionalComponent<MdcSelectMenuFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <MdcMenuFC
      class={{
        'mdc-select__menu': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcMenuFC>
  )
}
