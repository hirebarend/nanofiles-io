import React from "react";

export const NavbarComponent = () => {
  return (
    <div className="tw-bg-white tw-px-6 tw-py-4 lg:tw-px-24 md:tw-px-12">
      <a href="/">
        <img
          alt="Logo"
          src="/images/logo.png"
          style={{ height: window.innerWidth < 576 ? "24px" : "32px" }}
        />
      </a>
    </div>
  );
};
