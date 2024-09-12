'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Header() {
    const router = useRouter();

    const handlePage = (page:string) => {
        router.push( '/' + page )
    };

    return (
        <div className="sticky static top-0 bg-white bg-blue-300">
            <div className="MontserratSemi flex flex-row items-center shadow justify-between gap-4 px-6 py-4">
                <div className="flex flex-row ml-8 space-x-16">
                    <Image
                        src="/logo RBB.png"
                        alt="Logo RBB"
                        className="dark:invert"
                        width={75}
                        height={50}
                        priority
                    />

                </div>
                
                <div className="flex space-x-4 mr-16">
                    <Button variant="ghost" onClick={() => handlePage('')}> HomePage</Button>
                    <Button variant="ghost" onClick={() => handlePage('')}> Tournois</Button>
                    <Button variant="ghost" onClick={() => handlePage('player')}> Joueurs</Button>
                    <Button variant="ghost" onClick={() => handlePage('')}> Règles</Button>
                </div>
            </div>
        </div>
    )
}