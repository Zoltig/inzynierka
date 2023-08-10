
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { VscTriangleDown } from 'react-icons/vsc';
import { SlArrowDown } from 'react-icons/sl';
import { TfiWorld, TfiMenu, TfiClose } from "react-icons/tfi";

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <div className="navbar flex__center">
            <div className="navbar__language">
                <div className="navbar__language--content flex__center">
                    <TfiWorld className="nav__icon--earth" size={10}/>
                    &nbsp;Language&nbsp;
                    <SlArrowDown className="nav__icon" size={10}/>
                </div>
                <ul className="language__menu bg__yellow">
                    <li><a>Polski</a></li>
                    <li><a>English</a></li>
                </ul>
            </div>
            <div className="navbar__nav flex__center">
                <ul className={`navbar__links flex ${toggleMenu && "switch"}`}>
                    <li className="nav__item nav__item--main">
                        <div className="nav__item--menu">
                            <Link to="/" className="nav__link">Strona główna&nbsp;<SlArrowDown className="nav__icon" size={10}/></Link>
                        </div>
                        <ul className="main__menu bg__yellow">
                            <li><Link to="/dodaj_oferte"><div className="main__menu--field">Dodaj ofertę pomocy</div></Link></li>
                            <li><Link to="/"><div className="main__menu--field">Aktualne potrzeby</div></Link></li>
                            <li><Link to="/"><div className="main__menu--field">Przyjęte potrzeby</div></Link></li>
                            <li><Link to="/"><div className="main__menu--field">Moje oferty pomocy</div></Link></li>
                            <li><Link to="/"><div className="main__menu--field">Poproś o pomoc</div></Link></li>
                            <li><Link to="/"><div className="main__menu--field">Oferty pomocy</div></Link></li>
                            <li><Link to="/"><div className="main__menu--field">Przyjęte oferty pomocy</div></Link></li>
                            <li><Link to="/"><div className="main__menu--field">Moje potrzeby</div></Link></li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <Link to="/o_nas" className="nav__link">O nas</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/kontakt" className="nav__link">Kontakt</Link>
                    </li>
                    <div className="nav__btn">
                        <Link to="#"><a href="#" className="btn">Wspomóż</a></Link>
                    </div>
                </ul>
                <div className="nav__btn--main">
                    <Link to="#"><a href="#" className="btn">Wspomóż</a></Link>
                </div>
                <div className="nav__account ">
                    <div className="nav__link">
                        Moje Konto&nbsp;<VscTriangleDown className="nav__icon" size={15}/>
                    </div>
                        <ul className="account__menu bg__yellow">
                            <li><Link to="/logowanie"><div className="account__menu--field">Logowanie</div></Link></li>
                            <li><Link to="/rejestracja"><div className="account__menu--field">Rejestracja</div></Link></li>
                            <li><Link to="/ustawienia"><div className="account__menu--field">Ustawienia</div></Link></li>
                        </ul>
                </div>
            </div>
            <div className={`navbar__toggle--btn flex__center ${toggleMenu && "switch"}`} onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                        <TfiClose className="nav__icon" size={25} />
                    ) : (
                        <TfiMenu className="nav__icon" size={25} />
                    )}
            </div>
        </div>
    )
}