import React from "react";
import InputMask from "react-input-mask";
import TextField from "ui/componets/inputs/textField/textField";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskprops extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskprops> = ({ mask, ...props }) => {
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
