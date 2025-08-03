'use client';
// app/component/sidebar.tsx
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
        <div className="fixed top-0 left-0 md:h-screen w-full md:w-1/4 shadow-md flex flex-col bg-white z-10">
            <div className="flex flex-col items-center gap-6 md:px-4 pt-8 md:py-8 sticky">
                {/* Logo visible uniquement sur les grands écrans (lg) */}
                <div className="hidden md:flex flex-row space-x-4 mb-6">
                    <Image
                        src="/logoRBB.png"
                        alt="Logo RBB"
                        className="dark:invert"
                        width={100}
                        height={100}
                        priority
                    />
                </div>

                {/* Texte avec icônes visible uniquement sur les grands écrans (md) */}
                <div className="hidden md:flex flex-col items-center space-y-4">
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('')}>
                        <HomeIcon /> Homepage
                    </Button>
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('tournoi')}>
                        <StarIcon /> Tournois
                    </Button>
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('player')}>
                        <PersonIcon /> Joueurs
                    </Button>
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('teams')}>
                        <GroupsIcon /> Teams
                    </Button>
                    <Button variant="ghost" className="text-center" onClick={() => handlePage('regles')}>
                        <DescriptionIcon /> Règles
                    </Button>
                </div>

                {/* Icônes visibles uniquement sur les petits écrans (sm) */}
                <div className="md:hidden flex flex-row justify-evenly mt-6 py-2">
                    <Button variant="ghost" className="flex flex-col text-xs px-2" onClick={() => handlePage('')}>
                        <HomeIcon /> Homepage
                    </Button>
                    <Button variant="ghost" className="flex flex-col text-xs px-2" onClick={() => handlePage('tournoi')}>
                        <StarIcon /> Tournois
                    </Button>
                    <Button variant="ghost" className="flex flex-col text-xs px-2" onClick={() => handlePage('player')}>
                        <PersonIcon /> Joueurs
                    </Button>
                    <Button variant="ghost" className="flex flex-col text-xs px-2" onClick={() => handlePage('teams')}>
                        <GroupsIcon /> Teams
                    </Button>
                    <Button variant="ghost" className="flex flex-col text-xs px-2" onClick={() => handlePage('regles')}>
                        <DescriptionIcon /> Règles
                    </Button>
                </div>
            </div>
        </div>
    );
}
