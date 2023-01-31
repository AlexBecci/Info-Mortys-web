import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleCharacter } from "../functions/Functions";
import { Link } from "react-router-dom";

function Character() {
  const [character, setCharacter] = useState(null);

  const params = useParams();
  useEffect(() => {
    singleCharacter(params.id, setCharacter);
  }, []);
  return (
    <>
      {character != null ? (
        <section className="text-zinc-50 body-font">
          <div className="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pl-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-slate-900 rounded-xl shadow-lg shadow-red-900">
              <div className="flex justify-center pb-10">
                <Link to="/">
                  <button className="inline-flex text-white font-bold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg my-5">
                    Volver
                  </button>
                </Link>
              </div>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
               Name: <span className="text-red-500"> {character.name}</span>  
              </h1>
              <p className="mb-4 leading-relaxed text-2xl">
              Status: <span className="text-red-500">{character.status}</span>
              </p>
              <p className="mb-4 leading-relaxed text-2xl">
              Species: <span className="text-red-500">{character.species}</span>
              </p>
              <p className="mb-4 leading-relaxed text-2xl">
              Gender: <span className="text-red-500">{character.gender}</span>
              </p>
              <p className="mb-4 leading-relaxed text-2xl">
              Origin: <span className="text-red-500">{character.origin.name}</span>
              </p>
              <p className="mb-4 leading-relaxed text-2xl">
              Location: <span className="text-red-500">{character.location.name}</span>
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mx-5">
              <img
                className="object-cover object-center rounded  shadow-2xl"
                alt="hero"
                src={character.image}
              />
            </div>
          </div>
        </section>
      ) : (
        "No hay personaje"
      )}
    </>
  );
}

export default Character;
