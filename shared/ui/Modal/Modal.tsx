"use client";
import cls from "./Modal.module.scss";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import classNames from "classnames";
interface ModalProps {
  className?: string;
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}
interface KeyboardEvent {
  key: string;
}

export const Modal: React.FC<ModalProps> = ({
  className,
  onClose,
  children,
  open,
}) => {
  const [mounted, setMounted] = useState(false);
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (open && event.key === "Escape") {
        if (onClose) {
          onClose();
        }
      }
    },
    [onClose, open]
  );
  useEffect(() => {
    setMounted(true);
    document.body.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
  return mounted ? (
    <Portal>
      <div
        className={classNames(cls.Modal, { [cls.opened]: open }, [className])}
      >
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  ) : null;
};
