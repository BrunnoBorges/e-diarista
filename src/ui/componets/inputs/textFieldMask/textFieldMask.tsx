import React from "react";
import InputMask from "react-input-mask";
import TextField from "ui/componets/inputs/textField/textField";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskprops extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskprops> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
