// Donation Process starts from here.
import React, { useState } from "react";
import { sourceCodePro400 } from "@/styles/fonts";

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

      <button className={`btn ${props.smallSize ? 'btn-xs' : 'btn-sm md:btn-md'} w-auto hover:btn-info  btn-primary  
        flex justify-center items-center ${props.className}`}
        
        onClick={openModal}
      >
        <span className={`${sourceCodePro400.className} font-normal`}>{props.actiontext || "Donate Now"}</span>
        <span>{props.children}</span>
      </button>

      {showModal && (
        <dialog id="my_modal_1" className="modal bg-base-content  p-4 md:p-0" open>
          <div className="modal-box   max-w-5xl p-4">
            <h3 className="font-bold text-lg">
              {props.title || "Odadee99AI Donation"}
            </h3>
            <p className="py-4">
              {props.children || "Link to Payment API (Paypal & Stripe)"}
            </p>
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
