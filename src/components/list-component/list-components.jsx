import React from "react";
import { ListContainer, ListContent, ListSubContent } from "./list.styles";
import "./list.scss";
export const ListComponents = props => {
  return (
    <ListContainer>
      <i class="material-icons icons">place</i>
      <ListContent>
        <h4>{props.item.title}</h4>
        <ListSubContent>
          <small>{props.item.jalan}</small>
        </ListSubContent>
      </ListContent>
    </ListContainer>
  );
};
{
  /* <p>{props.item.jalan}</p> */
}
