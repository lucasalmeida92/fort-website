export function Container({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode,
  className?: string,
  [x:string]: any;
}) {
  return (
    <div className={`max-w-screen-lg mx-auto px-3 ${className ?? ''}`} {...rest}>
        {children}
    </div>
  )
}
