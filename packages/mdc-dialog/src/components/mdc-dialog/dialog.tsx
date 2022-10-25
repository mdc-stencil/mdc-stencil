import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface DialogProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  fullscreen?: boolean
}

export const Dialog: FunctionalComponent<DialogProps> = (
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
        <DialogContainer>
          <DialogSurface>
          {children}
          </DialogSurface>
        </DialogContainer>
        <DialogScrim />
      </div>
  )
}

export interface DialogScrimProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DialogScrim: FunctionalComponent<DialogScrimProps> = (
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

export interface DialogContainerProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DialogContainer: FunctionalComponent<DialogContainerProps> = (
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

export interface DialogSurfaceProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DialogSurface: FunctionalComponent<DialogSurfaceProps> = (
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

export interface DialogContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DialogContent: FunctionalComponent<DialogContentProps> = (
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

export interface DialogActionsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const DialogActions: FunctionalComponent<DialogActionsProps> = (
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
