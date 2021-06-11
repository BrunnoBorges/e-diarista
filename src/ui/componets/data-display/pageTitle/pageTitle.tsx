import React from "react";
import { PageTitleContainer, Subtitle, Title } from "./pageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </PageTitleContainer>
  );
};

export default PageTitle;
