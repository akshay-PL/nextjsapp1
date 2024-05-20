//import HydrationTest from "@/components/hydrationTest";
import dynamic from "next/dynamic";
import styles from "./contact.module.css";
import Image from "next/image";

const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          width={200}
          height={200}
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name and Surname"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Email Address"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            className={styles.textarea}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
