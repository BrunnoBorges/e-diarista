import React from "react";
import PageTitle from "ui/componets/data-display/pageTitle/pageTitle";
import UseInformation from "ui/componets/data-display/useInformation/useInformation";
import SafeEnviroment from "ui/componets/feedback/safeEnviroment/safeEnviroment";
import TextFieldMask from "ui/componets/inputs/textFieldMask/textFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProffissiobalContainer,
  ProffisionalPaper,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    error,
    diaristas,
    diaristasRestantes,
    search,
    loading,
  } = useIndex();
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
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {error && <Typography color={"error"}>{error}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || loading}
            onClick={() => buscarProfissionais(cep)}
          >
            {loading ? <CircularProgress size={20} /> : " Buscar"}
          </Button>
        </FormElementsContainer>

        {search &&
          (diaristas.length > 0 ? (
            <ProffisionalPaper>
              <ProffissiobalContainer>
                {diaristas.map((item, index) => {
                  return (
                    <UseInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProffissiobalContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço
                  </Typography>
                )}
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProffisionalPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponível em sua região.
            </Typography>
          ))}
      </Container>
    </div>
  );
}
