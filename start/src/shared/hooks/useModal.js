import { useState } from "react";

/**
 * useModal hook is used for providing the visible state of a modal along with a method to toggle the visibility
 */
export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return [showModal, toggleModal];
}
