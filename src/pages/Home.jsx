import styled from "@emotion/styled";
import CardPublish from "../components/Card/card";
import { colors } from "../styles/colors";
import { get } from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../config";

const Body = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: ${colors.black.high};
`;

function HomePage(){
  
  useEffect(() => {
    get(BASE_URL).then((response) =>console.log(response)).catch((error) => console.log(error))
  }, []);

  return  <Body>
  <CardPublish
  id= "1"
  name="Evans Glz"
  userId="@EvansGxz"
  body="Deserunt esse cillum anim proident qui. Ipsum ut minim quis irure est sunt velit ipsum nostrud non commodo ut ipsum nulla. Pariatur tempor reprehenderit sunt reprehenderit veniam."
  />
  </Body>
}

export default HomePage;