import Image from "next/image";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <Image src="/icons/nextjs-icon.svg" alt="nextjs" width="96" height="58" />
  );
};
