import { useEffect } from 'react';
import useImageModalStore from '../store/useImageModalStore';

const ImageModal = () => {
  const { isOpen, imageUrl, closeModal } = useImageModalStore();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold leading-none focus:outline-none"
          onClick={closeModal}
        >
          &times;
        </button>
        <img src={imageUrl} alt="Full size" className="max-w-full max-h-[90vh] object-contain" />
      </div>
    </div>
  );
};

export default ImageModal;
