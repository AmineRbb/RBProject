import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";


export default function Home() {
    return (
        <main className="px-12 py-12 bg-gray-100">
            <Card >
                <CardHeader>
                    <CardTitle className="MontserratSemiTitle">
                        RABBOUCH PROJECT
                    </CardTitle>
                </CardHeader>
                <CardContent className="MontserratMedium">
                    <div className="flex flex-row">
                      <p> Les plus grands tournois de drancy </p>
                    <Image
                        src="/super_smash_bros._ultimate_logo.svg.png"
                        alt="Logo RBB"
                        className="dark:invert"
                        width={200}
                        height={200}
                        priority
                    />  
                    </div>
                    
                </CardContent>
            </Card>
        </main>
    )

}