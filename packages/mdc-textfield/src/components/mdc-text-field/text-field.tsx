import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface TextFieldProps
  extends JSXBase.LabelHTMLAttributes<HTMLLabelElement> {
  kind?: 'filled' | 'outlined'
  textarea?: boolean
  disabled?: boolean
  'icon-leading'?: boolean
  'icon-trailing'?: boolean
  focused?: boolean
  'no-label'?: boolean
  'end-aligned'?: boolean
  'label-floating'?: boolean
  'ltr-text'?: boolean
  'internal-counter'?: boolean
}

export const TextField: FunctionalComponent<TextFieldProps> = (
  props,
  children
) => {
  const {
    class: className,
    kind,
    textarea,
    disabled,
    'icon-leading': iconLeading,
    'icon-trailing': iconTrailing,
    focused,
    'no-label': noLabel,
    'end-aligned': endAligned,
    'label-floating': labelFloating,
    'ltr-text': ltrText,
    'internal-counter': internalCounter,
    ...rest
  } = props
  return (
    <label class={{
      'mdc-text-field': true,
      [`mdc-text-field--${kind}`]: kind !== undefined,
      'mdc-text-field--textarea': textarea === true,
      'mdc-text-field--disabled': disabled === true,
      'mdc-text-field--with-leading-icon': iconLeading === true,
      'mdc-text-field--with-trailing-icon': iconTrailing === true,
      'mdc-text-field--focused': focused === true,
      'mdc-text-field--no-label': noLabel === true,
      'mdc-text-field--end-aligned': endAligned === true,
      'mdc-text-field--label-floating': labelFloating === true,
      'mdc-text-field--ltr-text': ltrText === true,
      'mdc-text-field--with-internal-counter': internalCounter === true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </label>
  )
}

export interface TextFieldRippleProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const TextFieldRipple: FunctionalComponent<TextFieldRippleProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-text-field__ripple': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface TextFieldInputProps
  extends JSXBase.InputHTMLAttributes<HTMLInputElement> {
}

export const TextFieldInput: FunctionalComponent<TextFieldInputProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <input class={{
      'mdc-text-field__input': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </input>
  )
}

export interface TextFieldHelperLineProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const TextFieldHelperLine: FunctionalComponent<TextFieldHelperLineProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-text-field-helper-line': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface TextFieldHelperTextProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const TextFieldHelperText: FunctionalComponent<TextFieldHelperTextProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <div class={{
      'mdc-text-field-helper-text': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}

export interface TextFieldResizerProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {
}

export const TextFieldResizer: FunctionalComponent<TextFieldResizerProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
    <span class={{
      'mdc-text-field__resizer': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </span>
  )
}
