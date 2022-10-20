import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcDeprecatedListFCProps {
  deprecated?: boolean
}

export interface MdcListFCProps extends MdcDeprecatedListFCProps {
  dense?: boolean
  twoLine?: boolean
  kind?: 'textual' | 'avatar' | 'icon' | 'image' | 'thumbnail' | 'video'
}

export interface MdcListUlFCProps
  extends JSXBase.HTMLAttributes<HTMLUListElement>,
  MdcListFCProps {
  tag?: 'ul'
}

export interface MdcListOlFCProps
  extends JSXBase.OlHTMLAttributes<HTMLOListElement>,
  MdcListFCProps {
  tag: 'ol'
}

export interface MdcListNavFCProps
  extends JSXBase.HTMLAttributes<HTMLElement>,
  MdcListFCProps {
  tag: 'nav'
}

export const MdcListFC: FunctionalComponent<
MdcListUlFCProps | MdcListOlFCProps | MdcListNavFCProps
> = (props, children) => {
  const {
    tag: Tag = 'ul',
    class: className,
    dense,
    twoLine,
    kind,
    deprecated,
    ...rest
  } = props
  const prefix = deprecated === true ? 'mdc-deprecated-list' : 'mdc-list'
  return (
    <Tag
      class={{
        [prefix]: true,
        [`${prefix}--dense`]: dense === true,
        [`${prefix}--two-line`]: twoLine === true,
        [`${prefix}--${kind}-list`]: kind !== undefined,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export interface MdcListItemFCProps extends MdcDeprecatedListFCProps {
  activated?: boolean
  disabled?: boolean
  selected?: boolean
}

export interface MdcListItemLiFCProps
  extends JSXBase.LiHTMLAttributes<HTMLLIElement>,
  MdcListItemFCProps {
  tag?: 'li'
}

export interface MdcListItemAnchorFCProps
  extends JSXBase.AnchorHTMLAttributes<HTMLAnchorElement>,
  MdcListItemFCProps {
  tag: 'a'
}

export const MdcListItemFC: FunctionalComponent<
MdcListItemLiFCProps | MdcListItemAnchorFCProps
> = (props, children) => {
  const {
    tag: Tag = 'li',
    class: className,
    activated,
    disabled,
    selected,
    deprecated,
    ref,
    ...rest
  } = props
  const prefix = deprecated === true ? 'mdc-deprecated-list' : 'mdc-list'
  return (
    <Tag
      class={{
        [`${prefix}-item`]: true,
        [`${prefix}-item--activated`]: activated === true,
        [`${prefix}-item--disabled`]: disabled === true,
        [`${prefix}-item--selected`]: selected === true,
        ...classNames(className)
      }}
      ref={ref as any}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export interface MdcListItemRippleFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement>,
  MdcDeprecatedListFCProps {}

export const MdcListItemRippleFC: FunctionalComponent<MdcListItemRippleFCProps> = (
  props,
  children
) => {
  const { class: className, deprecated, ...rest } = props
  const prefix = deprecated === true ? 'mdc-deprecated-list' : 'mdc-list'
  return (
    <span
      class={{
        [`${prefix}-item__ripple`]: true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface MdcListItemTextFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement>,
  MdcDeprecatedListFCProps {}

export const MdcListItemTextFC: FunctionalComponent<MdcListItemTextFCProps> = (
  props,
  children
) => {
  const { class: className, deprecated, ...rest } = props
  const prefix = deprecated === true ? 'mdc-deprecated-list' : 'mdc-list'
  return (
    <span
      class={{
        [`${prefix}-item__text`]: true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface MdcListItemGraphicFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement>,
  MdcDeprecatedListFCProps {}

export const MdcListItemGraphicFC: FunctionalComponent<
MdcListItemGraphicFCProps
> = (props, children) => {
  const { class: className, deprecated, ...rest } = props
  const prefix = deprecated === true ? 'mdc-deprecated-list' : 'mdc-list'
  return (
    <span
      class={{
        [`${prefix}-item__graphic`]: true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

export interface MdcListItemMetaFCProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement>,
  MdcDeprecatedListFCProps {}

export const MdcListItemMetaFC: FunctionalComponent<MdcListItemMetaFCProps> = (
  props,
  children
) => {
  const { class: className, deprecated, ...rest } = props
  const prefix = deprecated === true ? 'mdc-deprecated-list' : 'mdc-list'
  return (
    <span
      class={{
        [`${prefix}-item__meta`]: true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </span>
  )
}
