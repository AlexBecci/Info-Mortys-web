'use client'

import { motion } from "framer-motion"
import { allCharacters } from "../functions/Functions";
import { useEffect, useState } from "react";
import { div } from "motion/react-client";

export function Home() {

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        allCharacters(setCharacters);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">


            {/* Hero Section */}
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-4xl font-bold text-green-400 mb-8">Info Mortys</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Aquí verás información básica de algunos de los personajes de la aclamada serie "Rick y Morty"
                </p>
            </div>

            {/* Character Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[800px] overflow-y-auto">
                    {characters != null ? characters.map((character) => (
                        <motion.div
                            key={character.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 flex"
                        >
                            {/* Image container - left side */}
                            <div className="relative w-1/3 aspect-square">
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                            </div>

                            {/* Content container - right side */}
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white">{character.name}</h3>
                                    <div className="text-gray-300 space-y-2">
                                        <p>Status: {character.status || 'Unknown'}</p>
                                        <p>Species: {character.species || 'Unknown'}</p>
                                        <p>Location: {character.location?.name || 'Unknown'}</p>
                                    </div>
                                </div>
                                <a href={`/character/${character.id}`} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 font-medium">
                                    Ver Más
                                </a>
                            </div>
                        </motion.div>
                    )) : (
                        <div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

