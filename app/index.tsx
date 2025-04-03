
import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";
import { useEffect, useState } from "react";
import { CampoTexto } from "@/components/Input/input";
import { View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [email, setEmail] = useState("example@example.com");
  const [hasEmailError, setHasEmailError] = useState(false);

  const [senha, setSenha] = useState("@Example123");
  const [hasSenhaError, setHasSenhaError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setHasEmailError(!emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    setHasSenhaError(!passwordRegex.test(senha));
  }, [senha]);

  return (
    <Tela>
      <Title texto={"Entrar"} flag={true} />
      <Title texto={"Bem vindo ao app"} flag={false} />
      <ContainerCampoTexto>
        <View>
          <CampoTexto
            erro={hasEmailError}
            placeholder="Digite seu email..."
            onChangeText={(text) => setEmail(text)}
          />
          {hasEmailError ? <TextErrorHint>E-mail inválido</TextErrorHint> : null}
        </View>

        <SenhaContainer>
          <CampoTexto
            erro={hasSenhaError}
            placeholder="Digite sua senha..."
            secureTextEntry={!isPasswordVisible}
            onChangeText={(text) => setSenha(text)}
          />
          <IonIcons onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={24}
              color="bold"
            />
          </IonIcons>
        </SenhaContainer>
        {hasSenhaError ? <TextErrorHint>Senha inválida</TextErrorHint> : null}
      </ContainerCampoTexto>
      <ContainerBotoes>
        <Botao onPress={() => console.log("Cliking here")}>
          <TextoBotao>Entrar</TextoBotao>
        </Botao>
        <Links>Cadastre-se</Links>
        <Links>Esqueci a senha</Links>
      </ContainerBotoes>
    </Tela>
  );
}

const Tela = styled.View`
  flex: 1;
  background-color: #100000;
  padding: 26px;
`;

const ContainerCampoTexto = styled.View`
  gap: 25px;
`;

const SenhaContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

const ContainerBotoes = styled.View`
  margin-top: 65px;
  gap: 20px;
`;

const Botao = styled.Pressable`
  background-color: #f686b1;
  padding: 20px;
`;

const TextoBotao = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Links = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

const TextErrorHint = styled.Text`
  font-size: 16px;
  color: #e63946;
`
const IonIcons = styled.Pressable`
    margin-left: -43px;
`;