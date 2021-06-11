import React from "react";
import { SafeEnviromentContainer } from "./safeEnviroment.style";
import { Container } from "@material-ui/core";

const SafeEnviroment = () => {
  return (
    <SafeEnviromentContainer>
      <Container>
        Ambiente 100% seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnviromentContainer>
  );
};

export default SafeEnviroment;
