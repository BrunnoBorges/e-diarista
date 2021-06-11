import React from "react";
import {
  UserName,
  UserInterfaceContainer,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./useInformation.style";

interface UseInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UseInformation: React.FC<UseInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInterfaceContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInterfaceContainer>
  );
};

export default UseInformation;
