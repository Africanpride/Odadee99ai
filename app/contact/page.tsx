import List from "@/components/List";
import ListItem from "@/components/ListItem";
import { bebas, inter, poppins } from "@/utils/styles/fonts";
import { ArrowUpRight, ArrowUpRightFromCircle, ArrowUpRightFromSquare, ChevronRightCircleIcon, ChevronRightSquareIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  // List of social media links for Odade399AI
  const socials = [
    {
      platform: "TikTok",
      link: "https://www.tiktok.com/",
      description: "Our favorite social network, we use the others out of obligation",
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/",
      description: "Capture and share the world’s moments",
    },
    {
      platform: "Facebook",
      link: "https://www.facebook.com/",
      description: "Connect with friends, family and other people you know",
    },
    {
      platform: "YouTube",
      link: "https://www.youtube.com/",
      description: "Connect with friends, family and other people you know",
    },
  ];

  return (
    <React.Fragment>
      <List>
        {socials.map((social, index) => (
          <ListItem key={index} link={social.link} platform={social.platform} number={index + 1} description={social.description} />
        ))}
      </List>
    </React.Fragment>
  );
};

export default Contact;
