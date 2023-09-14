import classNames from 'classnames'

import styles from './index.module.scss'

interface ButtonProps {
  children: any
  className?: string
  link?: boolean
  href?: string
  target?: string,
  primary?: boolean,
  secondary?: boolean,
  complementary?: boolean,
  light?: boolean,
  accent?: boolean,
  block?: boolean
}

const Button = ({
  children,
  className,
  link,
  href,
  target,
  primary,
  secondary,
  complementary,
  light,
  accent,
  block
}: ButtonProps) => {
  if (link) {
    return <a href={href} target={target} className={classNames(className, {
      [styles.btn]: true,
      [styles.btnPrimary]: primary,
      [styles.btnSecondary]: secondary,
      [styles.btnAccent]: accent,
      [styles.btnBlock]: block,
      [styles.btnComplementaryDark]: complementary && !light,
      [styles.btnComplementaryLight]: complementary && light,
    })}>
      {children}
    </a>
  }

  return <button className={classNames(className, {
    [styles.btn]: true,
    [styles.btnAccent]: accent,
    [styles.btnPrimary]: primary,
    [styles.btnSecondary]: secondary,
    [styles.btnBlock]: block,
    [styles.btnComplementaryDark]: complementary,
  })}>
    {children}
  </button>
}

export default Button
