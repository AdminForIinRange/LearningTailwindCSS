import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const toggleDark = document.getElementById("toggleDark");
    toggleDark.addEventListener("click", function () {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
      alert("click!");
    });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-red-400 h-12"></div>

        <div className="bg-red-400 h-12 max-md:bg-blue-300"></div>

        <button className="my-2 bg-blue-200 py-200 rounded-lg text-red-500">
          Click me
        </button>
      </div>

      <div className="card">
        <h3 className="text-base font-medium tracking-tight text-slate-900  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="mt-2 text-sm text-slate-500">ww</p>
        <button
          id="toggleDark"
          className="text-blue-500 px-4   text-sm font-medium mt-8 bg-blue-100 p-[10px] ml-10 rounded-md"
        >
          <h3 className="text-base font-medium tracking-tight text-Chestnut ">Click me</h3>
        </button>
      </div>
    </>
  );
}
