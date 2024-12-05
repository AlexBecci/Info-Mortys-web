import { param } from 'motion/react-client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeDetails = () => {
    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState([]);

    const params = useParams();
    useEffect(() => {
        const fetchEpisodeData = async (id) => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
                const data = await response.json();
                setEpisode(data);

                const characterPromises = data.characters.map(url => fetch(url).then(res => res.json()));
                const characterData = await Promise.all(characterPromises);
                setCharacters(characterData);
            } catch (error) {
                console.error('Error fetching episode data:', error);
            }
        };

        fetchEpisodeData(params.id);
    }, []);

    if (!episode) {
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Back Button */}
            <div className="container mx-auto px-4 py-6">
                <a href={`/`} className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Back To Home</span>
                </a>
            </div>

            {/* Episode Details */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">{episode.name}</h2>
                                <p className="text-gray-400">{episode.episode}</p>
                            </div>
                            <span className="bg-gray-700 text-gray-300 text-lg px-3 py-1 rounded-full">
                                {episode.id}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-500">Air Date</p>
                                    <p>{episode.air_date}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-500">Episode Code</p>
                                    <p>{episode.episode}</p>
                                </div>
                            </div>
                        </div>

                        {/* Characters Section */}
                        <div>
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                                <h3 className="text-xl font-semibold">Characters</h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[400px] overflow-y-auto p-1">
                                {characters && characters.map((character) => (
                                    <a href={`/character/${character.id}`}>
                                        <div key={character.id} className="bg-gray-700 rounded-lg overflow-hidden hover:ring-2 hover:ring-green-500 transition-all">
                                            <img src={character.image} alt={character.name} className="w-full h-32 object-cover" />
                                            <div className="p-2">
                                                <p className="text-sm font-medium truncate">{character.name}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeDetails;