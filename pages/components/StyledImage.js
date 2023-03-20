import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.06));
`;
