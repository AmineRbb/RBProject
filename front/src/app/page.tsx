import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Header from "./component/header";


export default function Home() {
    
    return (
        <main>
            <Header title={"HOMEPAGE"} />
            <div className="px-12 py-12">
            <Card className="grid grid-cols-2 grid-rows-6 gap-4 max-w-full"
          style={{
            gridTemplateAreas: `
              "a ."
              "a b"
              ". b"
              "c ."
              "c d"
              ". d"
              "e ."
              "e ."
            `,
          }}>
            <Card className="m-5 border-none shadow-none" style={{ gridArea: "a" }}>
                <CardHeader>
                    <CardTitle className="MontserratSemiTitle text-center">
                        PLANNING
                    </CardTitle>
                </CardHeader>
                <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                    <div className="flex flex-row text-center">
                      <p> Découvrer le calendrier des prochains tournois de smash bros ultimate de la saison 
                        du Rabbouch Project </p>

                    </div>
                    <Button  className="flex align-center">
                        Voir Planning
                    </Button>
                    
                </CardContent>
            </Card>

            <Card className="m-5 border-none shadow-none" style={{ gridArea: "b" }}>
                <CardHeader>
                    <CardTitle className="MontserratSemiTitle text-center">
                        JOUEURS
                    </CardTitle>
                </CardHeader>
                <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                    <div className="flex flex-row text-center">
                      <p> Voir la liste des joueurs qui ont participé aux tournois ainsi que leurs résultats </p>

                    </div>
                    <Button  className="align-center">
                        Voir Joueurs
                    </Button>
                </CardContent>
            </Card>
            <Card className="m-5 border-none shadow-none" style={{ gridArea: "c" }}>
                <CardHeader>
                    <CardTitle className="MontserratSemiTitle text-center">
                        TOURNOIS
                    </CardTitle>
                </CardHeader>
                <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                    <div className="flex flex-row text-center">
                      <p> La liste des tournois ayant eu lieu dans depuis 27 décembre 2022 </p>

                    </div>
                    <Button  className="align-center">
                        Voir Tournois
                    </Button>
                </CardContent>
            </Card>

            <Card className="m-5 border-none shadow-none" style={{ gridArea: "d" }}>
                <CardHeader>
                    <CardTitle className="MontserratSemiTitle text-center">
                        REGLES
                    </CardTitle>
                </CardHeader>
                <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                    <div className="flex flex-row text-center">
                      <p> Voir les règles des tournois : choix des maps, personnages ... </p> 
                    </div>
                    <Button  className="align-center">
                        Voir Règles
                    </Button>
                </CardContent>
            </Card>

            <Card className="m-5 border-none shadow-none" style={{ gridArea: "e" }}>
                <CardHeader>
                    <CardTitle className="MontserratSemiTitle text-center">
                        RANKING
                    </CardTitle>
                </CardHeader>
                <CardContent className="MontserratMedium flex flex-col align-center gap-3">
                    <div className="flex flex-row text-center">
                      <p> Découvrer le classement des meilleurs joueurs depuis 2022 </p>
                    </div>
                    <Button  className="align-center">
                        Voir Ranking
                    </Button>
                    
                </CardContent>
            </Card>
            </Card>
            </div>
        </main>
    )

}