import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";


const SinglePage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
   
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            
              <div className={styles.userImageContainer}>
                <Image src="/logo.jpg" alt="" fill className={styles.avatar} />
              </div>
           
        
            <div className={styles.userTextContainer}>
       
              <span className={styles.username}>Ammar Zahid</span>
              <span className={styles.date}>30.01.2024</span>
            </div>
          </div>
        </div>

       
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
       
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nihil quas pariatur, velit quos nulla corporis at dignissimos rem voluptatum hic. At placeat error, consequuntur facilis quibusdam accusamus ea amet.</p>
          </div>
 
          <div className={styles.comment}>
       
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
