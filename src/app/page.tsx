'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "./component/header";
import PlayerCarousel from "./component/Slider";
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
            <div className="px-6 py-8">
                {/* Welcome Card */}
                <div className="mb-8">
                    <Card className="mx-4 border-none shadow-md">
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
                        <CardContent className="MontserratMedium flex flex-col items-center gap-4">
                            <p className="text-center">
                                Votre référence pour suivre l&apos;actualité des tournois de Smash Bros Ultimate, découvrir le calendrier des événements à venir, et explorer les classements et performances des meilleurs joueurs.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Player Carousel */}
                <div className="mb-8">
                    <PlayerCarousel dataUrl='/json/players.json' />
                </div>

                {/* Main Content Grid */}
                <Card className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 shadow-lg">
                    {/* Planning Card */}
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="MontserratSemiTitle text-center text-2xl font-bold"> 
                                PLANNING
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="MontserratMedium flex flex-col items-center gap-4">
                            <p className="text-center">
                                Découvrir le calendrier des prochains tournois de Smash Bros Ultimate de la saison du Rabbouch Project.
                            </p>
                            <Button onClick={() => handleClick("/tournoi")} className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300"> 
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
                        <CardContent className="MontserratMedium flex flex-col items-center gap-4">
                            <p className="text-center">
                                Voir la liste des joueurs qui ont pu participé aux nombreux tournois ainsi que leurs différents résultats.
                            </p>
                            <Button onClick={() => handleClick("/player")} className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
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
                        <CardContent className="MontserratMedium flex flex-col items-center gap-4">
                            <p className="text-center">
                                La liste des tournois ayant eu lieu depuis le 27 décembre 2022.
                            </p>
                            <Button onClick={() => handleClick("/tournoi")} className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
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
                        <CardContent className="MontserratMedium flex flex-col items-center gap-4">
                            <p className="text-center">
                                Voir les règles des tournois : choix des maps, personnages...
                            </p>
                            <Button onClick={() => handleClick("/regles")} className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                                Voir Règles
                            </Button>
                        </CardContent>
                    </Card>
                </Card>
            </div>
        </main>
    );
}
