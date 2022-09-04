import type { NextPage } from "next";
import { useEffect, useState } from "react";
import data from "../data/till-818.json";

const Home: NextPage = () => {
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    const lastSelected = localStorage.getItem("selected");
    if (lastSelected) {
      setSelected(parseInt(lastSelected));
    }
  }, []);

  return (
    <div className="w-screen flex flex-wrap justify-center">
      {Object.entries(data).map(([key, value]) => {
        const episodeNum = parseInt(key, 10) + 1;
        return (
          <div
            key={key}
            onClick={() => {
              setSelected(episodeNum);
              if (window)
                localStorage.setItem("selected", episodeNum.toString());
              window.open(value as string, "_ blank");
            }}
            className={`m-2 h-10 w-10 flex text-white cursor-pointer justify-center items-center rounded ${
              episodeNum === selected ? "bg-indigo-700" : "bg-indigo-400"
            }`}
          >
            {episodeNum}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
