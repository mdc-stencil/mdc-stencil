import { classNames } from '@mdc-stencil/common'
import { Menu, MenuProps } from '@mdc-stencil/menu'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface SelectProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  filled?: boolean
  required?: boolean
  disabled?: boolean
  noLabel?: boolean
  withLeadingIcon?: boolean
  kind?: 'outlined'
}

export const Select: FunctionalComponent<SelectProps> = (
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

export interface SelectAnchorProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const SelectAnchor: FunctionalComponent<SelectAnchorProps> = (
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

export interface SelectRippleProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const SelectRipple: FunctionalComponent<SelectRippleProps> = (
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

export interface SelectSelectedTextContainerProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const SelectSelectedTextContainer: FunctionalComponent<SelectSelectedTextContainerProps> = (
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

export interface SelectSelectedTextProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const SelectSelectedText: FunctionalComponent<SelectSelectedTextProps> = (
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

export interface SelectDropdownIconProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const SelectDropdownIcon: FunctionalComponent<SelectDropdownIconProps> = (
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

export interface SelectDropdownIconGraphicProps
  extends JSXBase.SVGAttributes<SVGElement> {
}

export const SelectDropdownIconGraphic: FunctionalComponent<SelectDropdownIconGraphicProps> = (
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
      <SelectDropdownIconInactive />
      <SelectDropdownIconActive />
      {children}
    </svg>
  )
}

interface SelectDropdownIconInactiveProps
  extends JSXBase.SVGAttributes<SVGPolygonElement> {
}

const SelectDropdownIconInactive: FunctionalComponent<SelectDropdownIconInactiveProps> = (
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

interface SelectDropdownIconActiveProps
  extends JSXBase.SVGAttributes<SVGPolygonElement> {
}

const SelectDropdownIconActive: FunctionalComponent<SelectDropdownIconActiveProps> = (
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

export interface SelectMenuProps
  extends MenuProps {
}

export const SelectMenu: FunctionalComponent<SelectMenuProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <Menu
      class={{
        'mdc-select__menu': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </Menu>
  )
}
