'use client'
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../component/header";

type TournoiList = {
    tournois:TournoiData[]
}

type TournoiData = {
    id:number,
    name:string,
    nameForLink:string,
    logo:string,
    nbJoueurs:number,
    rang:string,
    date:string
    bigThree:BigThree
}

type BigThree = {
    first:string,
    second:string,
    third:string
}

export default function Tournoi() {
    const router = useRouter();

    const [tournoiList, setTournoiList] = useState<TournoiList>();
    //const [search, setSearch] = useState<searchList>("default");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resTournois = await fetch(`/json/tournois.json`);
                if(!resTournois.ok){
                    throw new Error("Joueur non trouvé");
                }
                const dataTournois = await resTournois.json();
                setTournoiList(dataTournois);
            } catch (error) {
                console.error("Erreur lors de la récupération des données : ", error)
            }
        } 
        
        fetchData();
    }, [])

    const handleClick = (page:string) => {
        router.push( '/tournoi/' + page)
    }

    const getCardColor = (rang: string) => {
        switch (rang) {
            case "S":
            case "S+":
            case "S-":
                return "border border-yellow-500 bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md"; // Couleur pour le rang S
            case "A":
            case "A-":
            case "A+":
                return "border border-red-500 bg-red-100 text-red-600 px-2 py-1 rounded-md"; // Couleur pour le rang A
            case "B":
            case "B-":
            case "B+":
                return "border border-blue-500 bg-blue-100 text-blue-600 px-2 py-1 rounded-md"; // Couleur pour le rang B
            default:
                return "border border-red-500 bg-red-100 text-red-600 px-2 py-1 rounded-md"; // Couleur par défaut
        }
    }

    const renderTournamentCard = (tournoi:TournoiData) => {
        return(
            <button onClick={() => handleClick(tournoi.nameForLink)} key={tournoi.id} className="w-full transform transition-transform duration-300 hover:scale-105">
                <Card className={`p-6 m-4 max-w-3xl mx-auto rounded-xl shadow-md`}>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-1">
                            <Image
                                src={tournoi.logo}
                                alt={tournoi.name}
                                className="rounded-full"
                                width={100}
                                height={100}
                                priority
                            />
                        </div>
                        <div className="col-span-3 flex flex-col justify-center items-start">
                            <h2 className="text-2xl font-bold">{tournoi.name}</h2>
                            <p className="text-gray-700">{tournoi.date}</p>
                        </div>
                        <div className="col-span-2">
                            <ol className="ml-4">
                                <li className="ml-0 font-bold text-3xl text-yellow-500">1er : {tournoi.bigThree.first}</li>
                                <li className="ml-4 font-medium text-xl text-gray-600">2e : {tournoi.bigThree.second}</li>
                                <li className="ml-8 text-md text-gray-500">3e : {tournoi.bigThree.third}</li>
                            </ol>
                        </div>
                        <div className="col-span-2 flex flex-col justify-center items-center">
                            <span className="font-bold text-lg">{`${tournoi.nbJoueurs} Joueurs`}</span>
                        </div>
                        <div className="col-span-1" />
                        <div className="col-span-1" >
                        <span className={`text-gray-600 ${getCardColor(tournoi.rang)}`}>{`Rang ${tournoi.rang}`}</span>
                        </div>
                    </div>
                </Card>
            </button>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header title={"TOURNOIS"} />
            <div className="px-4 py-6">
                <Card className="px-4 py-6 mb-6">
                    <CardTitle className="flex justify-center text-2xl font-semibold">
                        Découvrez les tournois ayant eu lieu ou ayant prochainement lieu
                    </CardTitle>
                </Card>
            </div>
            <div className="flex flex-col items-center space-y-6">
                {tournoiList?.tournois.map((tournoi) => renderTournamentCard(tournoi))}
            </div>
        </div>
    )
};