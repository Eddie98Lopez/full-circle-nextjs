import React from "react";
import Link from "next/link";
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
    <li className="text-4xl">
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
