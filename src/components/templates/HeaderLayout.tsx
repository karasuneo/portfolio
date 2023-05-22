import type { FC, ReactNode } from "react";

import { Header } from "../Header";

type Props = {
  children?: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div>{children}</div>
    </>
  );
};
