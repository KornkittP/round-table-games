export default function GamesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <div>Sub Header</div>
          <main>{children}</main>
        </body>
      </html>
    )
  }