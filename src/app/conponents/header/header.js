import Image from "next/image";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
 
  <nav className={styles.nav}>
    <ul >
      <li>
        <a href="#" >Trang chủ</a>
      </li>
      <li >
        <a href="#" >buingu.com</a>
      </li>
      <li>
        <a href="#">acc fefe</a>
      </li>
    </ul>
  </nav>
  <div className={styles.logo}><Image src="/OIP.jpg" alt="logo" width={50} height={50}></Image></div>
</div>
  );
}
