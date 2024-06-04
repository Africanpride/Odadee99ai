// Donation Process starts from here.
import React, { useState } from "react";
import { sourceCodePro400 } from "@/utils/styles/fonts";
import { CircleChevronRight, LucideSquareX } from "lucide-react";
import Image from "next/image";

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
    <div className="relative">
      <button
        className={`btn ${
          props.smallSize ? "btn-xs" : " md:btn-md"
        } w-auto hover:btn-info  btn-info  
        flex justify-center rounded-tr-2xl rounded-bl-2xl px-2 items-center ${
          props.className
        }`}
        onClick={openModal}
      >
        <span className={`${sourceCodePro400.className} font-normal`}>
          {props.actiontext || "Donate Now"}
        </span>
        <span className="">{props.icon || <CircleChevronRight />}</span>
      </button>

      {showModal && (
        <dialog
          id="my_modal_1"
          className="modal bg-base-content  md:p-0 "
          open
        >
          <div className="modal-box flex bg-none md:max-w-7xl w-auto p-0 relative overflow-hidden">
            <div className="w-full p-4 bg-white flex flex-col justify-between">
              <div className="flex justify-between items-center gap-x-5 border-b border-neutral-200 pb-2">
                <h3 className="font-bold md:text-lg text-info uppercase  ">
                  {props.title || "Odadee99AI Donation Options"}
                </h3>
                <LucideSquareX className="text-info hover:text-red-600 cursor-pointer " onClick={closeModal}/>
              </div>
              <div className="py-2">
                {props.children || "Link to Payment API (Paypal & Stripe)"}
              </div>

            </div>
            
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DonateButton;
