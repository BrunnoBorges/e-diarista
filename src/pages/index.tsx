import React from "react";
import PageTitle from "ui/componets/data-display/pageTitle/pageTitle";
import UseInformation from "ui/componets/data-display/useInformation/useInformation";
import SafeEnviroment from "ui/componets/feedback/safeEnviroment/safeEnviroment";
import TextFieldMask from "ui/componets/inputs/textFieldMask/textFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProffissiobalContainer,
} from "ui/styles/pages/index.style";
import { ProffisionalPaper } from "ui/styles/pages/index.style";

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
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />
          <Typography color={"error"}>Cep inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProffisionalPaper>
          <ProffissiobalContainer>
            <UseInformation
              name={"Brunno Borges"}
              picture={"https://github.com/BrunnoBorges.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UseInformation
              name={"Brunno Borges"}
              picture={"https://github.com/BrunnoBorges.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UseInformation
              name={"Brunno Borges"}
              picture={"https://github.com/BrunnoBorges.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UseInformation
              name={"Brunno Borges"}
              picture={"https://github.com/BrunnoBorges.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UseInformation
              name={"Brunno Borges"}
              picture={"https://github.com/BrunnoBorges.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UseInformation
              name={"Brunno Borges"}
              picture={"https://github.com/BrunnoBorges.png"}
              rating={3}
              description={"São Paulo"}
            />
          </ProffissiobalContainer>
        </ProffisionalPaper>
      </Container>
    </div>
  );
}
