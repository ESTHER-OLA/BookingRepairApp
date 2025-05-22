import { useEffect } from "react";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 dark:bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded p-6 max-w-xl w-full shadow-lg m-auto max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
