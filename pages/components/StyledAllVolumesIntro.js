import styled from "styled-components";

export const StyledAllVolumesIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: ${(props) => props.gab}px;

  width: 390px;
`;

/* @media (max-width: 768px) {
  // styles, die nur gelten sollen, wenn die maximale Bildschirmbreite 768px beträgt
  color: blue;
}

@media (max-width: 480px) {
  // styles, die nur gelten sollen, wenn die maximale Bildschirmbreite 480px beträgt
  color: hotpink;
} */
