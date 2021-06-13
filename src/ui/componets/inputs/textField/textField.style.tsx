import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

// export const Title = styled("h2")`
//   margin: 0;
//   color: ${({ theme }) => theme.palette.primary.main};
//   font-size: ${({ theme }) => theme.typography.h6.fontSize};
//   font-weight: 600;

//   ${({ theme }) => theme.breakpoints.down("md")} {
//     font-size: ${({ theme }) => theme.typography.body1.fontSize};
//   }
// `;

// export const Subtitle = styled("h3")`
//   margin: ${({ theme }) => theme.spacing(1.5) + "" + 0};
//   color: ${({ theme }) => theme.palette.text.primary};
//   font-size: ${({ theme }) => theme.typography.body1.fontSize};
//   font-weight: normal;

//   ${({ theme }) => theme.breakpoints.down("md")} {
//     font-size: ${({ theme }) => theme.typography.body2.fontSize};
//   }
// `;
