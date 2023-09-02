import React,{useEffect} from "react";
import styles from "./AavartanCard.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aavartan_Card(props){
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="zoom-in-up" className={styles.Mcards}>
            <img width="100%" src={props.aavartan_img} className={styles.hehe} alt="Error"></img>
        </div>
    )
}
export default Aavartan_Card;