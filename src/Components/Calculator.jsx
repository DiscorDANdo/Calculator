import { useState } from "react";

export function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "." && input.includes(".")) return; // Evita adicionar mais de um ponto decimal
    setInput(input + value);
  };

  const calculate = () => {
    try {
      const result = new Function(`return ${input}`)();
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
      }
    };

  return (
    <div className="flex justify-center items-center h-1/2 p-14">
      {/* Fundo calculadora */}
      <div className="grid shadow-md text-2xl font-bold w-90 h-full">
        {/* Barra de input */}
        <div className="bg-[#CCD5AE] text-white min-h-45 grow flex flex-col justify-center items-end p-8 gap-4">
          {/* Valor do input */}
          <span className="flex w-fit justify-end text-xl">{input}</span>
          <div className="flex justify-between w-full items-center text-5xl">
            {/* Simbolo de igual */}
            <span>=</span>
          </div>
        </div>
        {/* Barra de input */}
        
        {/* Botões da calculadora */}
        <div className="bg-white grow h-100 grid grid-cols-[1fr_3fr]">
          <div className="grid grid-rows-2 h-full">
            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]" onClick={() => handleClick("+")}>
            +
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]" onClick={calculate}>
              =
            </button>
          </div>

          <div className="grid items-start grid-cols-3 p-4">
            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("7")}>
              7
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("8")}>
              8
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("9")}>
              9
            </button> 
            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("4")}>
              4
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("5")}>
              5
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("6")}>
              6
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("1")}>
              1
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("2")}>
              2
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("3")}>
              3
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => setInput("")}>
              C
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("0")}>
              0
            </button>

            <button className="flex justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick(".")}>
              ,
            </button>
          </div>
          

          
        </div>
      </div>
    </div>
  );
}