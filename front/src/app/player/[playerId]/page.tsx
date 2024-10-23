"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import amine from "../../../../public/json/players/amine.json"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type PlayerData = {
    id: number;
    name: string;
    age: string;
    team: string;
    photo: string;
    commentary: string;
    mains: Character[];
    secondaries: Character[];
    results: TournamentResult[];
}

type Character = {
    id: number;
    name: string;
    image: string;
}

type TournamentResult = {
    id: number;
    name: string;
    placement: Placement;
    value: string;
    date: string; // Format YYYY-MM-DD
}

type Placement = {
    place: string;
    wins: string[];
    lose: string[]
}

const capitalizeName = (name: string) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export default function pagePlayerId({ params }: { params: { playerId: string }}) {
    const router = useRouter();

    const [playerDetails, setPlayerDetails] = useState<PlayerData>();

    useEffect(() => {
    const fetchPlayerData = async () => {
        try {
            const res = await fetch(`/json/players/${params.playerId}.json`);
            if (!res.ok) {
                throw new Error("Joueur non trouvé");
            }
            const data = await res.json();
            data.results.sort((a: TournamentResult, b: TournamentResult) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
            console.log(data)
            setPlayerDetails(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    fetchPlayerData(); // Appelle la fonction pour récupérer les données
}, [params.playerId]); 

const getColorForPlacement = (place: string) => {
    const placementColors: Record<string, string> = {
        "1": "bg-yellow-400",
        "2": "bg-gray-400",
        "3": "bg-yellow-600",
        "4": "bg-orange-400",
        "5-6": "bg-blue-400",
        "7-8": "bg-blue-700",
        "9-12": "bg-purple-400",
        "13-16": "bg-purple-600",
        "17-24": "bg-gray-600",
        "25-32": "bg-gray-800",
        "33-40": "bg-gray-950",
        "41": "bg-indigo-500",
    };
    return placementColors[place] || "bg-gray-300"; // Couleur par défaut
};

    return (
        <div>
            <div className="bg-white">
                    <div className="MontserratSemiTitle p-3 ml-5 uppercase">
                        {playerDetails?.name}
                    </div>
            </div>
        <div className="px-12 py-12">
           <div className="flex flex-row items-center justify-center m-12 space-x-8">
                <div className="w-full flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-25 blur-lg"></div>
                        <div className="relative w-full h-96 overflow-hidden">
                            <Image
                            src={playerDetails?.photo}
                            alt={playerDetails?.name}
                            className="rounded-full border-4 border-white shadow-lg"
                            width={2000}
                            height={500}
                            priority
                        />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between mb-12">
                <Card className="flex flex-col px-5 gap-6 shadow-lg w-1/3 py-10">
                    <div className="text-lg">
                        <b className="text-gray-700">Nom :</b> {playerDetails?.name}
                    </div>
                    <div className="text-lg">
                        <b className="text-gray-700">Âge :</b> {playerDetails?.age}
                    </div>
                    <div className="text-lg">
                        <b className="text-gray-700">Équipe :</b> {playerDetails?.team}
                    </div>
                    <div className="text-lg">
                        <b className="text-gray-700">Commentaire :</b> {playerDetails?.commentary}
                    </div>
                    <div className="text-lg">
                        <b className="text-gray-700">Participations :</b> {playerDetails?.results.length}
                    </div>
                </Card>
                <div className="w-2/3 px-5">
                    <Card className="px-5 py-3 bg-white shadow-lg rounded-lg">
                        <div>
                            <CardTitle className="flex justify-center text-2xl font-semibold text-gray-800 px-2 py-3">
                                Mains
                            </CardTitle>
                            <div className="flex flex-row space-x-4 justify-center">
                                {
                                    playerDetails?.mains.map((character) => (
                                        <Card key={character.id} className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
                                            <Image
                                                src={character.image}
                                                alt={character.name}
                                                className="rounded-md"
                                                width={100}
                                                height={100}
                                                priority
                                            />
                                            <div className="text-center font-medium mt-2">{character.name}</div>
                                        </Card>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mt-8">
                            <CardTitle className="flex justify-center text-2xl font-semibold text-gray-800 px-2 py-3">
                                Secondaires
                            </CardTitle>
                            <div className="flex flex-row space-x-4 justify-center">
                                {
                                    playerDetails?.secondaries.map((character) => (
                                        <Card key={character.id} className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
                                            <Image
                                                src={character.image}
                                                alt={character.name}
                                                className="rounded-md"
                                                width={100}
                                                height={100}
                                                priority
                                            />
                                            <div className="text-center font-medium mt-2">{character.name}</div>
                                        </Card>
                                    ))
                                }
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <Card className="p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Résultats</h2>
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow className="bg-gray-200">
                                <TableHead className="py-3 text-left">Date</TableHead>
                                <TableHead className="py-3 text-left">Tournoi</TableHead>
                                <TableHead className="py-3 text-left">Place</TableHead>
                                <TableHead className="py-3 text-left">Rang</TableHead>
                                <TableHead className="py-3 text-left">Victoires</TableHead>
                                <TableHead className="py-3 text-left">Défaites</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                playerDetails?.results.map((result) => (
                                    <TableRow key={result.id} className="hover:bg-gray-100 transition-colors">
                                        <TableCell>{result.date}</TableCell>
                                        <TableCell className="flex items-center">
                                            {result.name}
                                        </TableCell>
                                        <TableCell className={`py-2 text-center text-xl font-bold text-white rounded-lg shadow-md ${getColorForPlacement(result.placement.place)}`}>{result.placement.place}</TableCell>
                                        <TableCell className="py-2">{result.value}</TableCell>
                                        <TableCell className="py-2">
                                                <ul className="list-disc pl-5">
                                                    {result.placement.wins.map((win, index) => (
                                                        <li key={index} className="text-green-600">{capitalizeName(win)}</li>
                                                    ))}
                                                </ul>
                                            </TableCell>
                                            <TableCell className="py-2">
                                                <ul className="list-disc pl-5">
                                                    {result.placement.lose.map((lose, index) => (
                                                        <li key={index} className="text-red-600">{capitalizeName(lose)}</li>
                                                    ))}
                                                </ul>
                                            </TableCell>                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </div>
    </div>
    )
}