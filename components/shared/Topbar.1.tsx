import Link from "next/link";
import React from "react";

export function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex">
        <Image
          src="/logo.svg"
          alt="logo"
          width={28}
          height={28}
        />
      </Link>
    </nav>
  );
}
