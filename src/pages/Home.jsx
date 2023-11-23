import styled from "styled-components";
import { useEffect, useState } from "react";
import { createAxiosInstance } from "../utils/main";
import secrets from "../../secrets.json";
import Loader from "../components/shared/Loader";
import CardGrid from "../components/CardGrid";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [sensataData, setSensataData] = useState([]);


  async function getSensataApi(){


    setLoading(true);

    const sensataData = {
      collection: "assets",
      search: {
        query: { op: "all" },
        sorts: [{ field: "updated", direction: "Descending" }],
        offset: 0,
        limit: 100,
      },
    };

    const axios = await createAxiosInstance(secrets.sensataUri).post("", sensataData, {
      headers: {
        "Authorization": secrets.sensataToken
      }
    })
    .then((response) => {
      console.log(response.data.items)
      setSensataData(response.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {

    getSensataApi();

  }, []);

  return (
    loading ? <Loader /> :
    <HomeContainer>
      {
        sensataData.items.length > 0 ? <CardGrid sensataData={sensataData.items} getSensataApi={getSensataApi} /> 
        : <h1>No hay datos</h1>
      }
    </HomeContainer>
  );
}
