export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>Sub Header</div>
      <main>{children}</main>
    </div>    
  )
}