import { HTMLStencilElement, JSXBase } from '@stencil/core/internal'

type ClassName = JSXBase.HTMLAttributes<HTMLElement>['class']

export const classNames = (
  className: ClassName
): Exclude<ClassName, string> => typeof className === 'string'
  ? { [className]: true }
  : className

export type TypedEvent<T extends EventTarget, E extends Event = Event> = {
  target: T
} & E

export function hasComponentOnReady (el: HTMLElement): el is HTMLStencilElement {
  return typeof (el as HTMLStencilElement).componentOnReady === 'function'
}

export const onReady = async <T extends HTMLElement>(el: T): Promise<T> => hasComponentOnReady(el)
  ? await el.componentOnReady()
  : await Promise.resolve(el)
