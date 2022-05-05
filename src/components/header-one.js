import React, { Fragment, useContext, useEffect, useState } from "react";
import { Logo, NavLinksData, TopbarInfos, FooterBottomData } from "@/data";
import Link from "@/components/link";
import Img from "@/components/img";
import { MenuContext } from "@/context/menu-context";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <Fragment>
      <div
        className={`main_menu_area ${true === sticky
          ? " stricky stricky-fixed slideInDown animated"
          : " stricky slideIn animated"
          }`}
      >
        <div className="container">
          <div className="main_menu_area__left">
            <Link href="/">
              <Img src={Logo.dark} alt="VCA Logo" layout="fixed" height="60" />
            </Link>
            <span className="mobile-menu__toggler" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div className="main_menu_area__right">
            <nav className="main_menu_area__menu">
              <ul className="nav navbar-nav navigation-box">
                {NavLinksData.map((links, index) => {
                  return (
                    <li key={index}>
                      <Link href={links.url}>{links.name}</Link>
                      {undefined !== links.subItems ? (
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link href={subLinks.url}>{subLinks.name}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderOne;
