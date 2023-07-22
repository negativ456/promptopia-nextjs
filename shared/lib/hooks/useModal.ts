import { useState } from "react";

interface useModalBind<T> {
  closeModal: () => void;
  openModal: (extra: T) => void;
  extra: T | null;
}

export function useModal<T>(): [boolean, useModalBind<T>] {
  const [isVisible, setIsVisible] = useState(false);
  const [extra, setExtra] = useState<T | null>(null);
  const closeModal = () => {
    setIsVisible(false);
    setExtra(null);
  };

  const openModal = (extra: T | null = null) => {
    setIsVisible(true);
    setExtra(extra);
  };
  return [isVisible, { closeModal, openModal, extra }];
}
