/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import li from "../../assets/li-icon.svg";
import close from "../../assets/close.svg";

export default function Modal({ open, onClose, content }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const closeListenerFnc = () => {
      onClose && onClose();
    };

    const dialogRef = modalRef.current;
    dialogRef?.addEventListener("close", closeListenerFnc);

    return () => {
      dialogRef?.removeEventListener("close", closeListenerFnc);
    };
  }, [onClose]);

  useEffect(() => {
    if (open && !modalRef.current?.open) {
      modalRef.current?.showModal();
    }

    if (!open && modalRef.current?.open) {
      modalRef.current?.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={modalRef}
      className={styles.modal}
      onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          e.currentTarget.close();
        }
      }}
    >
      <div className={styles.content}>
        <img
          src={content?.photo}
          alt={`${content?.name} ${content?.lastName}`}
          className={styles.photo}
          loading="lazy"
        />
        <div className={styles.info}>
          <p
            className={styles.name}
          >{`${content?.name} ${content?.lastName}`}</p>
          <div className={styles.position}>{content?.position}</div>
          <a href={content?.link} target="_blank" rel="noreferrer">
            <img src={li} alt="LinkedIn" loading="lazy" />
          </a>
        </div>
      </div>
      <div className={styles.about}>
        {content?.bio.map((paragraph, i) => {
          return (
            <p className={styles?.bio} key={i}>
              {paragraph}
            </p>
          );
        })}
      </div>
      <div className={styles.close} onClick={onClose} aria-label="Close modal">
        <img src={close} alt="Close modal" loading="lazy" />
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
