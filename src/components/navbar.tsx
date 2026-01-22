import React from "react";
import Link from "next/link";
import Image from 'next/image';

interface NavLink {
    href: string
    text: string
}

const NavLinks: NavLink[] = [
    { href: "/games/cat-avenue", text: 'cat avenue' },
    { href: "/games/potato-tomato", text: 'potato tomato' },
    { href: "/games/city-line", text: 'city line' },
    { href: "/games/possessed", text: 'possessed' },
];

const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 z-50 w-full bg-base-300 text-gray md:px-8 py-1 shadow-sm">
            <div className="navbar max-w-6xl max-auto flex-col sm:flex-row">
                {/* Left Section with 1 Links */}
                <section className="flex space-x-4">
                <Link href="/" className="hover:underline">
                    <Image src="/logo/round-table-games.png" alt="Round Table Games" height={20} width={50} className="mr-2"/>
                </Link>
                </section>

                <ul className="menu md:ml-8 flex-col sm:flex-row">
                    { NavLinks.map((link: NavLink) => {
                        return (
                            <li key={link.href}>
                                <Link href={link.href} className="capitalize">
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar

// import Link from 'next/link';
// import { FC } from 'react'; // ใช้ FC (Functional Component) สำหรับ Type ของ Component

// // กำหนด Type ให้กับ Props ถ้ามี (ในตัวอย่างนี้ไม่มี Props จึงเป็น {})
// interface NavbarProps {} 

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Services', path: '/services' },
//   { name: 'Contact', path: '/contact' },
// ];

// // ใช้ FC<NavbarProps> เพื่อระบุ Type ให้กับ Component
// const Navbar: FC<NavbarProps> = () => {
//   return (
//     <header className="navbar-container">
//       <nav>
//         <div className="logo">
//           <Link href="/">
//             {/* a tag ที่อยู่ใน Link component จะต้องมี href ของตัวเอง หรือใช้ legacyBehavior */}
//             <a>Next.js TSX App</a>
//           </Link>
//         </div>
//         <ul className="nav-links">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link href={link.path}>
//                 <a>{link.name}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       {/* Internal CSS for simple styling */}
//       <style jsx>{`
//         .navbar-container {
//           background-color: #2c3e50;
//           padding: 1rem 0;
//           color: white;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }
//         nav {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }
//         .logo a {
//           font-size: 1.6rem;
//           font-weight: 700;
//           text-decoration: none;
//           color: #ecf0f1;
//         }
//         .nav-links {
//           list-style: none;
//           display: flex;
//           gap: 30px;
//           margin: 0;
//           padding: 0;
//         }
//         .nav-links a {
//           color: #ecf0f1;
//           text-decoration: none;
//           padding: 5px 10px;
//           transition: color 0.3s ease;
//         }
//         .nav-links a:hover {
//           color: #3498db;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Navbar;