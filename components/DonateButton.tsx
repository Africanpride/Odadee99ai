// Donation Process starts from here.
import React, { useState } from "react";
import { sourceCodePro400 } from "@/utils/styles/fonts";
import { CircleChevronRight } from "lucide-react";


type Props = {
  actiontext?: string;
  title?: string;
  // Takes React functional component as prop
  children?: React.ReactNode; // Optional ReactNode prop. We shall use this later
  icon?: React.ReactNode;
  // class name for the button
  className?: string;
  smallSize?: boolean;
};

const DonateButton: React.FC<Props> = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>

      <button className={`btn ${props.smallSize ? 'btn-xs' : 'btn-sm md:btn-md'} w-auto hover:btn-info  btn-info  
        flex justify-center rounded-tr-2xl rounded-bl-2xl px-2 items-center ${props.className}`}
        
        onClick={openModal}
      >
        <span className={`${sourceCodePro400.className} font-normal`}>{props.actiontext || "Donate Now"}</span>
        <span className="">{props.icon || <CircleChevronRight />}</span>

      </button>

      {showModal && (
        <dialog id="my_modal_1" className="modal bg-base-content  p-4 md:p-0" open>
          <div className="modal-box   max-w-5xl p-4">
            <h3 className="font-bold text-lg">
              {props.title || "Odadee99AI Donation Options"}
            </h3>
            <div className="py-4">
              {props.children || "Link to Payment API (Paypal & Stripe)"}
            </div>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DonateButton;
