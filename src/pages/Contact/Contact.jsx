import { useEffect, useRef, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { useForm } from "@formspree/react";
import styles from "./Contact.module.scss";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const { texts } = useLanguage();
  const [state, handleSubmit] = useForm(
    `${import.meta.env.VITE_FORMSPREE_KEY}`
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      if (formRef.current) formRef.current.reset();

      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className={`${styles.contactContainer} ${styles.fadeIn}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{texts.contact.title}</h2>
          <p className={styles.subtitle}>{texts.contact.subtitle}</p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.contactGrid}>
          {/* FORMULÁRIO */}
          <div className={styles.formWrapper}>
            {showSuccess && (
              <div className={styles.successMessage}>
                {texts.contact.success}
              </div>
            )}

            <form
              ref={formRef}
              className={styles.form}
              action={`https://formspree.io/f/${
                import.meta.env.VITE_FORMSPREE_KEY
              }`}
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder={texts.contact.namePlaceholder}
                className={styles.inputField}
              />

              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder={texts.contact.emailPlaceholder}
                className={styles.inputField}
              />

              <input
                id="subject"
                type="text"
                name="subject"
                required
                placeholder={texts.contact.subjectPlaceholder}
                className={styles.inputField}
              />

              <textarea
                id="message"
                name="message"
                required
                placeholder={texts.contact.messagePlaceholder}
                rows={5}
                className={styles.inputField}
              ></textarea>

              {/* Erros multilíngues */}
              {state.errors &&
                state.errors.map((error, index) => (
                  <div key={index} className={styles.errorMessage}>
                    {texts.contact[`${error.field}Error`] ||
                      texts.contact.error}
                  </div>
                ))}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <span className={styles.spinnerContainer}>
                    <span className={styles.loader}></span>
                    {texts.contact.sendingLabel || "Enviando..."}
                  </span>
                ) : (
                  texts.contact.submitButton
                )}
              </button>
            </form>
          </div>

          {/* CONTATO E REDES */}
          <div className={styles.infoWrapper}>
            <p className={styles.contactMessage}>{texts.contact.message}</p>

            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt /> <strong>Localização:</strong> Brasil
              </li>
              <li>
                <FaPhoneAlt /> <strong>Telefone:</strong> +55 16 98809-5749
              </li>
              <li>
                <FaEnvelope /> <strong>Email:</strong>{" "}
                <a href="mailto:AndersonAmicuchi@gmail.com">
                  AndersonAmicuchi@gmail.com
                </a>
              </li>
              <li>
                <FaLinkedin /> <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/amicuchi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  /amicuchi
                </a>
              </li>
              <li>
                <FaGithub /> <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Amicuchi"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Amicuchi
                </a>
              </li>
              <li>
                <FaGlobe /> <strong>Website:</strong>{" "}
                <a
                  href="https://andersonamicuchi.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  AndersonAmicuchi.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
