import styled from "@emotion/styled";
export const Container = styled.ul`

display: grid;
list-style: none;
 grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding-inline-start: 0px;

`

export const ActorCard = styled.li`
border: 1px solid black;
border-radius:5px;
box-shadow: 5px 6px 9px rgb(85, 42, 85);

`

export const Img = styled.img`
display: block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
`