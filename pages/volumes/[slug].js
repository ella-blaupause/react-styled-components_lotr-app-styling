import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";
import { StyledVolumeDetail } from "../components/StyledVolumeDetail.js";
import SvgChevron from "../../icon/chevron-left.svg";
import SvgArrowLeft from "../../icon/arrow-left.svg";
import SvgArrowRight from "../../icon/arrow-right.svg";
import { StyledAllVolumesIntro } from "../components/StyledAllVolumesIntro.js";
import { StyledBooks } from "../components/StyledBooks.js";
import { StyledLinkNext } from "../components/StyledLinkNext.js";
import { StyledLinkPrev } from "../components/StyledLinkPrev.js";
import { StyledNavDiv } from "../components/StyledNavDiv.js";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes" style={{ color: "unset" }}>
        <SvgChevron viewBox="0 0 24 12" />
        <span>All Volumes</span>
      </Link>
      <StyledAllVolumesIntro gap={18}>
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledAllVolumesIntro>
      <StyledVolumeDetail variant={title}>
        <StyledBooks>
          {books.map(({ ordinal, title }) => (
            <>
              <li key={title} style={{ font: "var( --font-caption--italic)" }}>
                {ordinal}:
              </li>
              <li style={{ margin: "0 0 10px 0", fontSize: "12px" }}>
                <strong>{title}</strong>
              </li>
            </>
          ))}
        </StyledBooks>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledVolumeDetail>
      {previousVolume ? (
        <StyledLinkPrev href={`/volumes/${previousVolume.slug}`}>
          <SvgArrowLeft />
          <StyledNavDiv flexStart>
            <p style={{ margin: 0, font: "var( --font-caption--italic)" }}>
              Previous Volume:
            </p>
            <p style={{ margin: 0, fontSize: "15px" }}>
              {previousVolume.title}
            </p>
          </StyledNavDiv>
        </StyledLinkPrev>
      ) : null}
      {nextVolume ? (
        <StyledLinkNext href={`/volumes/${nextVolume.slug}`}>
          <StyledNavDiv>
            <p style={{ margin: 0, font: "var( --font-caption--italic)" }}>
              Next Volume:
            </p>
            <p style={{ margin: 0, fontSize: "15px" }}>{nextVolume.title}</p>
          </StyledNavDiv>
          <SvgArrowRight />
        </StyledLinkNext>
      ) : null}
    </>
  );
}
