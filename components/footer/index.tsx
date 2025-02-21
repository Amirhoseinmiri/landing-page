import React from "react";
import CopyWrite from "./copy-write";
import EmailForm from "./email-form";
import HelperLink from "./helper-links";
import FooterLogo from "./footer-logo";

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <div className="p-5 w-full flex justify-between flex-col items-center md:flex-row gap-5 ">
        <FooterLogo />
        <HelperLink />
        <EmailForm />
      </div>
      <CopyWrite />
    </footer>
  );
};

export default Footer;
