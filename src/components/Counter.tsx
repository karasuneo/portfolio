import { useState, FC } from "react";

type Props = {
  defaultCount?: number;
};

export const Counter: FC = () => {
  const [count, setCount] = useState(10);

  return (
    <>
      <button onClick={() => setCount((v) => v + 1)}>
        {`Count: ${count}`}
      </button>
    </>
  );
};
