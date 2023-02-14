import style from './layout.module.css'

interface props {
  children: JSX.Element | JSX.Element[] | string
  className?: string
}
const Layout = ({ children, className = '' }: props): JSX.Element => {
  return (
    <div className={`${style.content} ${className}`}>
      <div className={style.child}>{children}</div>
    </div>
  )
}

export default Layout
