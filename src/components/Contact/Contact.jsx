import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "sargun1273@gmail.com";

  const handleCopy = () => {
    // Modern way to copy, works on secure (https) servers
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    } else {
      // Fallback for older browsers or insecure (http) servers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); 
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p>For any feedback or queries, kindly reach me at my email:</p>
        <div className={styles.emailContainer}>
          <span className={styles.emailLink} onClick={handleCopy}>
            {email}
          </span>
          {copied && <span className={styles.copiedMessage}>Copied!</span>}
        </div>
      </div>
    </footer>
  );
};