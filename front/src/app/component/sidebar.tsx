'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function SideBar() {
    const router = useRouter();


    const handlePage = (page:string) => {
        router.push( '/' + page )
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-1/4 shadow-md flex flex-col">
            <div className="MontserratSemi flex flex-col items-center gap-12 px-6 py-8">
                <div className="flex flex-row space-x-16">
                    <Image
                        src="/logoRBB.png"
                        alt="Logo RBB"
                        className="dark:invert"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                
                <div className="flex flex-col">
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('')}> Homepage</Button>
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('tournoi')}> Tournois</Button>
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('player')}> Joueurs</Button>
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('teams')}> Teams</Button>
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('regles')}> Règles</Button>
                </div>
            </div>
        </div>
    )
}