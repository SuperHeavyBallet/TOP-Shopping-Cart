import styles from "./Footer.module.css"

export default function Footer()
{

    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerSection}>
                <div className={styles.footerSubTitle}>
                    <h5>Built as part of The Odin Project</h5>
                </div>
            </div>

            <div className={styles.footerSection}>
                <div className={styles.footerTitle}>
                    <h3>The Shop For Stuff</h3>
                </div>
            </div>

            <div className={styles.footerSection}>
                <div className={styles.footerContact}>
                    <h5>Created by Alexander Gorham</h5>
                    <h5>Contact: superheavyballet@gmail.com</h5>
                </div>
            </div>
        </div>
    )

}