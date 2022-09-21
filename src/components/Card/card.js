import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

const Wrapper = styled.div`
  
  flex-direction: row;
  display: flex;
  gap: 10px;
  
  padding: 10px;
 
`;
const Container = styled.div`
  background-color: hsl(220, 25%, 10%);
  width: 50vw;
  border-radius: 20px;
  focus: hsl(210, 90%, 50%);
  --shadow-1: hsla(236, 50%, 50%, .3);
  box-shadow: .4rem .4rem 10.2rem .2rem hsla(236, 50%, 50%, .3);
  margin: 1rem;
  padding: 0.225rem;
  
`;
export const UserName = styled.p`
  line-height: 0rem;
  align-items: center;
  text-align: center;
  color: ${colors.white};
  font-weight: 600;
`;

 const UserId = styled.p`
  line-height: 0rem;
  align-items: center;
  text-align: center;
  color: ${colors.gray};
  font-weight: 500;
  font-size: 0.900rem;
  padding-left: 0.125rem;
`;

const Icon = styled.img`
  width: 1.325vw;
`;
const IconContainer = styled.div`
  padding: 0.125rem;
`;

const NameFormat = styled.div`
  flex-direction: row;
  display: flex;
`;
const BodyContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 47vw;
  
`;
const Body = styled.p`
margin-top: -1.225vh;
margin-left: 5vw;
align-items: center;
text-align: left;
color: ${colors.white};
font-weight: 500;
font-size: 0.900rem;
padding-left: 0.125rem;
`;

export default function CardPublish({ src, body, userId, icon, name, id, onClick }) {
  return (
    <Container>
    <Wrapper id={id}>
     
      <NameFormat>
        <UserName  onClick={onClick}>
          {" "}
          {name}
          {" "}
        </UserName>
        <IconContainer>
        <Icon src={icon}/>
        </IconContainer>
        <UserId>{userId}</UserId>
      </NameFormat>
      
    </Wrapper>
    <BodyContainer>
      <Body>{body}</Body>
      </BodyContainer>
      </Container>
  );
}
