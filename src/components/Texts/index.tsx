import classNames from 'classnames'

import style from './Texts.module.scss'

export const Brushed = ({
  children,
  isBlock,
  brushStyle,
  position,
}: any) => {
  const returnBrush = (brushStyle: any) => {
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

export const BrushedCorners = ({
  children,
  positionTop,
  positionBottom,
  isBlock,
}: any) => {
  return <span className={classNames(style.spanBrushed, { [style.block]: isBlock })}>
    {children}
    <div style={positionTop} className={classNames(style.brush, style.brushThreeFaded, style.brushCornerTop)} />
    <div style={positionBottom} className={classNames(style.brush, style.brushThreeFaded, style.brushCornerBottom)} />
  </span>
}
