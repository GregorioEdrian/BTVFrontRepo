import styles from '../../CSS/home.module.css'
import FormQuote from "../../components/quote/FormQuote"
import BackgroundHome from '../../components/home/BackGround';

function Home(){

  return <div className={`${styles.home}`}>
    <BackgroundHome></BackgroundHome>
    <FormQuote></FormQuote>
  </div>

}

export default  Home;