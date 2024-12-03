
import Link from 'next/link';

export default function Header({href}: {href?: string}) {
  return (
    <div style={{backgroundColor: "lightyellow", fontFamily: 'Montserrat', fontWeight: "500", borderBottomRightRadius: "25px", borderBottomLeftRadius: "25px"}} className="glass navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/">Over mij</Link></li>
            <li><Link href="/cv">CV</Link></li>
            <li><Link href="/projects">Projecten & Modules</Link></li>
          </ul>
    </div>
    <a className="btn btn-ghost text-xl">Portfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Over mij</Link></li>
      <li>
        <details>
          <summary>Overig</summary>
          <ul className="p-2">
            <li style={{zIndex: 10}}><a>Rekenwebsite</a></li>
          </ul>
        </details>
      </li>
      <li><Link href="/cv">CV</Link></li>
      <li><Link href="/projects">Projecten & Modules</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-80 rounded-full">
          <img
            alt="Photo of me"
            // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
            />
        </div>
      </div>
    </div>
  </div>
</div>
  )  
}
