'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

type PlayerData = {
  name: string;
  team: string;
  place: number;
  tier: number;
  image: string;
};

export default function PlayerCarousel({dataUrl}:{dataUrl:string}) {
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error(`Échec du chargement des données: ${response.status}`);
        }
        const data = await response.json();
        setPlayers(data.players || []);
        setError(null);
      } catch (error) {
        setError('Impossible de charger les données des joueurs');
        setPlayers([]);
      }
    };
    fetchPlayerData();
  }, [dataUrl]);

  if (error) {
    return (
      <div className="p-6">
        <Card className="p-4 text-center text-red-600">
          {error}
        </Card>
      </div>
    );
  }

  if (players.length === 0) {
    return (
      <div className="p-6">
        <Card className="p-4 text-center text-gray-600">
          Chargement des joueurs...
        </Card>
      </div>
    );
  }

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
      transitionDuration={500}
      customTransition="transform 0.5s ease-in-out"
    >
      {players.map((player) => (
        <div key={player.name} className="p-2">
          <Card className="p-4 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
            <Image
              src={player.image}
              alt={player.name}
              className="rounded-full w-24 h-24 object-cover object-top"
              width={150}
              height={150}
              priority
            />
            <CardContent className="mt-4 text-center">
              <CardTitle className="font-semibold">{player.name}</CardTitle>
              <div className="text-sm text-gray-600">Team: {player.team}</div>
              <div className="text-sm text-gray-600">Place: {player.place}</div>
              <div className="text-sm text-gray-600">Tier: {player.tier}</div>
            </CardContent>
          </Card>
        </div>
      ))}
    </Carousel>
  );
}
