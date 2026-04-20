import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'

import style from './Texts.module.scss'

type BrushStyle =
  | 'oneAccent'
  | 'oneSecondary'
  | 'oneFaded'
  | 'oneFadedPlus'
  | 'twoAccent'
  | 'twoSecondary'
  | 'twoFaded'
  | 'threeAccent'
  | 'threeSecondary'
  | 'threeFaded'

interface BrushedProps {
  children: ReactNode
  isBlock?: boolean
  brushStyle?: BrushStyle
  position?: CSSProperties
}

const brushStyleMap: Record<BrushStyle, string> = {
  oneAccent: style.brushOneAccent,
  oneSecondary: style.brushOneSecondary,
  oneFaded: style.brushOneFaded,
  oneFadedPlus: style.brushOneFadedPlus,
  twoAccent: style.brushTwoAccent,
  twoSecondary: style.brushTwoSecondary,
  twoFaded: style.brushTwoFaded,
  threeAccent: style.brushThreeAccent,
  threeSecondary: style.brushThreeSecondary,
  threeFaded: style.brushThreeFaded,
}

export const Brushed = ({
  children,
  isBlock,
  brushStyle,
  position,
}: BrushedProps) => {
  return <span className={cn(style.spanBrushed, isBlock && style.block)}>
    {children}
    <div style={position} className={cn(style.brush, brushStyle && brushStyleMap[brushStyle])} />
  </span>
}

interface BrushedCornersProps {
  children: ReactNode
  positionTop?: CSSProperties
  positionBottom?: CSSProperties
  isBlock?: boolean
}

export const BrushedCorners = ({
  children,
  positionTop,
  positionBottom,
  isBlock,
}: BrushedCornersProps) => {
  return <span className={cn(style.spanBrushed, isBlock && style.block)}>
    {children}
    <div style={positionTop} className={cn(style.brush, style.brushThreeFaded, style.brushCornerTop)} />
    <div style={positionBottom} className={cn(style.brush, style.brushThreeFaded, style.brushCornerBottom)} />
  </span>
}
