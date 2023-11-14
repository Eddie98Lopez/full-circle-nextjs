import React from "react";
import Link from "next/link";
import styles from './Social.module.css'
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
  BiLogoTwitter,
} from "react-icons/bi";

const SocialLink = ({ link, ...props }) => {
  const { type, href } = link;
  return (
    <li >
      <Link href={href}>
        {type == "facebook" && <BiLogoFacebookCircle />}
        {type == "instagram" && <BiLogoInstagramAlt />}
        {type == "linkedIn" && <BiLogoLinkedinSquare />}
        {type == "tikTok" && <BiLogoTiktok />}
        {type == "twitter" && <BiLogoTwitter />}
      </Link>
    </li>
  );
};

export default SocialLink;
