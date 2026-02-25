import type { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'

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

export const Brushed = ({
  children,
  isBlock,
  brushStyle,
  position,
}: BrushedProps) => {
  const returnBrush = (brushStyle?: BrushStyle) => {
    switch (brushStyle) {
      case 'oneAccent':
        return style.brushOneAccent
      case 'oneSecondary':
        return style.brushOneSecondary
      case 'oneFaded':
        return style.brushOneFaded
      case 'oneFadedPlus':
        return style.brushOneFadedPlus
      case 'twoAccent':
        return style.brushTwoAccent
      case 'twoSecondary':
        return style.brushTwoSecondary
      case 'twoFaded':
        return style.brushTwoFaded
      case 'threeAccent':
        return style.brushThreeAccent
      case 'threeSecondary':
        return style.brushThreeSecondary
      case 'threeFaded':
        return style.brushThreeFaded
    }
  }

  return <span className={classNames(style.spanBrushed, { [style.block]: isBlock })}>
    {children}
    <div style={position} className={classNames(style.brush, returnBrush(brushStyle))} />
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
  return <span className={classNames(style.spanBrushed, { [style.block]: isBlock })}>
    {children}
    <div style={positionTop} className={classNames(style.brush, style.brushThreeFaded, style.brushCornerTop)} />
    <div style={positionBottom} className={classNames(style.brush, style.brushThreeFaded, style.brushCornerBottom)} />
  </span>
}
