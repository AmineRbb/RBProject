import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../component/header";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Regles() {
    return (
        <div className="pb-8">
            <Header title={"REGLES"} />
            <div className="container mx-auto px-4 pt-8">
                <Card className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-gray-800">
                            Les Règles
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-700">
                        Découvrez les règles des tournois et le déroulement des matchs dans le Rabbouch Project.
                    </CardContent>
                </Card>
                <Card className="bg-white shadow-lg rounded-lg p-6">
                    <CardContent>
                        <Accordion type="multiple" className="space-y-4">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-xl font-semibold text-blue-600">
                                    Déroulement tournoi
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 mt-2 leading-relaxed">
                                    <p className="mb-4">
                                        <strong>La phase de pool :</strong> Les 28 joueurs sont répartis en fonction du seeding en 8 groupes de 5 joueurs.
                                        À l'issue de la phase de poules, les 2 premiers de chaque groupe iront en winner bracket, les 2 derniers en loser bracket.
                                        Les matchs se déroulent en Best of 3 en fonction des règles de bannissements de terrains ci-dessous.
                                    </p>
                                    <p>
                                        <strong>La phase de brackets :</strong> Les joueurs sont répartis en fonction de leurs résultats de pools.
                                        Les matchs se déroulent en Best of 5. La moitié dans l'arbre winner, l'autre dans l'arbre loser. 
                                        Ceux qui perdent un match en winner bracket sont envoyés dans la loser brackets, ceux qui perdent en loser bracket sont définitivement éliminés.
                                        La finale du tournoi a lieu entre le dernier joueur de la winner bracket et le dernier joueur de la loser bracket.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-xl font-semibold text-blue-600">
                                    Déroulement d'un match
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 mt-2 leading-relaxed">
                                    <Image
                                        src={"/reglesmatch.png"}
                                        alt={"Règles Match"}
                                        className="rounded-lg w-7/12 h-auto mx-auto mb-4"
                                        width={300}
                                        height={300}
                                        priority
                                    />
                                    <p className="mb-4 text-center">
                                        Les règles lors d'un set de Smash Bros Ultimate dans le Rabbouch Project X sont indiquées ci-dessous.
                                        En cas de timeout (le temps arrive à 0), c'est celui avec le plus de vies qui remporte le match. 
                                        Si les deux joueurs ont le même nombre de vies, celui qui a le moins de pourcentage de dommages gagne.
                                    </p>
                                    <p className="text-center">
                                        Concernant les personnages jouables, il n'y a pas de restrictions : tout le monde peut jouer tous les personnages.
                                        Toutefois, avant de bannir les stages, les deux joueurs doivent annoncer leurs personnages.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
