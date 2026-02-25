import Image from "react-bootstrap/Image";
import classNames from "classnames";

import styles from './index.module.scss'

interface ImgIconProps {
  size: 'small' | 'medium' | 'large',
  src: string,
  alt?: string
  className?: string
}

const ImgIcon = (props: ImgIconProps) => {
  return <Image src={props.src} alt={props.alt} className={classNames(props.className, {
    [styles.large]: props.size === 'large',
    [styles.medium]: props.size === 'medium',
    [styles.small]: props.size === 'small'
  })} loading="lazy" />
}

export default ImgIcon