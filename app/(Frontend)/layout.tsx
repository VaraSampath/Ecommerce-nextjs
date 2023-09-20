import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Navbar</h1>
      {children}
      <h1>Footer</h1>
    </>
  );
};

export default layout;
