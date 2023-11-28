import './Header.scss'
import { LogoLink } from "../LogoLink/LogoLink.tsx";
import { NavBar } from "../NavBar/NavBar.tsx";
import { CurrencyDisplay } from "../CurrencyDisplay/CurrencyDisplay.tsx";
function Header() {
  return (
    <header className={'header'}>
      <div className={'header__logo'}>
        <LogoLink />
      </div>
      <div className={'header__navbar'}>
        <NavBar />
      </div>
      <div className={'header__currency'}>
        <CurrencyDisplay />
      </div>
    </header>
  )
}

export default Header;
