import { useEffect } from "react"
import AuthSection from "../components/auth/AuthSection"
import styled from "styled-components"


const AuthRootContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: between;
    min-height: 100vh;
    width: 100%;
    background-color: #f5f5f5;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export default function AuthRoot({children, title}) {

    useEffect(() => {
        document.title = title
    }, [])

  return (
    <AuthRootContainer>
        <AuthSection />
        {children}
    </AuthRootContainer>
  )
}
