import styled from "styled-components"

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:9999;
`;

const LoaderSpinner = styled.div`
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 3px solid rgba(0,0,0,0.3);
    border-radius: 50%;
    border-top-color: #000000;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
`;

const LoaderText = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    margin: 2rem 0;
`;

export default function Loader() {
  return (
    <LoaderContainer>
        <LoaderSpinner />
        <LoaderText>Cargando...</LoaderText>
    </LoaderContainer>
  )
}
