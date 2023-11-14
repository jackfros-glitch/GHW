import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="auth-container">{children}</div>;
};

export default Layout;
