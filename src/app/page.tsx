'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "./component/header";
import Sliderss from "./component/Slider";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const handleClick = (page: string) => {
        router.push(page);
    };

    return (
        <main className="bg-gray-100 w-full min-h-screen"> 
            <Header title={"HOMEPAGE"} />
            <div className="md:px-12 py-12">
                {/* Welcome Card */}
                <div className="mb-12">
                    <Card className="m-5 border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="MontserratSemiTitle text-center text-2xl font-bold">
                                <p>Bienvenue sur le site du Rabbouch Project</p>
                                <Image
                                    src={"/logoRBB.png"}
                                    alt={"logoRBB"}
                                    className="rounded-full w-32 h-32 object-cover object-top mx-auto"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                            <div className="flex flex-row text-center">
                                <p>Votre référence pour suivre l&apos;actualité des tournois de Smash Bros Ultimate, découvrir le calendrier des événements à venir, et explorer les classements et performances des meilleurs joueurs.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sliders */}
                <div className="mb-12">
                    <Sliderss json='/json/players.json' />
                </div>

                {/* Main Content Grid - Display differently on mobile */}
                <Card className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 shadow-lg">
                    {/* Planning Card */}
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="MontserratSemiTitle text-center text-2xl font-bold"> 
                                PLANNING
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                            <div className="flex flex-row text-center">
                                <p>Découvrir le calendrier des prochains tournois de Smash Bros Ultimate de la saison du Rabbouch Project.</p>
                            </div>
                            <Button onClick={() => handleClick("/tournoi")} className="flex align-center bg-blue-600 text-white hover:bg-blue-700 transition duration-300"> 
                                Voir Planning
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Joueurs Card */}
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="MontserratSemiTitle text-center text-2xl font-bold">
                                JOUEURS
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                            <div className="flex flex-row text-center">
                                <p>Voir la liste des joueurs qui ont pu participé aux nombreux tournois ainsi que leurs différents résultats.</p>
                            </div>
                            <Button onClick={() => handleClick("/player")} className="align-center bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                                Voir Joueurs
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Tournois Card */}
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="MontserratSemiTitle text-center text-2xl font-bold">
                                TOURNOIS
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                            <div className="flex flex-row text-center">
                                <p>La liste des tournois ayant eu lieu depuis le 27 décembre 2022.</p>
                            </div>
                            <Button onClick={() => handleClick("/tournoi")} className="align-center bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                                Voir Tournois
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Règles Card */}
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="MontserratSemiTitle text-center text-2xl font-bold">
                                REGLES
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                            <div className="flex flex-row text-center">
                                <p>Voir les règles des tournois : choix des maps, personnages...</p>
                            </div>
                            <Button onClick={() => handleClick("/regles")} className="align-center bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                                Voir Règles
                            </Button>
                        </CardContent>
                    </Card>
                </Card>
            </div>
        </main>
    );
}
