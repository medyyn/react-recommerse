import React from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
    {
      id: 1,
      href: "/",
      title: "Home"
    },
    {
      id: 2,
      href: "/Products",
      title: "products"
    },
    {
      id: 3,
      href: "/FAQ",
      title: "faq"
    },
    {
      id: 4,
      href: "/Contacts",
      title: "contacts"
    },
  ]

export default function NavbarMenu({isOpen}) {
  return (
    <ul className = {`fixed ${isOpen ? "right-0" : "-right-full"} transition-all duration-300 top-0 flex h-full w-1/2 flex-col md:border-none gap-4 border-l border-l-gray-200 bg-white p-8 font-medium text-gray-600 md:static md:w-auto md:flex-row md:bg-transparent md:p-0`}>
    {NAV_LINKS.map((link, ) => (
      <li key={link.id}>
      <Link to={link.href}>{link.title}</Link>
      </li>
    ))}
  </ul>
  )
}
