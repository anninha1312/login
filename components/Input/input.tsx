import styled from "styled-components/native";

type CampoDeTextoProps = {
    erro: boolean
}

export const CampoTexto = styled.TextInput<CampoDeTextoProps>`
 width: 100%;
  background-color: #F686B1;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 13px;
  font-size: 18px;
  padding: 15px;
  border: 2px solid ${({ erro }: { erro: boolean }) => (erro ? "#E63946" : "#33415C")};
`;