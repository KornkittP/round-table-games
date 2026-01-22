import Navbar from "@/components/navbar"
import './globals.css'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header><Navbar /></header>
        <div>Header</div>
        {children}
        <div>Footer</div>
      </body>
    </html>
  )
}