import { JSXBase } from '@stencil/core/internal'

type ClassName = JSXBase.HTMLAttributes<HTMLElement>['class']

export const classNames = (
  className: ClassName
): Exclude<ClassName, string> => typeof className === 'string'
  ? { [className]: true }
  : className
