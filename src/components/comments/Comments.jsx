"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";


const Comments = () => {


  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            
          />
          <button className={styles.button} 
        
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
              <div className={styles.comment} >
                <div className={styles.user}>
                
                    <Image
                      src="/logo.jpg"
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
              
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Ammar Zahid</span>
                    <span className={styles.date}>31.07.2024</span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae dolores eius doloremque hic, nemo ipsam ipsa consequuntur dicta. Eligendi, rerum ducimus explicabo impedit atque nemo? Assumenda omnis corrupti blanditiis!</p>
              </div>
      </div>
      <div className={styles.comments}>
              <div className={styles.comment} >
                <div className={styles.user}>
                
                    <Image
                      src="/logo.jpg"
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
              
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Ammar Zahid</span>
                    <span className={styles.date}>31.07.2024</span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae dolores eius doloremque hic, nemo ipsam ipsa consequuntur dicta. Eligendi, rerum ducimus explicabo impedit atque nemo? Assumenda omnis corrupti blanditiis!</p>
              </div>
      </div>
      <div className={styles.comments}>
              <div className={styles.comment} >
                <div className={styles.user}>
                
                    <Image
                      src="/logo.jpg"
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
              
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Ammar Zahid</span>
                    <span className={styles.date}>31.07.2024</span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae dolores eius doloremque hic, nemo ipsam ipsa consequuntur dicta. Eligendi, rerum ducimus explicabo impedit atque nemo? Assumenda omnis corrupti blanditiis!</p>
              </div>
      </div>
      <div className={styles.comments}>
              <div className={styles.comment} >
                <div className={styles.user}>
                
                    <Image
                      src="/logo.jpg"
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
              
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Ammar Zahid</span>
                    <span className={styles.date}>31.07.2024</span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae dolores eius doloremque hic, nemo ipsam ipsa consequuntur dicta. Eligendi, rerum ducimus explicabo impedit atque nemo? Assumenda omnis corrupti blanditiis!</p>
              </div>
      </div>
 
    </div>
  );
};

export default Comments;
