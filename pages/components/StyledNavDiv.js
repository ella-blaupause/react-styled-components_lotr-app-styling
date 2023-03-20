import styled from "styled-components";

export const StyledNavDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.flexStart ? "flex-start" : "flex-end")};
  padding: 4px;
`;
