import * as React from "react";

import { Topbar } from "@/src/components/topbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <React.Fragment>
      <Topbar />
      {children}
    </React.Fragment>
  );
}
