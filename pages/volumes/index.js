import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { getTheme } from "../../styles";
import { StyledAllVolumesIntro } from "../components/StyledAllVolumesIntro";
import { StyledImage } from "../components/StyledImage";
import { StyledList } from "../components/StyledList";
import { StyledPages } from "../components/StyledPages";

export default function Volumes() {
  return (
    <StyledPages>
      <StyledAllVolumesIntro gap={18}>
        <h1>The Lord of the Rings</h1>
        <p>{introduction}</p>
      </StyledAllVolumesIntro>
      <StyledAllVolumesIntro gap={16}>
        <h2>All Volumes</h2>
        <StyledList>
          {volumes.map((volume) => (
            <li key={volume.id}>
              <Link href={`/volumes/${volume.slug}`} style={{ color: "unset" }}>
                <StyledImage
                  src={volume.cover}
                  alt={`Cover image of ${volume.title}`}
                  width={85}
                  height={140}
                />

                <p>{volume.title}</p>
              </Link>
            </li>
          ))}
        </StyledList>
      </StyledAllVolumesIntro>
    </StyledPages>
  );
}
