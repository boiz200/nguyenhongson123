import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <div className={styles.item3}>
<footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Tổng đài hỗ trợ</h4>
          <ul className={styles.footerList}>
            <li><Link href="#">số anh gà 1588 8805</Link></li>
            <li><Link href="#">Gọi mua: 1900 232 461 (8:00 - 21:30)</Link></li>
            <li><Link href="#">Khiếu nại: 1800.1063 (8:00 - 21:30)</Link></li>
            <li><Link href="#">Bảo hành: 1900 232 465 (8:00 - 21:00)</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Về công ty</h4>
          <ul className={styles.footerList}>
            <li><Link href="#">napthe.vn</Link></li>
            <li><Link href="#">từ 20k-500k</Link></li>
            <li><Link href="#">Hỗ trợ khách hàng</Link></li>
            <li><Link href="#">Nói không nói scam</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Thông tin khác</h4>
          <ul className={styles.footerList}>
            <li><Link href="#">Địa chỉ ở mọi trên trái đất</Link></li>
            <li><Link href="#">membership</Link></li>
            <li><Link href="#">Email</Link></li>
            <li><Link href="#">giờ làm 24/9</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Nhà cái cùng tài trợ</h4>
          <ul className={styles.footerList}>
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">Instagram</Link></li>
            <li><Link href="#">YouTube</Link></li>
            <li><Link href="#">Twitter</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Garena nơi cảm xúc thang hoa</p>
      </div>
    </footer>
    </div>
    );
}

