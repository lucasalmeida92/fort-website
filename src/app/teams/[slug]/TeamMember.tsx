import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import playerPhoto from "./toxx.jpg";
import './styles.scss';

interface Props {
  member: {
    nick: string;
    name?: string;
    photo?: string | StaticImageData;
    role?: string;
    instagram?: string;
    twitter?: string;
  }
}

export function TeamMember({ member }: Props) {
  return (
    <li className="team-member">
      <div className="hover:shadow-2xl hover:-translate-y-1 team-member-card">
        {member.photo &&
          <Image src={member.photo} alt="Valorant team image" className="team-member-image" />}
        <span className="team-member-content">
          <h3 className="text-lg drop-shadow-md">{member.nick}</h3>
        </span>
      </div>
    </li>
  );
}
