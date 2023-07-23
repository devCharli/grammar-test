import React from "react";
import Navbar from "../Navbar";

type ChildrenProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="max-w-md max-h-[844] m-auto bg-slate-50	">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
}
