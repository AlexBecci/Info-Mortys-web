import React, { useEffect, useState } from "react";
import { allCharacters } from "../functions/Functions";

function Home() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    allCharacters(setCharacters);
  }, []);

  return (
      <div>
        <div className="container flex justify-center mx-auto pt-16 shadow">
          <div className=" bg-slate-900 rounded shadow-md shadow-red-900">
            <p className="text-red-500 text-lg text-center font-normal pb-3 my-2">
              Info Mortys
            </p>
            <h1 className="xl:text-2xl text-lg text-center text-zinc-50 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Aquí verás información básica de algunos de los personajes de la aclamada serie "Rick y Morty"
            </h1>
          </div>
        </div>
        <div className="w-full px-5 my-5">
          <div className="mx-1 bg-neutral-800 rounded-lg shadow-lg shadow-red-900">
            <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10">
              {characters != null
                ? characters.map((character) => (
                    <div
                      key={character.id}
                      className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative"
                    >
                      <div className="bg-top bg-cover bg-no-repeat h-64 border-2 border-red-400">
                        <img src={character.image}
                          alt="Img"
                          className="p-1 h-full w-full overflow-hidden object-cover rounded shadow"
                        />
                      </div>
                      <div className="py-1 bg-rose-100 flex flex-col justify-center w-11/12 mx-auto absolute rounded-2xl shadow -mt-12 right-0 left-0">
                        <p className="text-xl text-center text-gray-800 font-normal mb-1">
                          {character.name}
                        </p>
                        <a href={`/character/${character.id}`} className="text-center text-base text-gray-600">
                          <button className="text-white bg-red-800 hover:text-black hover:bg-red-400 px-5 rounded-full">Ver Mas</button>
                        </a>
                      </div>
                    </div>
                  ))
                : "No hay personajes"}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
