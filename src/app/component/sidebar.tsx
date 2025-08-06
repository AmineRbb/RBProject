'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';

export default function SideBar() {
    const router = useRouter();

    const handlePage = (page: string) => {
        router.push(`/${page}`);
    };

    return (
        <>
            <div className="hidden md:flex md:flex-col md:h-screen w-full bg-white border-r border-gray-200 shadow-sm">
                <div className="flex flex-col items-center gap-6 px-6 py-8">
                    <div className="flex flex-row space-x-4 mb-6">
                        <Image
                            src="/logoRBB.png"
                            alt="Logo RBB"
                            className="rounded-lg"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>

                    <nav className="flex flex-col items-center space-y-3 w-full">
                        <Button 
                            variant="ghost" 
                            className="w-full justify-start p-4 h-auto" 
                            onClick={() => handlePage('')}
                        >
                            <HomeIcon className="mr-3 h-5 w-5" />
                            Homepage
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="w-full justify-start p-4 h-auto" 
                            onClick={() => handlePage('tournoi')}
                        >
                            <StarIcon className="mr-3 h-5 w-5" />
                            Tournois
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="w-full justify-start p-4 h-auto" 
                            onClick={() => handlePage('player')}
                        >
                            <PersonIcon className="mr-3 h-5 w-5" />
                            Joueurs
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="w-full justify-start p-4 h-auto" 
                            onClick={() => handlePage('teams')}
                        >
                            <GroupsIcon className="mr-3 h-5 w-5" />
                            Teams
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="w-full justify-start p-4 h-auto" 
                            onClick={() => handlePage('regles')}
                        >
                            <DescriptionIcon className="mr-3 h-5 w-5" />
                            Règles
                        </Button>
                    </nav>
                </div>
            </div>

            <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
                <div className="flex justify-between items-center p-4">
                    <Image
                        src="/logoRBB.png"
                        alt="Logo RBB"
                        className="rounded-lg"
                        width={40}
                        height={40}
                        priority
                    />
                    
                    <div className="flex space-x-2">
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex flex-col items-center p-3 min-w-[60px]" 
                            onClick={() => handlePage('')}
                        >
                            <HomeIcon className="h-4 w-4" />
                            <span className="text-xs mt-1">Home</span>
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex flex-col items-center p-3 min-w-[60px]" 
                            onClick={() => handlePage('tournoi')}
                        >
                            <StarIcon className="h-4 w-4" />
                            <span className="text-xs mt-1">Tournois</span>
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex flex-col items-center p-3 min-w-[60px]" 
                            onClick={() => handlePage('player')}
                        >
                            <PersonIcon className="h-4 w-4" />
                            <span className="text-xs mt-1">Joueurs</span>
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex flex-col items-center p-3 min-w-[60px]" 
                            onClick={() => handlePage('teams')}
                        >
                            <GroupsIcon className="h-4 w-4" />
                            <span className="text-xs mt-1">Teams</span>
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex flex-col items-center p-3 min-w-[60px]" 
                            onClick={() => handlePage('regles')}
                        >
                            <DescriptionIcon className="h-4 w-4" />
                            <span className="text-xs mt-1">Règles</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
