import SimpleSlider from "../conponents/spider/spider";
import styles from "./page.module.css";
export default function accfefe(){
    return (
       <div className={styles.chitietsanpham}>
        <div className={styles.maincontent}>
            <div className={styles.hinhanh}>
                <div className={styles.slider}>
                    <SimpleSlider/>
                </div>
            </div>
            <div className={styles.gia}></div> 
    
        </div>
        <div className={styles.mota}></div>
       </div>
        );
}