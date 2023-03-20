import styled, { css } from "styled-components";

export const StyledVolumeDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  gap: 24px;

  width: 390px;

  ${({ variant = "text" }) => {
    if (variant === "The Fellowship of the Ring") {
      return css`
        background: linear-gradient(
            110.24deg,
            rgba(255, 255, 255, 0) 49.9%,
            rgba(255, 255, 255, 0.2) 100%
          ),
          #242c31;
      `;
    } else if (variant === "The Two Towers") {
      return css`
        background: linear-gradient(
            110.24deg,
            rgba(255, 255, 255, 0) 49.9%,
            rgba(255, 255, 255, 0.2) 100%
          ),
          #532724;
      `;
    } else if (variant === "The Return of the King") {
      return css`
        background: linear-gradient(
            110.24deg,
            rgba(255, 255, 255, 0) 49.9%,
            rgba(255, 255, 255, 0.2) 100%
          ),
          #202c2c;
      `;
    }
  }}
`;
