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
        />
        <div className={styles.info}>
          <p
            className={styles.name}
          >{`${content?.name} ${content?.lastName}`}</p>
          <div className={styles.position}>{content?.position}</div>
          <a href={content?.link} target="_blank" rel="noreferrer">
            <img src={li} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className={styles.about}>
        <p className={styles.bio}>
          Leading our team is Max Ward – our founder and a true citizen of SEA
          who has spent 20 years in various countries of the region, studying
          the markets, opportunities and most importantly people.
        </p>
        <p className={styles.bio}>
          Max is a strong believer in the potential of emerging countries. It is
          an uphill climb to find someone who knows more about Asia retail
          supply chains than Max. With over a decade’s worth of experience in
          the Asia-Pacific region, Max has led new development strategies
          focusing on the global application of Artificial Intelligence and
          machine learning to build more efficient and sustainable supply
          chains.
        </p>
      </div>
      <div className={styles.close} onClick={onClose}>
        <img src={close} alt="Close" />
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
