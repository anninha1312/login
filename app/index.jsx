import { 
    View, 
    Text, 
    TextInput,
    Pressable,
    StyleSheet } from "react-native";

    import styled from "styled-components/native";

    export default function App(){
    return(
    <Tela>
        <Titulo>Entrar</Titulo>
        <ContainerTexto>
            <CamposTexto 
                placeholder="Digite seu e-mail..." 
                placeholderTextColor={'#6C757D'}
            />
            <CamposTexto 
                placeholder="Digite sua senha..." 
                placeholderTextColor={'#6C757D'}
            />
        </ContainerTexto>
        <ContainerBotoes>
            <Botao>
                <TextoBotao>Entrar</TextoBotao>
            </Botao>
            <Links>Cadastre-se</Links>
            <Links>Esqueci a senha</Links>
        </ContainerBotoes>
    </Tela>)
}

const Tela = styled.View`
    flex:1;
    background-color:#100000;
    padding:26px;
    `
const Titulo = styled.Text`
    font-size: 70px;
    font-weight: Coustard;
    color: #F33D83;
    margin: 80px 0px;
`
const ContainerTexto= styled.View`
    gap: 25px;
 `
const CamposTexto= styled.TextInput`
         background-color: #F686B1;
         margin-top: 10px;
         margin-bottom: 10px;
         border-radius:13px;
         font-size: 18px;
         text-align: center;
         padding: 20px;
     `

     const ContainerBotoes = styled.View`
         margin-top: 65px;
         gap: 20px;
     `

     const Botao= styled.Pressable`
         background-color:#F686B1;
         padding: 20px;
         `

     
     const TextoBotao = styled.Text`
         text-align: center;
         font-size: 24px;
         font-weight: Edu TAS Beginner;
         `
     
     const Links = styled.Text`
         text-align: center;
         color: #fff;
         font-size: 16px;
         `
     
 



// const estilo = StyleSheet.create({
//     tela: {
//         flex: 1,
//         backgroundColor: '#100000',
//         padding: 35
//     },
//     titulo: {
//         fontSize: 70,
//         fontWeight: 'Coustard',
//         color: '#F33D83',
//         marginTop: 80,
//         marginBottom: 80,
        
    
//     },
//     container_campos_texto: {
//         gap: 25
//     },
//     campo_texto: {
//         backgroundColor: '#F686B1',
//         marginTop: 10,
//         marginBottom: 10,
//         borderRadius:13,
//         fontSize: 18,
//         textAlignVertical: 'center',
        
//         padding: 20,
//     },
//     container_botoes: {
//         marginTop: 65,
//         gap: 20
//     },
//     botao: {
//         backgroundColor: '#F686B1',
//         padding: 20,

//     },
//     texto_botao : {
//         textAlign: 'center',
//         fontSize: 24,
//         fontWeight: 'bold'
//     },
//     links: {
//         textAlign: 'center',
//         color: '#fff',
//         fontSize: 16
//     }
// })