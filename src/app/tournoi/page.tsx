'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Card, CardTitle } from '@/components/ui/card';
import { TournamentList, TournamentData } from '@/types';

import Header from '../component/header';

export default function Tournoi() {
    const router = useRouter();

    const [tournoiList, setTournoiList] = useState<TournamentList>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTournamentsData = async () => {
            try {
                const resTournois = await fetch(`/json/tournois.json`);
                if(!resTournois.ok){
                    throw new Error(`Impossible de charger les tournois: ${resTournois.status}`);
                }
                const dataTournois = await resTournois.json();
                setTournoiList(dataTournois);
                setError(null);
            } catch (error) {
                setError('Impossible de charger la liste des tournois');
                setTournoiList(undefined);
            }
        } 
        
        fetchTournamentsData();
    }, [])

    const handleClick = (page:string) => {
        router.push( '/tournoi/' + page)
    }

    const getCardColor = (rang: string) => {
        switch (rang) {
            case "S":
            case "S+":
            case "S-":
                return "border border-yellow-500 bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md";
            case "A":
            case "A-":
            case "A+":
                return "border border-red-500 bg-red-100 text-red-600 px-2 py-1 rounded-md";
            case "B":
            case "B-":
            case "B+":
                return "border border-blue-500 bg-blue-100 text-blue-600 px-2 py-1 rounded-md";
            default:
                return "border border-red-500 bg-red-100 text-red-600 px-2 py-1 rounded-md";
        }
    }

    const renderTournamentCard = (tournoi: TournamentData) => {
        return(
            <button onClick={() => handleClick(tournoi.nameForLink)} key={tournoi.id} className="w-full transform transition-transform duration-300 hover:scale-105">
                <Card className={`p-6 max-w-3xl mx-auto rounded-xl shadow-md`}>
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
                            <li className="ml-0 font-bold text-md md:text-3xl text-yellow-500">
                                1er : {tournoi.bigThree.first}
                            </li>
                            <li className="sm:ml-2 md:ml-4 font-medium text-xs md:text-xl text-gray-600">
                                2e : {tournoi.bigThree.second}
                            </li>
                            <li className="sm:ml-4 md:ml-8 text-xs sm:text-base text-gray-500">
                                3e : {tournoi.bigThree.third}
                            </li>
                        </ol>

                        </div>
                        <div className="col-span-2 flex flex-col justify-center items-center">
                            <span className="font-bold text-lg">{`${tournoi.nbJoueurs} Joueurs`}</span>
                        </div>
                        <div className="col-span-1" />
                        <div className="col-span-2" >
                        <span className={`text-gray-600 ${getCardColor(tournoi.rang)}`}>{`Rang ${tournoi.rang}`}</span>
                        </div>
                    </div>
                </Card>
            </button>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100">
                <Header title={"TOURNOIS"} />
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
            <Header title={"TOURNOIS"} />
            <div className="px-6 py-8">
                <Card className="p-6 mb-8">
                    <CardTitle className="flex justify-center text-2xl font-semibold">
                        Découvrez les tournois ayant eu lieu ou ayant prochainement lieu
                    </CardTitle>
                </Card>
                
                <div className="flex flex-col items-center space-y-6">
                    {tournoiList?.tournois.map((tournoi) => renderTournamentCard(tournoi))}
                </div>
            </div>
        </div>
    )
};