import styled from "styled-components";
import AuthImage from "../../assets/images/auth-image.jpg";


const AuthSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #000;
    width: 60%;
    background-image: url(${AuthImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 768px) {
        display: none;
    }
`;


export default function AuthSection() {
  return (
    <AuthSectionContainer />
  )
}
