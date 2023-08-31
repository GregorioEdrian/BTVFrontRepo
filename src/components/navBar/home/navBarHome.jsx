import React, { useState } from "react";
import i18n from '../../../constants/langs/i18n';
import styles from '../../../CSS/navBarHome.module.css';
import { Link } from "react-router-dom";
import logoEscudo from '../../../assets/logos/blindatuviaje_isotipo_01NOR.png'
import logoNombre from '../../../assets/logos/blindatuviaje_logotipo_web_01.png'
import "@fontsource/montserrat/700.css";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";


function NavBarHome(){
  const { t, i18n } = useTranslation();
  const [linksTextNav, setLinksTextNav] = useState({
    contacts: t('contacts'),
    emergency: t('emergency'),
    services: t('services'),
    products_services: t('products_services')/* ,
    want_called:t('want_called'),
    BTV_phone_email: t('BTV_phone_email') */
  });
  const [isNavVisible, setIsNavVisible] = useState(false);
  const nLinks = Object.keys(linksTextNav).length; 
  
  const handleNavVisible = () => {
   setIsNavVisible(!isNavVisible); 
  }

  return (
    <div className={styles.navConten}>
      <div className={styles.navBar}>
      <div className={styles.logo}>
        <Link to={'/home'} id={styles.linkLogo}>
          <img src={logoEscudo} alt="Logo escudo BTV" id={styles.linkLogoEscudo}/>
          <img src={logoNombre} alt="Logo nombre BTV" id={styles.linkLogoNombre}/>
        </Link>
      </div>
      <button className={styles.toggle} onClick={handleNavVisible}>
        <GiHamburgerMenu className={styles.toggleButton}/>
      </button>
      <div className={`${styles.links}${isNavVisible? ` ${styles.navVisible}`:''}`}>
        <ul className={styles.navMenu}>
          {
            Object.keys(linksTextNav).map((keyName, index) => {
              /* return (<li className={`${styles.navMenuLi}${index===0? ` ${styles.left}`:index===nLinks-1? ` ${styles.rigth}`:` ${styles.centerRight}`}`} key={index}>
                <Link to={'#'} id={styles.linksItemsMenu} >{linksTextNav[keyName].toUpperCase()}</Link>
              </li>) */
              return (
                <Link to={'#'} key={index} className={`${styles.navMenuLi}${index===0? ` ${styles.left}`:index===nLinks-1? ` ${styles.rigth}`:` ${styles.centerRight}`}`} >{linksTextNav[keyName].toUpperCase()}</Link>
              )
            })
          }
        </ul>
      </div>

    </div>
    </div>    
  )

}


export default NavBarHome;