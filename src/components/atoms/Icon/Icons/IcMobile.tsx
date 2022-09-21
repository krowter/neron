import React from "react";
import { ISVGProps } from "../../../../utils";

function IcMobile({ ...rest }: ISVGProps) {
  return (
    <svg {...rest} viewBox="64 64 896 896">
      <path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"></path>
    </svg>
  );
}

export default IcMobile;
