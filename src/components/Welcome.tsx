import type { FC } from "react";

export const Welcome: FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-orange-200 ">
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="text-6xl text-white">Yurayura</h1>
        </div>
        <div className="w-88 mt-8 text-center">
          <p >
            大学生水谷祐生のポートフォリオサイトです
            <br />
            これまでに手がけた制作物、身につけたスキルをまとめています。
            <br />
            あなたに、私のことをもっと深く知ってほしいと思って作りました。
            <br />
            どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。
          </p>
        </div>
      </div>
    </div>
  );
};
