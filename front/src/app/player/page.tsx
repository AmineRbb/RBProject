'use client';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function pagePlayer() {
    const router = useRouter();

    const handleClick = (page:string) => {
        router.push( '/player/' + page)
    }

    return (
        <div>
            <div>

            </div>
            <div className="px-4 py-4 gap-4 space-y-4 bg-gray-100">
                <Card>
                    <div className="flex flex-row px-10 py-4 gap-5 items-center">
                        <div>
                            <Image
                                src="/oof logo.jpg"
                                alt="Vercel Logo"
                                className="dark:invert"
                                width={100}
                                height={24}
                                priority
                            />
                        </div>
                        <div>
                            Oof Factory
                        </div>
                    </div>
                    <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button onClick={() => handleClick("joueur1")}>
                        <Card className="">
                            <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                                <div>
                                Joueur 1                               
                                </div>
                            </div>                                                        
                        </Card>
                        </button>
                        <Card>
                            <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                            Joueur 2                               
                            </div>                        
                        </Card>
                        <Card>
                        <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                            Joueur 3                               
                            </div>
                        </Card>
                        <Card>
                        <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                            Joueur 4                               
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                            Joueur 5                               
                            </div>
                        </Card>
                    </div>
                </Card>

                <Card>
                    <div className="flex flex-row px-10 gap-5 items-center">
                        <div>
                            <Image
                                src="/oof logo.jpg"
                                alt="Vercel Logo"
                                className="dark:invert"
                                width={100}
                                height={24}
                                priority
                            />
                        </div>
                        <div>
                            Oof Factory
                        </div>
                    </div>
                    <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button >
                        <Card className="">
                            <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                                <div>
                                Joueur 1                               
                                </div>
                            </div>                                                        
                        </Card>
                        </button>
                        <Card>
                            <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                            Joueur 2                               
                            </div>                        
                        </Card>
                        <Card>
                        <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                            Joueur 3                               
                            </div>
                        </Card>
                        <Card>
                        <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                            Joueur 4                               
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-row justify-center">
                                <Image
                                    src="/diddyKongIcon.avif"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                    />
                            </div>
                            <div className="flex flex-row justify-center">
                            Joueur 5                               
                            </div>
                        </Card>
                    </div>
                </Card>
            </div>
        </div>
    )
}