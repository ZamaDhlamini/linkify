import Layout from "../Layout";
import styles from "./Home.module.css";
import Link from "next/link";

const LandingPage = () => {
    return(
        <Layout>
            <div className={styles.Heading1}>
            <h1>Linkify</h1>
            </div>
            <div className={styles.container}>
            <div className={styles.Heading2}>
            <h2>Government Guide</h2>
            </div>
            </div>
            <div className={styles.Heading3}>
            <h3>Linking the government with the people</h3>
            </div>
            <div className={styles.pcontainer}>
            <div className={styles.Paragraph1}>
            <p>Welcome to Linkify! this website is to help you the citizen of South Africa with linking you to government and vice versa.</p>
            </div>
            <div className={styles.Paragraph2}>
            <p>This website is meant to serve as a guide for which you can apply for the relevant grant and receive your much needed SARS number which will be attributed just to you! More features when you explore the site</p>
            </div>
            </div>
            <div className={styles.button}>
            <Link href="/Login">
            <button>Apply for Grant</button>
            </Link>
            </div>
        </Layout>
    )
    }

export default LandingPage;