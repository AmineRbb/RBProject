'use client'
import Header from "@/app/component/header";
import { Card, CardTitle } from "@/components/ui/card";
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Joueur = {
    name: string,
    team: string,
    imageMain: string,
    seeding: number,
    place: string,
}

type Tournament = {
    name: string,
    nbJoueurs: number,
    startgg: string,
    date: string,
    rank: string,
    logo: string,
    joueurs: Joueur[]
}

export default function TournoiId({ params }: { params: { tournoiId: string }}) {

    const [tournamentDetails, setTournamentDetails] = useState<Tournament>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTournamentData = async () => {
            try {
                const res = await fetch(`/json/tournois/${params.tournoiId}.json`);
                if (!res.ok) {
                    throw new Error(`Impossible de charger les données du tournoi: ${res.status}`);
                }
                const data = await res.json();
                setTournamentDetails(data);
                setError(null);
            } catch (error) {
                setError('Impossible de charger les informations de ce tournoi');
                setTournamentDetails(undefined);
            }
        };
    
        fetchTournamentData();
    }, [params.tournoiId]); 
    
    const groupedPlayers = tournamentDetails?.joueurs.reduce((acc, joueur) => {
        acc[joueur.place] = acc[joueur.place] || [];
        acc[joueur.place].push(joueur);
        return acc;
    }, {} as { [place: string]: Joueur[] });

    const getColorForPlacement = (place: string) => {
        const placementColors: Record<string, string> = {
            "1": "bg-yellow-200",
            "2": "bg-gray-200",
            "3": "bg-orange-200",
            "4": "bg-orange-300",
            "5-6": "bg-blue-200",
            "7-8": "bg-blue-300",
            "9-12": "bg-purple-200",
            "13-16": "bg-purple-300",
            "17-24": "bg-gray-300",
            "25-32": "bg-gray-500",
            "33-40": "bg-gray-600",
            "41": "bg-indigo-500",
        };
        return placementColors[place] || "bg-gray-300"; 
    };

    const sortedPlayersBySeeding = tournamentDetails?.joueurs.sort((a, b) => a.seeding - b.seeding);

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100">
                <Header title="Tournoi non trouvé" />
                <div className="px-6 py-8">
                    <Card className="p-8 text-center">
                        <p className="text-lg text-red-600">{error}</p>
                    </Card>
                </div>
            </div>
        );
    }

    return (
    <div className="min-h-screen bg-gray-100">
        <Header title={tournamentDetails?.name} />
        <div className="px-6 py-8">
                {/* Informations générales du tournoi */}
                <Card className="mb-8 p-8 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col gap-6 mb-8 md:mb-0 md:w-2/3">
                            <div><b>Nom :</b> {tournamentDetails?.name}</div>
                            <div><b>Date :</b> {tournamentDetails?.date}</div>
                            <div><b>Rang :</b> {tournamentDetails?.rank}</div>
                            <div><b>Nombre de joueurs :</b> {tournamentDetails?.nbJoueurs}</div>
                            <div>
                                <b>Lien StartGG :</b> 
                                <a 
                                href={tournamentDetails?.startgg} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 underline ml-2"
                                >
                                {tournamentDetails?.startgg}
                                </a>
                            </div>
                        </div>
                        {tournamentDetails?.logo && (
                            <div className="w-full md:w-1/3 flex items-center justify-center">
                                <Image src={tournamentDetails.logo} alt="Logo du tournoi" width={150} height={150} className="rounded-lg shadow-lg" />
                            </div>
                        )}
                    </div>
                </Card>

                {/* Grille des joueurs */}
                <div className="mt-8">
                    <Card className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Liste des joueurs</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                            {sortedPlayersBySeeding?.map((joueur, index) => (
                                <Card key={index} className="p-6 flex flex-row items-center justify-center shadow-md">
                                    <Image
                                        src={joueur.imageMain}
                                        alt={joueur.name}
                                        width={50}
                                        height={50}
                                        className="rounded-md mb-2"
                                        priority
                                    />
                                    <CardTitle className="text-lg font-semibold text-gray-800">
                                        {joueur.name}
                                    </CardTitle>
                                </Card>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Tableau du classement final */}
                <div className="mt-8">
                    <Card className="p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Classement Final</h2>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow className="bg-gray-200">
                                    <TableHead className="py-4 px-6 text-left">Place</TableHead>
                                    <TableHead className="py-4 px-6 text-left">Nom des joueurs</TableHead>
                                    <TableHead className="py-4 px-6 text-left">Équipe</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.keys(groupedPlayers || {})
                                    .sort((a, b) => parseInt(a) - parseInt(b))
                                    .map((place) => (
                                        groupedPlayers?.[place].map((joueur, jIndex) => (
                                            <TableRow key={`${place}-${jIndex}`} className={`hover:bg-gray-100 transition-colors ${getColorForPlacement(place)}`}>
                                                <TableCell className="py-4 px-6 font-semibold">
                                                    {jIndex === 0 ? place : ""}
                                                </TableCell>
                                                <TableCell className="py-4 px-6 flex items-center space-x-4">
                                                    <Image
                                                        src={joueur.imageMain}
                                                        alt={joueur.name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                    />
                                                    <span>{joueur.name}</span>
                                                </TableCell>
                                                <TableCell className="py-4 px-6">{joueur.team}</TableCell>
                                            </TableRow>
                                        ))
                                    ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>

            </div>
    </div>
    )
}