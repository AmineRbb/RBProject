'use client';

import { useRouter } from 'next/navigation';
import Header from '../component/header';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from '@/components/ui/button';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Joueur = {
  name: string;
  image: string;
};

type TeamsData = {
  name: string;
  nameForLink: string;
  imageTeam: string;
  nbJoueurs: number;
  joueurs: Joueur[];
};

type TeamsList = {
  teams: TeamsData[];
};

export default function Teams() {
  const router = useRouter();
  const [teamList, setTeamList] = useState<TeamsList | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/json/teams.json');
        if (!res.ok) {
          throw new Error('Failed to fetch teams data');
        }
        const data = await res.json();
        setTeamList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (teamName: string) => {
    router.push('/teams/' + encodeURIComponent(teamName));
  };

  const renderTeamCard = (team: TeamsData) => {
    return (
      
        <Card className="p-6 m-4 max-w-3xl mx-auto rounded-3xl shadow-lg bg-white transition-all hover:shadow-2xl">
        <div className="grid grid-cols-6 gap-4 items-center">
          <div className="col-span-1">
            <Image
              src={team.imageTeam}
              alt={team.name}
              className="rounded-full border-4 border-gray-200"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="col-span-3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">{team.name}</h2>
            <p className="text-gray-600 mt-2">{`${team.nbJoueurs} joueurs`}</p>
          </div>
          <div className="col-span-2 flex justify-end">
            <Button
              onClick={() => handleClick(team.nameForLink)}
              key={team.name}
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 py-2 px-4 rounded-full shadow-md"
            >
              Voir {team.name}
            </Button>
          </div>
          <div className="col-span-6 mt-6">
            <Carousel
              arrows={false}
              responsive={responsive}
              autoPlay
              autoPlaySpeed={2000}
              infinite
              transitionDuration={500}
              customTransition="transform 0.5s ease-in-out"
            >
              {team.joueurs.map((joueur) => (
                <div key={joueur.name} className="p-2">
                  <Card className="p-4 bg-gray-50 rounded-xl shadow-lg flex flex-col items-center transition-all transform hover:scale-105">
                    <Image
                      src={joueur.image}
                      alt={joueur.name}
                      className="rounded-full w-24 h-24 object-cover border-2 border-gray-300"
                      width={150}
                      height={150}
                      priority
                    />
                    <CardContent className="mt-3 text-center">
                      <CardTitle className="font-semibold text-xl text-gray-800">
                        {joueur.name}
                      </CardTitle>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </Card>
      
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="TEAMS" />
      <div className="px-4 py-6">
        <Card className="px-4 py-6 mb-6 bg-white shadow-lg rounded-lg">
          <CardTitle className="flex justify-center text-2xl font-semibold">
            Découvrez les structures de joueurs concourant dans les différents tournois
          </CardTitle>
        </Card>
      </div>
      <div className="flex flex-col items-center space-y-6">
        {teamList?.teams.map((team) => renderTeamCard(team))}
      </div>
    </div>
  );
}
