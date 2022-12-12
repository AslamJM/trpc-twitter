import React from "react";

export default function Container({
  children,
  classnames = "",
}: {
  children: React.ReactNode;
  classnames?: string;
}) {
  return (
    <div className={`m-auto max-w-xl bg-slate-200 ${classnames}`}>
      {children}
    </div>
  );
}
