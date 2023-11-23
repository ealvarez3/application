import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import styled from "styled-components"


const MainRootContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const MainRootContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
`;

export default function MainRoot() {
  return (
    <MainRootContainer>
        <Navbar />
        <MainRootContent>
          <Outlet />
        </MainRootContent>
    </MainRootContainer>
  )
}
