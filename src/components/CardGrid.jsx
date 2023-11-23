import styled from "styled-components"
import CardInicio from "./CardInicio";


const CardGridSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const CardGridTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    margin: 2rem 0;
    padding: 1rem;
    background-color: #000;
    color: #ffffff;
    border-radius: 0.5rem;
    transition: 0.3s ease all;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const RefreshButton = styled.button`
    font-size: 1.rem;
    font-weight: 600;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transition: 0.3s ease all;
    cursor: pointer;
    &:hover {
        background-color: #000000;
        color: #ffffff;
    }
`;

const CardGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
    background-color: #e5e7eb;
    color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default function CardGrid({ sensataData, getSensataApi }) {
  return (
    <CardGridSection>
        <CardHeader>
            <CardGridTitle>
                Unidades Sensata
            </CardGridTitle>
            <RefreshButton onClick={getSensataApi}>
                Refrescar datos
            </RefreshButton>
        </CardHeader>
        <CardGridContainer>
        {
            sensataData.map((item, index) => (
                <CardInicio key={index} item={item} />
            ))
        }
    </CardGridContainer>
    </CardGridSection>
  )
}
