import { classNames } from '@mdc-stencil/common'
import { FunctionalComponent, h, JSXBase } from '@stencil/core/internal'

export interface MdcTouchTargetWrapperFCProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
}

export const MdcTouchTargetWrapperFC: FunctionalComponent<MdcTouchTargetWrapperFCProps> = (
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
