import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface TouchTargetWrapperProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const TouchTargetWrapper: FunctionalComponent<TouchTargetWrapperProps> = (
  props,
  children
) => {
  const {
    class: className,
    ...rest
  } = props
  return (
    <div class={{
      'mdc-touch-target-wrapper': true,
      ...classNames(className)
    }}
      {...rest}
    >
      {children}
    </div>
  )
}
