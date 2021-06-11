import React from "react";
import PageTitle from "ui/componets/data-display/pageTitle/pageTitle";
import UseInformation from "ui/componets/data-display/useInformation/useInformation";
import SafeEnviroment from "ui/componets/feedback/safeEnviroment/safeEnviroment";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UseInformation
        name={"Brunno Borges"}
        picture={"https://github.com/BrunnoBorges.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
