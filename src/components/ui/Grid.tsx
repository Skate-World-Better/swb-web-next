import { Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from 'react'
import { cn } from '@/lib/cn'

const gapMap = {
  none: '',
  sm: 'my-2 py-2 lg:my-4 lg:py-4',
  md: 'my-6 py-6 lg:my-12 lg:py-12',
  lg: 'my-12 py-12 lg:my-24 lg:py-24',
} as const

const colsMap = {
  2: 'lg:w-1/2',
  3: 'lg:w-1/3',
} as const

interface GridProps {
  children: ReactNode
  cols?: 2 | 3
  gap?: keyof typeof gapMap
  align?: 'top' | 'center'
  reverse?: boolean
  centered?: boolean
  className?: string
}

const Grid = ({
  children,
  cols = 2,
  gap = 'md',
  align = 'top',
  reverse = false,
  centered = false,
  className,
}: GridProps) => {
  if (centered) {
    return (
      <div
        className={cn(
          'flex flex-wrap',
          gapMap[gap],
          'text-center',
          className,
        )}
      >
        <div className="w-full lg:w-8/12 lg:ml-[16.67%]">
          {children}
        </div>
      </div>
    )
  }

  const wrappedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child
    const element = child as ReactElement<{ className?: string }>
    return cloneElement(element, {
      className: cn('w-full', colsMap[cols], element.props.className),
    })
  })

  return (
    <div
      className={cn(
        'flex flex-wrap',
        gapMap[gap],
        align === 'center' && 'items-center',
        reverse && 'flex-col-reverse lg:flex-row',
        'text-center lg:text-left',
        className,
      )}
    >
      {wrappedChildren}
    </div>
  )
}

export default Grid
