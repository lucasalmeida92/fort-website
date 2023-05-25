export function Container({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div className={`max-w-screen-lg mx-auto px-3 ${className ?? ''}`}>
        {children}
    </div>
  )
}
