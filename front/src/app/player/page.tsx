'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../component/header";



type PlayerList = {
    players:PlayerData[]
}

type PlayerData = {
    name: string,
    team: string,
    place: number,
    tier: number,
    image: string,
}

type searchList =  "default" | "team" | "rank" | "tier";

const capitalizeName = (name: string) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export default function PagePlayer() {
    const router = useRouter();

    const [playerList, setPlayerList] = useState<PlayerList>();
    const [search, setSearch] = useState<searchList>("default");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resPlayers = await fetch(`/json/players.json`);
                if(!resPlayers.ok){
                    throw new Error("Joueur non trouvé");
                }
                const dataPlayers = await resPlayers.json();
                setPlayerList(dataPlayers);
            } catch (error) {
                console.error("Erreur lors de la récupération des données : ", error)
            }
        } 
        
        fetchData();
    }, [])

    const handleClick = (page:string) => {
        router.push( '/player/' + page)
    }

    const renderPlayerCard = (player: PlayerData, extraInfo?: string) => (
        <button key={player.name} onClick={() => handleClick(player.name)} className="hover:shadow-lg transition-shadow duration-300  transform transition-transform duration-300 hover:scale-105">
            <Card className="p-2 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
                <Image
                    src={player.image}
                    alt={player.name}
                    className="rounded-full w-24 h-24 object-cover object-top"
                    width={150}
                    height={150}
                    priority
                />
                <div className="mt-2 text-center font-semibold">{capitalizeName(player.name)}</div>
                {extraInfo && (
                    <div className="mt-1 text-sm text-gray-600">{extraInfo}</div>
                )}
            </Card>
        </button>
    );
    

    const searchByDefault = () => (
        <Card className="p-4">
            <CardTitle className="text-center text-lg font-bold">Résultats</CardTitle>
            <CardContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4">
                {playerList?.players.sort((a, b) => a.name.localeCompare(b.name)).map((player) => renderPlayerCard(player))}
            </CardContent>
        </Card>
    );

    const searchByTeam = () => {
        if (!playerList) return null;

        const playerByTeam = playerList.players.reduce((acc, player) => {
            if (!acc[player.team]) {
                acc[player.team] = [];
            }
            acc[player.team].push(player);
            return acc;
        }, {} as Record<string, PlayerData[]>);

        return (
            <div className="space-y-4">
                {Object.keys(playerByTeam).map((team) => (
                    <Card key={team} className="p-4">
                        <CardTitle className="uppercase text-lg font-bold">{team}</CardTitle>
                        <CardContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4">
                            {playerByTeam[team].map((player) => renderPlayerCard(player))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    };

    const searchByRank = () => {
        if (!playerList) return null;

        const rankedPlayers = playerList.players.filter(player => player.place > 0).sort((a, b) => a.place - b.place);
        const unrankedPlayers = playerList.players.filter(player => player.place === 0);

        return (
            <Card className="p-4">
                <CardTitle className="text-center text-lg font-bold">Classement par Rang</CardTitle>
                <CardContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4">
                    {rankedPlayers.map((player) => renderPlayerCard(player, `Rang : ${player.place}`))}
                </CardContent>
                {unrankedPlayers.length > 0 && (
                    <div className="mt-6">
                        <CardTitle className="text-center text-lg font-bold">Joueurs Non Classés</CardTitle>
                        <CardContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4">
                            {unrankedPlayers.map((player) => renderPlayerCard(player, "Non Classé"))}
                        </CardContent>
                    </div>
                )}
            </Card>
        );
    };

    const searchByTier = () => {
        if (!playerList) return null;

        const playerByTier = playerList.players.reduce((acc, player) => {
            if (!acc[player.tier]) {
                acc[player.tier] = [];
            }
            acc[player.tier].push(player);
            return acc;
        }, {} as Record<string, PlayerData[]>);

        return (
            <div className="space-y-4">
                {Object.keys(playerByTier).map((tier) => (
                    <Card key={tier} className="p-4">
                        <CardTitle className="uppercase text-lg font-bold">Joueur Tier {tier}</CardTitle>
                        <CardContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4">
                            {playerByTier[tier].map((player) => renderPlayerCard(player))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    };
    

    const searchFunctions = {
        default: searchByDefault,
        team: searchByTeam,
        rank: searchByRank,
        tier: searchByTier,
    };

    return (
        <div>
            <Header title={"JOUEURS"} />
            <div className="px-4 py-4 gap-4 space-y-4">
                <Card className="px-4 py-4 gap-4 space-y-4">
                    <CardTitle className="flex justify-center">
                        Choissisez un mode de recherche
                    </CardTitle>
                    <div className="flex flex-rows-1 justify-center gap-2">
                        {["default", "team", "rank", "tier"].map((option) => (
                            <Button
                                key={option}
                                onClick={() => setSearch(option as searchList)}
                                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                                    search === option ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </Button>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="px-4 py-4 gap-4 space-y-4">
                {searchFunctions[search]?.()}
            </div>
        </div>
    )
}