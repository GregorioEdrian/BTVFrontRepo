import React, {useState} from "react";
import styles from '../../CSS/formQuote.module.css';
import frontFormImg from '../../assets/pictures/blindatuviaje_foto_08.jpg'
import backFormImg from '../../assets/pictures/blindatuviaje_foto_03.jpeg'
import i18n from '../../constants/langs/i18n';
import { useTranslation } from "react-i18next";
import buy from '../../assets/icons/compra.png'
import quote from '../../assets/icons/cotisa.png'
import select_plan from '../../assets/icons/plan_viaje.png'

function FormQuote(){
  const {t, i18n} = useTranslation();
  const [frontForm, setFrontForm] = useState({
    quote_plan_here: t('quote_plan_here'),
    form_front_desc: t('form_front_desc'),
    buy_online: t('buy_online'),
    quote: t('quote'),
    select_plan: t('select_plan'),
  })
  const [noVisisble, setIsVisisble] = useState(false);
  const [frontBack, setFrontBack] = useState({});
 
  const fronIcons = {
    buy: {
      text:frontForm.buy_online,
      img: buy
    },
    quote: {
      text:frontForm.quote,
      img: quote
    },
    select_plan: {
      text:frontForm.select_plan,
      img: select_plan
    }
  }
  const handleFrontBack = () => {
    setIsVisisble(!noVisisble);
  }

  return(
    <div className={`${styles.quoteContainer}${noVisisble? ` ${styles.frontBack}`:''}`}>

      <div className={`${styles.front} ${styles.side}${noVisisble? ` ${styles.noVisible}`:''}`} onClick={handleFrontBack}>
        <div className={styles.content}>
            <img src={frontFormImg} alt="Front face" id={styles.frontFormImg}/>
          <div className={styles.infoFront}>
            <span id={styles.titleFront}>{frontForm.quote_plan_here}</span>
            <div className={styles.frontInfo}>
              <span id={styles.description}>{frontForm.form_front_desc}</span>
              <div className={styles.iconsInfo}>
                {Object.keys(fronIcons).map((keyItem, index) => {
                  return(
                    <div key={index} id={styles.iconsFron}>
                      <p id={styles.textIcons}>{fronIcons[keyItem].text.toUpperCase()}</p>
                      <img id={styles.imgIcons} src={fronIcons[keyItem].img} alt="icons" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.back} ${styles.side}${noVisisble? '':` ${styles.noVisible}`}`}>
        <div className={styles.contenForm}>
          <div className={styles.inpData}>
            <h4>Tipo de Viaje</h4>
            <select id={styles.selectTypeTravel}></select>
          </div>
          <div className={styles.inpData}>
            <div className="origen">
              <h4>Origen</h4>
              <select id={styles.selectOrigen}></select>
            </div>
            <div className="destino">
              <h4>Origen</h4>
              <input id={styles.selectOrigen}></input>
            </div>
          </div>
          <div className={styles.inpData}></div>
          <div className={styles.inpData}></div>
          <div className={styles.inpData}></div>
        </div>
      </div>
    </div>
  )

}

export default FormQuote;