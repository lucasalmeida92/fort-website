import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitch, FaTwitter } from "react-icons/fa";
import './styles.scss';

interface Props {
  member: {
    nick: string;
    name?: string;
    photo?: string | StaticImageData;
    role?: string;
    instagram?: string | null;
    twitter?: string | null;
    twitch?: string | null;
    tiktok?: string | null;
  }
}

export function TeamMember({ member }: Props) {
  return (
    <li className="team-member">
      <div className="hover:shadow-2xl hover:-translate-y-1 team-member__card">
        {member.photo &&
          <Image src={member.photo} alt="Valorant team image" className="team-member__image" />}
        <div className="team-member__content">
          <h3 className="text-lg drop-shadow-md">{member.nick}</h3>
          <div className="team-member__details">
            {member.name && <p className="font-extralight text-sm opacity-80">{member.name}</p>}
            {member.role && <p className="badge badge-md badge-primary bg-pink capitalize border-0 mb-8">{member.role}</p>}
            <div className="flex items-center justify-center">
              {member.instagram &&
                <Link
                  href={`https://www.instagram.com/${member.instagram}`}
                  target="_blank"
                  title="Instagram link"
                  className="mx-2 text-2xl hover:text-pink"
                >
                  <FaInstagram />
                </Link>}
              {member.twitter &&
                <Link
                  href={`https://www.twitter.com/${member.twitter}`}
                  target="_blank"
                  title="Twitter link"
                  className="mx-2 text-2xl hover:text-pink"
                >
                  <FaTwitter />
                </Link>}
              {member.twitch &&
                <Link
                  href={`https://www.twitch.tv/${member.twitch}`}
                  target="_blank"
                  title="Twitch link"
                  className="mx-2 text-2xl hover:text-pink"
                >
                  <FaTwitch />
                </Link>}
              {member.tiktok &&
                <Link
                  href={`https://www.tiktok.com/@${member.tiktok}`}
                  target="_blank"
                  title="TikTok link"
                  className="mx-2 text-2xl hover:text-pink"
                >
                  <FaTiktok />
                </Link>}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
