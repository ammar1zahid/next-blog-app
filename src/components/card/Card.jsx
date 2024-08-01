import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";


const Card = () => {
  return (
    <div className={styles.container} >
      
      
        <div className={styles.imageContainer}>         
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>

  
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
             29.07.2024
          </span>
          <span className={styles.category}>Travel</span>
        </div>
        <Link href={`/post`}>
          <h1>post tittle</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cupiditate, ad odit temporibus pariatur magni et ex numquam modi, vitae perferendis ea maxime cum, recusandae alias accusantium nulla reiciendis dolorem.</p>
        
       
        <Link href={`/post`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>

  );
};

export default Card;
