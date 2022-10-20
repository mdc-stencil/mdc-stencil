import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcDialogFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  fullscreen?: boolean
}

export const MdcDialogFC: FunctionalComponent<MdcDialogFCProps> = (
  props,
  children
) => {
  const { class: className, open, fullscreen, ...rest } = props
  return (
      <div class={{
        'mdc-dialog': true,
        'mdc-dialog--open': open === true,
        'mdc-dialog--fullscreen': fullscreen === true,
        ...classNames(className)
      }}
        {...rest}
      >
        <MdcDialogContainerFC>
          <MdcDialogSurfaceFC>
          {children}
          </MdcDialogSurfaceFC>
        </MdcDialogContainerFC>
        <MdcDialogScrimFC />
      </div>
  )
}

export interface MdcDialogScrimFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDialogScrimFC: FunctionalComponent<MdcDialogScrimFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
      <div class={{
        'mdc-dialog__scrim': true,
        ...classNames(className)
      }}
        {...rest}
      >
        {children}
      </div>
  )
}

export interface MdcDialogContainerFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDialogContainerFC: FunctionalComponent<MdcDialogContainerFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
      <div class={{
        'mdc-dialog__container': true,
        ...classNames(className)
      }}
        {...rest}
      >
        {children}
      </div>
  )
}

export interface MdcDialogSurfaceFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDialogSurfaceFC: FunctionalComponent<MdcDialogSurfaceFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
      <div class={{
        'mdc-dialog__surface': true,
        ...classNames(className)
      }}
        {...rest}
      >
        {children}
      </div>
  )
}

export interface MdcDialogContentFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDialogContentFC: FunctionalComponent<MdcDialogContentFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
      <div class={{
        'mdc-dialog__content': true,
        ...classNames(className)
      }}
        {...rest}
      >
        {children}
      </div>
  )
}

export interface MdcDialogActionsFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcDialogActionsFC: FunctionalComponent<MdcDialogActionsFCProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = props
  return (
      <div class={{
        'mdc-dialog__actions': true,
        ...classNames(className)
      }}
        {...rest}
      >
        {children}
      </div>
  )
}
