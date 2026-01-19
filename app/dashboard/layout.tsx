import React from "react";
import SideNav from "../ui/dashboard/sidenav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8">
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
