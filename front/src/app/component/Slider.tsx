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

export default function Sliderss({json}:{json:string}) {
  const [players, setPlayers] = useState<PlayerData[]>([]); // Corrected type

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(json);
        if (!response.ok) {
          throw new Error('Failed to fetch players data');
        }
        const data = await response.json();
        setPlayers(data.players); // Assuming data.players is an array
      } catch (error) {
        console.error('Error fetching players data:', error);
      }
    };
    fetchPlayers();
  }, [json]);

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
        <div key={player.name}>
          <Card className="p-2 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
            <Image
              src={player.image}
              alt={player.name}
              className="rounded-full w-24 h-24 object-cover object-top"
              width={150}
              height={150}
              priority
            />
            <CardContent className="mt-2 text-center">
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
