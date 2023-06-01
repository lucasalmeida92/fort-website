import Image from "next/image";
import { SponsorsSection } from "@/components/SponsorsSection";
import { FortHashtag } from "@/components/FortHashtag";
import { Container } from "@/components/Container";
import csGoLogo from "@/assets/csgo-logo.png";
import valorantLogo from "@/assets/valorant-logo.png";
import twitchLogo from "@/assets/twitch-logo.svg";
import { TeamMember } from "./TeamMember";

import photoToxx from "./toxx.jpg";
import photoMarcelinn from "./marcelinn.jpg";
import photoZek from "./zek.jpg";
import photoCh1pe from "./ch1pe.jpg";
import photoFlityz from "./flityz.jpg";
import photoDzn from "./matheus.jpg";

interface Props {
  params: {
    slug: string;
  }
}
type TeamType = 'valorant' | 'csgo' | 'streamers' | 'default';
type TeamTypeImage = {
  [key in TeamType]: any;
};

const teamTypeImage: TeamTypeImage = {
  'valorant': valorantLogo,
  'csgo': csGoLogo,
  'streamers': twitchLogo,
  'default': null,
}

export default function TeamPage({ params }: Props) {
  const teamTypeSlug: string = params?.slug;
  const teamInfo = {
    name: 'Valorant Masculino',
    slug: 'valorant-male',
    type: 'valorant',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum est odio quod id.',
    team_members: [
      {
        nick: 'Toxx',
        name: 'Caio Oliveira',
        photo: photoToxx,
        role: 'player',
        instagram: 'caio.limajj',
        twitter: null,
      },
      {
        nick: 'MarcelinN',
        name: 'Caio Oliveira',
        photo: photoMarcelinn,
        role: 'player',
        instagram: 'caio.limajj',
        twitter: null,
      },
      {
        nick: 'Zek',
        name: 'Caio Oliveira',
        photo: photoZek,
        role: 'player',
        instagram: 'caio.limajj',
        twitter: null,
      },
      {
        nick: 'Ch1pe',
        name: 'Caio Oliveira',
        photo: photoCh1pe,
        role: 'player',
        instagram: 'caio.limajj',
        twitter: null,
      },
      {
        nick: 'Flityz',
        name: 'Caio Oliveira',
        photo: photoFlityz,
        role: 'player',
        instagram: 'caio.limajj',
        twitter: null,
      },
      {
        nick: 'Dzn',
        name: 'Matheus Fernandes',
        photo: photoDzn,
        role: 'player',
        instagram: 'caio.limajj',
        twitter: null,
      },
    ]
  };

  return (
    <>
      <Container className="mt-[3rem] md:mt-[4rem] mb-[10rem] text-center">
        <div className="grid place-items-center h-56">
          {teamInfo?.type &&
            <Image
              src={teamTypeImage[teamInfo.type as TeamType]}
              alt="Valorant logo"
              className="w-[200px] object-contain"
              />
          }
        </div>
        <h2 className="mb-8 text-4xl md:text-5xl font-bold uppercase">{teamInfo?.name || 'Time'}</h2>
        {teamInfo?.description && <p className="mb-16 font-light">{teamInfo?.description}</p>}
        <ul className="flex gap-6 flex-wrap justify-center">
          {teamInfo.team_members.map(member => (
            <TeamMember key={member.nick} member={member} />
          ))}
        </ul>
      </Container>
      <SponsorsSection />
      <FortHashtag />
    </>
  )
}
