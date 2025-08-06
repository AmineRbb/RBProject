"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/app/component/header";

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

export default function PagePlayerId({ params }: { params: { playerId: string }}) {
    const [playerDetails, setPlayerDetails] = useState<PlayerData>();
    const [showMajorTournaments, setShowMajorTournaments] = useState(false);

    useEffect(() => {
        const fetchPlayerDetails = async () => {
            try {
                const res = await fetch(`/json/players/${params.playerId}.json`);
                if (!res.ok) {
                    throw new Error(`Impossible de charger les données du joueur: ${res.status}`);
                }
                const data = await res.json();
                data.results.sort((a: TournamentResult, b: TournamentResult) => {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                })
                setPlayerDetails(data);
            } catch (error) {
                setPlayerDetails(undefined);
            }
        };

        fetchPlayerDetails();
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
        return placementColors[place] || "bg-gray-300"; 
    };

    const filterMajorTournaments = (results: TournamentResult[]) => {
        const majorRanks = ["Rang S+", "Rang S", "Rang S-", "Rang A+", "Rang A", "Rang A-"];
        return showMajorTournaments
            ? results.filter((result) => majorRanks.includes(result.value))
            : results;
    };

    if (!playerDetails) {
        return (
            <div className="min-h-screen bg-gray-100">
                <Header title="Joueur non trouvé" />
                <div className="px-6 py-8">
                    <Card className="p-8 text-center">
                        <p className="text-lg text-gray-600">
                            Impossible de charger les informations de ce joueur.
                        </p>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header title={playerDetails?.name} />
            <div className="px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                    <Card className="flex flex-col gap-6 shadow-lg w-full lg:w-1/3 p-6">
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
                    <div className="w-full lg:w-2/3">
                        <Card className="p-6 bg-white shadow-lg rounded-lg">
                            <div>
                                <CardTitle className="flex justify-center text-2xl font-semibold text-gray-800 mb-6">
                                    Mains
                                </CardTitle>
                                <div className="flex justify-center flex-wrap gap-6">
                                    {
                                        playerDetails?.mains.length === 1 
                                        ? (
                                            <div className="flex justify-center w-full">
                                                <Card className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between items-center">
                                                    <Image
                                                        src={playerDetails?.mains[0]?.image}
                                                        alt={playerDetails?.mains[0]?.name}
                                                        className="rounded-md"
                                                        width={120}
                                                        height={120}
                                                        priority
                                                    />
                                                    <div className="text-center font-medium mt-2">{playerDetails?.mains[0]?.name}</div>
                                                </Card>
                                            </div>
                                        )
                                        : (
                                            playerDetails?.mains.map((character) => (
                                                <Card key={character.id} className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between items-center">
                                                    <Image
                                                        src={character.image}
                                                        alt={character.name}
                                                        className="rounded-md"
                                                        width={120}
                                                        height={120}
                                                        priority
                                                    />
                                                    <div className="text-center font-medium mt-2">{character.name}</div>
                                                </Card>
                                            ))
                                        )
                                    }
                                </div>
                            </div>
                            <div className="mt-8">
                                <CardTitle className="flex justify-center text-2xl font-semibold text-gray-800 mb-6">
                                    Secondaires
                                </CardTitle>
                                <div className="flex justify-center flex-wrap gap-6">
                                    {
                                        playerDetails?.secondaries.length === 1
                                        ? (
                                            <div className="flex justify-center w-full">
                                                <Card className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between items-center">
                                                    <Image
                                                        src={playerDetails?.secondaries[0]?.image}
                                                        alt={playerDetails?.secondaries[0]?.name}
                                                        className="rounded-md"
                                                        width={120}
                                                        height={120}
                                                        priority
                                                    />
                                                    <div className="text-center font-medium mt-2">{playerDetails?.secondaries[0]?.name}</div>
                                                </Card>
                                            </div>
                                        )
                                        : (
                                            playerDetails?.secondaries.map((character) => (
                                                <Card key={character.id} className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between items-center">
                                                    <Image
                                                        src={character.image}
                                                        alt={character.name}
                                                        className="rounded-md"
                                                        width={120}
                                                        height={120}
                                                        priority
                                                    />
                                                    <div className="text-center font-medium mt-2">{character.name}</div>
                                                </Card>
                                            ))
                                        )
                                    }
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div>
                    <Card className="p-6 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-3xl font-bold text-gray-800">Résultats</h2>
                            <button
                                onClick={() => setShowMajorTournaments(!showMajorTournaments)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition duration-300"
                            >
                                {showMajorTournaments
                                    ? "Afficher tous les tournois"
                                    : "Afficher seulement les tournois majeurs"}
                            </button>
                        </div>
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
                                    filterMajorTournaments(playerDetails?.results || []).map((result) => (
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
                                            </TableCell>
                                        </TableRow>
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
