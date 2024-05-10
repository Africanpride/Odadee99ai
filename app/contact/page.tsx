import List from "@/components/List";
import { bebas, inter, poppins } from "@/utils/styles/fonts";
import { ChevronRightSquareIcon } from "lucide-react";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <React.Fragment>
      <List>
        <li className="p-4 md:p-6 lg:p-4 xl:p-6">
          <div className="bg-green-500  space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex justify-between ">
            <div className="number self-center	">1</div>
            <div className={`${inter.className} social-names font-bold `}>Instagram</div>
            <div className="description self-center text-left bg-yellow-500 ">Get in touch </div>
            <div className="self-center "><ChevronRightSquareIcon /></div>
          </div>
        </li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </List>
    </React.Fragment>
  );
};

export default Contact;
