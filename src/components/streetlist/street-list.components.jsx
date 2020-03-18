import React from "react";
import { ListComponents } from "../list-component/list-components";
import { StreetContainer } from "./street-list.styles";

export const StreetList = props => {
  const { data } = props;

  return (
    <StreetContainer>
      {data.map(item => (
        <ListComponents key={item.id} item={item} />
      ))}
    </StreetContainer>
  );
};
