import React from 'react'
import '../style/index.css'

// { href: 'sosyalMedya', label: 'Sosyal Medya' }
const links = [
  { href: 'index', label: 'Blog' },
  { href: 'Hakkimda', label: 'Hakkımda' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})


const Nav = () => (
  <nav>
    <ul className="flex flex-row justify-center">
      {links.map(({ key, href, label }) => (
        <li className="px-4 py-2 m-1" key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: 'PT Serif', serif;
      }
      nav {
        overflow: hidden;
        background-color: #fff;
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 20px 0 rgba(0, 0, 0, 0.1);
      }   
    `}</style>
  </nav>
)

export default Nav
