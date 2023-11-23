import styled from "styled-components"


const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h1`
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
    margin: 1rem 0;
`;

const CardProp = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: #9ca3af;
    margin: 1rem 0;
`;

export default function CardInicio({ item }) {
  return (
    <Card>
        <CardTitle>UUID: {item.id}</CardTitle>
        <CardProp>Tipo: {item.type}</CardProp>
        <CardProp>Archivado: {item.archived ? 'Si' : 'No'}</CardProp>
    </Card>
  )
}
