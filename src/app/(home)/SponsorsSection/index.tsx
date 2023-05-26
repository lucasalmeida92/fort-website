import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import exitlagLogo from "./exitlag.svg";
import hellcaseLogo from "./hellcase.webp";
import universoGamesLogo from "./universo-games.png";
import './styles.scss';

export function SponsorsSection() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] py-8">
      <SectionTitle>Patrocinadores</SectionTitle>
      <div className="flex gap-y-10 px-6 py-10 rounded-box sponsors">
        {/* <div className="sponsors-group master">
          <Link href="https://www.instagram.com/universogamesworld/" target="_blank" className="sponsor">
            <Image src={universoGamesLogo} alt="Universo Games logo" width={220} height={200}  />
          </Link>
        </div> */}
        <div className="sponsors-group golds gap-10">
          <Link href="https://www.instagram.com/universogamesworld/" target="_blank" className="sponsor">
            <Image src={universoGamesLogo} alt="Universo Games logo" width={220} height={200}  />
          </Link>
        </div>
        <div className="sponsors-group silvers gap-10">
          <Link href="https://www.exitlag.com/refer/9622407" target="_blank" className="sponsor">
            <Image src={exitlagLogo} alt="Exitlag logo" width={220} height={200}  />
          </Link>
          <Link href="https://hellcase.com/ffortgg" target="_blank" className="sponsor">
            <Image src={hellcaseLogo} alt="Hellcase logo" width={220} height={200}  />
          </Link>
        </div>
        {/* <div className="sponsors-group supporters gap-10">
          <Link href="https://www.exitlag.com/refer/9622407" target="_blank" className="sponsor">
            <Image src={exitlagLogo} alt="Exitlag logo" width={220} height={200}  />
          </Link>
          <Link href="https://hellcase.com/ffortgg" target="_blank" className="sponsor">
            <Image src={hellcaseLogo} alt="Hellcase logo" width={220} height={200}  />
          </Link>
        </div> */}
        <Link
          href="mailto:contato@fortesports.com.br"
          title="Seja um patrocinador"
          className="btn btn-ghost mt-4"
        >
          Seja um patrocinador
        </Link>
      </div>
    </Container>
  );
}
