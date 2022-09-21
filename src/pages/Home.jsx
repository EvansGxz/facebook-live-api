import styled from "@emotion/styled";
import CardPublish from "../components/Card/card";
import { colors } from "../styles/colors";

const Text = styled.p`
margin-top: -1.225vh;
margin-left: 5vw;
align-items: center;
text-align: left;
color: ${colors.white};
font-weight: 500;
font-size: 0.900rem;
padding-left: 0.125rem;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: ${colors.black.high};
`;

function HomePage(){
  

  return  <Body>
  <CardPublish
  id= "1"
  name="Evans Glz"
  
  onClick={()=>console.log("hola")}

  userId="@EvansGxz"
  body="Deserunt esse cillum anim proident qui. Ipsum ut minim quis irure est sunt velit ipsum nostrud non commodo ut ipsum nulla. Pariatur tempor reprehenderit sunt reprehenderit veniam."
  />
  </Body>
}

export default HomePage;