import React, { useEffect, useState } from "react";
import { Work } from "../types";
import { pickRandomWork } from "./common";
import { API_ENDPOINT, GACHA_COOLDOWN } from "./consts";

export const useCounter = (init: number = 0) => {
  const [count, setCount] = useState(init);

  const increment = () => setCount((prevValue) => prevValue + 1);
  const decrement = () => setCount((prevValue) => prevValue - 1);

  return { count, increment, decrement };
};

export const App: React.FC<{}> = () => {
  const [work, setWork] = useState<Work | null>(null);
  const { count, increment, decrement } = useCounter(0);
  const [lastClick, setLastClick] = useState(0);

  //100msに1回しか回せないように
  const isCooldown = () => Date.now() - lastClick < GACHA_COOLDOWN;

  const pick = async () => {
    if (isCooldown()) {
      return;
    }
    const work = await pickRandomWork();
    setWork(work);
    increment();
    setLastClick(Date.now());
  };

  return (
    <section id="container">
      {work && (
        <button
          className="btn"
          // TODO: "&"を含む文字列に対応させる
          onClick={() =>
            open(
              `https://twitter.com/intent/tweet?text=アニメタイトルガチャで、${
                work ? work.title.replace("&", "＆") : ""
              }を引きました。ガチャを回した回数: ${count}回&url=https://anime-title-gacha.iamtakagi.net`,
              "_blank"
            )
          }
        >
          🐥結果をTwitterでシェアしよう
        </button>
      )}
      <button
        className="btn"
        id="random_btn"
        onClick={async () => await pick()}
      >
        🔃ガチャを回してみる
      </button>
      {work && (
        <div id="work_card">
          <p>ガチャを回した回数: {count}回</p>
          <>
            <p id="work_title">{work.title}</p>
            <p>{work.season_name_text}</p>
            <a id="work_url" href={work.official_site_url}>
              {work.official_site_url}
            </a>
            <img
              id="work_image"
              src={`${API_ENDPOINT}/works/image/${work.id}`}
              alt=""
              width={`80%`}
              height={`80%`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "./no-image.png";
              }}
            />
          </>
        </div>
      )}
      {work && (
        <button
          className="btn"
          id="random_btn"
          onClick={async () => await pick()}
        >
          🔃ガチャを回してみる
        </button>
      )}
    </section>
  );
};
