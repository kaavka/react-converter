import './NavBar.scss'
import { LINKS } from "../../utils/constants.ts";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className={'navbar'}>
      {LINKS.map(link => {
        return(
          <Link
            to={`/${link.toLowerCase()}`}
            key={link}
            className={'navbar__link'}
          >
            {link}
          </Link>
        )
      })}
    </nav>
  )
}
