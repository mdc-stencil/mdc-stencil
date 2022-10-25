import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

interface DeprecatedProps {
  deprecated?: boolean
}

export interface ListProps extends DeprecatedProps {
  dense?: boolean
  twoLine?: boolean
  kind?: 'textual' | 'avatar' | 'icon' | 'image' | 'thumbnail' | 'video'
}

export interface ListUlProps
  extends JSXBase.HTMLAttributes<HTMLUListElement>,
  ListProps {
  tag?: 'ul'
}

export interface ListOlProps
  extends JSXBase.OlHTMLAttributes<HTMLOListElement>,
  ListProps {
  tag: 'ol'
}

export interface ListNavProps
  extends JSXBase.HTMLAttributes<HTMLElement>,
  ListProps {
  tag: 'nav'
}

export const List: FunctionalComponent<
ListUlProps | ListOlProps | ListNavProps
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

export interface ListItemProps extends DeprecatedProps {
  activated?: boolean
  disabled?: boolean
  selected?: boolean
}

export interface ListItemLiProps
  extends JSXBase.LiHTMLAttributes<HTMLLIElement>,
  ListItemProps {
  tag?: 'li'
}

export interface ListItemAnchorProps
  extends JSXBase.AnchorHTMLAttributes<HTMLAnchorElement>,
  ListItemProps {
  tag: 'a'
}

export const ListItem: FunctionalComponent<
ListItemLiProps | ListItemAnchorProps
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

export interface ListItemRippleProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement>,
  DeprecatedProps {}

export const ListItemRipple: FunctionalComponent<ListItemRippleProps> = (
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

export interface ListItemTextProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement>,
  DeprecatedProps {}

export const ListItemText: FunctionalComponent<ListItemTextProps> = (
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

export interface ListItemGraphicProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement>,
  DeprecatedProps {}

export const ListItemGraphic: FunctionalComponent<
ListItemGraphicProps
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

export interface ListItemMetaProps
  extends JSXBase.HTMLAttributes<HTMLSpanElement>,
  DeprecatedProps {}

export const ListItemMeta: FunctionalComponent<ListItemMetaProps> = (
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
