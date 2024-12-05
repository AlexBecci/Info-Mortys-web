import { ArrowLeft, Calendar, Globe2, MapPin, User2, Users } from 'lucide-react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { singleCharacter } from '../functions/Functions';

/* interface Episode {
  url: string
}

interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: Episode[]
  url: string
  created: string
} */

export function CharacterDetails() {
    // Example character data
    const [character, setCharacter] = useState(null);

    const params = useParams();
    useEffect(() => {
        singleCharacter(params.id, setCharacter);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900">


            {/* Back Button */}
            <div className="container mx-auto px-4 py-6">
                <a
                    href="/"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    <span>Back</span>
                </a>
            </div>

            {character && (


                <div className="container mx-auto px-4 py-8">
                    <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            {/* Image Section */}
                            <div className="md:w-1/3 relative">
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent md:bg-gradient-to-r" />
                            </div>

                            {/* Info Section */}
                            <div className="md:w-2/3 p-8">
                                <div className="space-y-6">
                                    {/* Header */}
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2">{character.name}</h2>
                                        <div className="flex items-center space-x-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${character.status === 'Alive'
                                                ? 'bg-green-500/20 text-green-400'
                                                : 'bg-red-500/20 text-red-400'
                                                }`}>
                                                {character.status}
                                            </span>
                                            <span className="text-gray-400">{character.species}</span>
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center text-gray-300">
                                                <User2 className="w-5 h-5 mr-3 text-gray-500" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Gender</p>
                                                    <p>{character.gender}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center text-gray-300">
                                                <Globe2 className="w-5 h-5 mr-3 text-gray-500" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Origin</p>
                                                    <p>{character.origin.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center text-gray-300">
                                                <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Location</p>
                                                    <p>{character.location.name}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center text-gray-300">
                                                <Calendar className="w-5 h-5 mr-3 text-gray-500" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Created</p>
                                                    <p>{new Date(character.created).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Episodes Section */}
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <Users className="w-5 h-5 mr-2 text-gray-500" />
                                            <h3 className="text-xl font-semibold text-white">Episodes</h3>
                                        </div>
                                        <div className="bg-gray-900/50 rounded-xl p-4">
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[200px] overflow-y-auto">
                                                {character.episode.map((_, index) => (
                                                    <a href={`/episode/${index + 1}`}>
                                                        <div
                                                            key={index}
                                                            className="px-3 py-2 bg-gray-800/50 rounded-lg text-gray-400 text-sm hover:bg-gray-700/50 transition-colors cursor-pointer"
                                                        >
                                                            Episode {index + 1}
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
