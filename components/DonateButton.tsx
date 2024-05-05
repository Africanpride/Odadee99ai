// Donation Process starts from here.
import React, { useState } from "react";

type Props = {
    ButtonText?: string;
    title?: string;
    // Takes React functional component as prop
     children?: React.ReactNode; // Optional ReactNode prop
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
      <button className="btn btn-sm rounded-3xl " onClick={openModal}>{props.ButtonText || 'Donate'} {props.children}</button>
      {showModal && (
        <dialog id="my_modal_1" className="modal bg-base-content" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">{props.title || 'Odadee99AI Donation'}</h3>
            <p className="py-4">{props.children || 'Link to Payment API (Paypal & Stripe)'}</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DonateButton