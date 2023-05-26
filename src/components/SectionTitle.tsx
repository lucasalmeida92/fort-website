export function SectionTitle({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <h2 className={`text-2xl md:text-4xl uppercase font-bold mb-12 ${className ?? ''}`}>
      {children}
    </h2>
  )
}
