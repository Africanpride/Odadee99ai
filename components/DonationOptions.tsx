import Image from "next/image";
import React from "react";

type DonationOption = {
  title: string;
  content: string;
};

const DonationOptions = () => {
  const donationOptions: DonationOption[] = [
    { title: "Cedi Account Number", content: "9040011503017" },
    { title: "Dollar Account Number", content: "9040011624841" },
    { title: "Swift Code", content: "SBICGHAC" },
    { title: "Account Name", content: "Odadee 99 Year Group" },
    { title: "Bank", content: "Stanbic Bank, Ghana" },
  ];

  return (
    <div className="p-2">
      <div className="text-primary grid md:grid-cols-5 md:gap-x-2">
        {donationOptions.map((option) => (
          <div key={option.title} className="border border-neutral-200 w-auto block p-4 rounded-md">
            <div className="font-semibold text-left text-xl whitespace-nowrap">{option.title}</div>
            <div className="text-lg whitespace-nowrap">{option.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationOptions;
