import React from 'react';
import { PERSONAL_INFO } from '../data';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent('Olá Samuel, vi seu portfólio profissional e gostaria de conversar.');
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${message}`;

  return (
    <div
      id="whatsapp-floating-container"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-whatsapp-floating"
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xl shadow-emerald-600/30 hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Entre em contato via WhatsApp com Samuel Rodrigues Lopes"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 fill-white shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.2-.35.225-.651.075-.301-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.131-.614.136-.134.301-.35.452-.525.15-.175.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.634.721.23 1.378.197 1.897.12.579-.087 1.78-.727 2.03-1.429.251-.702.251-1.304.176-1.429-.075-.125-.276-.201-.577-.351z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.628 0-3.14-.46-4.426-1.258l-.317-.197-2.957.828.84-2.884-.216-.334A8.17 8.17 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2s8.2 3.679 8.2 8.2-3.679 8.2-8.2 8.2z" />
        </svg>

        <span className="hidden sm:inline font-bold tracking-wide">
          Entre em contato
        </span>
      </a>
    </div>
  );
};
