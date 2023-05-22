import type { FC } from "react";

export const Header: FC = () => {
  return (
    <>
      {" "}
      <div className="sticky top-0 z-50 bg-white bg-opacity-60 ">
        <div className="flex justify-between  p-4 max-w-6xl mx-auto">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">タイトル</h2>
          </div>
          <div className="flex flex-row space-x-5">
            <a className="">トップ</a>
            <a className="">このサイト</a>
            <a className="">ポートフォリオ</a>
            <a className="">連絡先</a>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-orange-200">
      </div>

      <div className="w-screen h-screen bg-red-200">
      </div>
    </>
  );
};
