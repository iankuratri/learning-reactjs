import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos
      deleniti quae quod nobis corrupti dolorum cum tenetur vitae dolore tempore
      dolorem minus ea laborum, possimus maiores aut voluptas! Inventore!
    </div>
  );
};
