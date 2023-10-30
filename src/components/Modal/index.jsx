/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

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
      <p>{content?.name}</p>
      <button onClick={onClose}>Close</button>
    </dialog>,
    document.getElementById("modal")
  );
}
