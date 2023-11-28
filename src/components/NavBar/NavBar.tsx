import './NavBar.scss'
import { LINKS } from "../../utils/constants.ts";

export function NavBar() {
  return (
    <nav className={'navbar'}>
      {LINKS.map(link => {
        return(
          <a
            href={`/${link.toLowerCase()}`}
            key={link}
            className={'navbar__link'}
          >
            {link}
          </a>
        )
      })}
    </nav>
  )
}
