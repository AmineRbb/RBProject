import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

export default function pagePlayerId() {
    return (
        <div className="px-12 py-12 bg-gray-100">
            <div className="MontserratSemiTitle text-wrap">
                Amine
            </div> 
            <div className="flex flex-row justify-between">
                <div className="flex flex-col px-5 gap-4 MontserratMedium w-1/3 py-10">
                    <div>
                        <b>Nom :</b> Amine RABBOUCH
                    </div>
                    <div>
                        <b>Age :</b> 22 ans
                    </div>
                    <div>
                        <b>Team :</b> Team Rabbouch Project
                    </div>
                    <div>
                        <b>Commentaire :</b> osef pour le moment
                    </div>
                </div>
                <div className="w-2/3 px-5">
                    <Card className="px-5 py-3 ">
                        <div className="">
                            <CardTitle className=" flex justify-center px-2 py-3">
                            Mains
                            </CardTitle>
                            <div className="flex flex-row space-x-3 justify-center">
                                <Card className="px-2 py-2">
                                    <Image
                                        src="/diddyKongIcon.avif"
                                        alt="Vercel Logo"
                                        className="dark:invert"
                                        width={100}
                                        height={24}
                                        priority
                                    />
                                    <div  className=" flex justify-center px-2"> Diddy Kong</div>
                                </Card>
                                <Card className="px-2 py-2">
                                    <Image
                                        src="/Art_Cloud_Ultimate.webp"
                                        alt="Vercel Logo"
                                        className="dark:invert"
                                        width={100}
                                        height={24}
                                        priority
                                    />
                                    <div  className=" flex justify-center px-2"> Cloud </div>
                                </Card>
                            </div>
                        </div>
                        <div>
                        <CardTitle className=" flex justify-center px-2 py-3">
                            Secondaires
                        </CardTitle>
                        <div className="flex flex-row space-x-3 justify-center">
                                <Card className="px-2 py-2">
                                    <Image
                                        src="/diddyKongIcon.avif"
                                        alt="Vercel Logo"
                                        className="dark:invert"
                                        width={100}
                                        height={24}
                                        priority
                                    />
                                    <div className=" flex justify-center px-2"> Diddy Kong</div>
                                </Card>
                                <Card className="px-2 py-2">
                                    <Image
                                        src="/diddyKongIcon.avif"
                                        alt="Vercel Logo"
                                        className="dark:invert"
                                        width={100}
                                        height={24}
                                        priority
                                    />
                                    <div  className=" flex justify-center px-2"> Diddy Kong</div>
                                </Card>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <div>
                    Résultats
                </div>
                <Card>
                    <Table>
                        <TableHeader>
                            <TableHead> Date </TableHead>
                            <TableHead> Tournoi </TableHead>
                            <TableHead> Place </TableHead>
                            <TableHead> Valeur Tournoi </TableHead>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell> 10 Mai </TableCell>
                                <TableCell className="flex flex-row items-center justify-between"> BibiCup <Image src="/diddyKongIcon.avif" alt="Logo RBB" priority width={30} height={30} /></TableCell>   
                                <TableCell className="bg-yellow-300"> 1er </TableCell>
                                <TableCell> Petit Tournoi </TableCell>       
                            </TableRow>
                            <TableRow>
                                <TableCell> 28 Avril </TableCell>
                                <TableCell className="flex flex-row items-center justify-between"> Rabbouch Project 8 <Image src="/diddyKongIcon.avif" alt="Logo RBB" priority width={30} height={30} /></TableCell>   
                                <TableCell className="bg-yellow-700"> 3er </TableCell>
                                <TableCell> Platinium </TableCell>       
                            </TableRow>
                            <TableRow>
                                <TableCell> 28 Février </TableCell>
                                <TableCell className="flex flex-row items-center justify-between"> Rabbouch Project 7 <Image src="/diddyKongIcon.avif" alt="Logo RBB" priority width={30} height={30} /></TableCell>  
                                <TableCell className="bg-gray-400"> 2er </TableCell>
                                <TableCell> SuperMajor </TableCell>       
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </div>
    )
}