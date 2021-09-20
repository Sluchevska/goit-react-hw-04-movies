import styled from "@emotion/styled";
export const Container = styled.div`
padding: 10px;
align-items: center;


`

export const Ul = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap:15px;

`
export const MovieItems = styled.li`
list-style:none;
box-shadow: 2px 3px 2px 3px rgb(182 183 190);
margin-left: 10px;
margin-bottom: 10px;
text-decoration: none;

`

export const Poster = styled.img`
display: block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 10px;
`