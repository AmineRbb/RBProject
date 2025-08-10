'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { TeamsList, TeamsData } from '@/types';

import Header from '../component/header';
import ImagePreloader from '../component/ImagePreloader';

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

export default function Teams() {
  const [teamList, setTeamList] = useState<TeamsList | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const res = await fetch('/json/teams.json');
        if (!res.ok) {
          throw new Error(`Impossible de charger les équipes: ${res.status}`);
        }
        const data = await res.json();
        setTeamList(data);
        setError(null);
      } catch (error) {
        setError('Impossible de charger la liste des équipes');
        setTeamList(null);
      }
    };
    fetchTeamsData();
  }, []);

  const renderTeamCard = (team: TeamsData, index: number) => {
    return (
      <Card className="p-8 mx-4 max-w-4xl rounded-3xl shadow-lg bg-white transition-all hover:shadow-2xl">
        <div className="grid grid-cols-6 gap-6 items-center">
          <div className="col-span-1">
            <Image
              src={team.imageTeam}
              alt={team.name}
              className="rounded-full border-4 border-gray-200"
              width={100}
              height={100}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
          <div className="col-span-3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">{team.name}</h2>
            <p className="text-gray-600 mt-2">{`${team.nbJoueurs} joueurs`}</p>
          </div>
          <div className="col-span-6 mt-8">
            <Carousel
              arrows={false}
              responsive={responsive}
              autoPlay
              autoPlaySpeed={2000}
              infinite
              transitionDuration={500}
              customTransition="transform 0.5s ease-in-out"
            >
              {team.joueurs.map((joueur, playerIndex) => (
                <div key={joueur.name} className="p-3">
                  <Card className="p-6 bg-gray-50 rounded-xl shadow-lg flex flex-col items-center transition-all transform hover:scale-105">
                    <Image
                      src={joueur.image}
                      alt={joueur.name}
                      className="rounded-full w-24 h-24 object-cover border-2 border-gray-300"
                      width={96}
                      height={96}
                      loading="lazy"
                      sizes="96px"
                    />
                    <CardContent className="mt-4 text-center">
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header title="TEAMS" />
        <div className="px-6 py-8">
          <Card className="p-8 text-center">
            <p className="text-lg text-red-600">{error}</p>
          </Card>
        </div>
      </div>
    );
  }

  // Préparer les images à précharger (logos d'équipes et quelques joueurs)
  const imagesToPreload = teamList?.teams.slice(1).flatMap(team => [
    team.imageTeam,
    ...team.joueurs.slice(0, 3).map(joueur => joueur.image)
  ]) || [];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="TEAMS" />
      {imagesToPreload.length > 0 && (
        <ImagePreloader imageSources={imagesToPreload} />
      )}
      <div className="px-6 py-8">
        <Card className="p-6 mb-8 bg-white shadow-lg rounded-lg">
          <CardTitle className="flex justify-center text-2xl font-semibold">
            Découvrez les structures de joueurs concourant dans les différents tournois
          </CardTitle>
        </Card>
        
        <div className="flex flex-col items-center space-y-8">
          {teamList?.teams.map((team, index) => renderTeamCard(team, index))}
        </div>
      </div>
    </div>
  );
}
