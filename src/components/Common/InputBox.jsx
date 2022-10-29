import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiInputBase-root": {
      color: "black", 
      backgroundColor: "white", 
      border: "1px solid #d4d5d9",
      padding: "2px 6px",
      "&:hover": {
        border: "1px solid black",
      },
    },
    paddingBottom: "16px",
  },
}));

export function InputBox(props) {
  const classes = useStyles();
  const {
    id,
    type,
    name,
    label,
    value,
    onChange,
    error,
    helperText,
    fullWidth,
    placeholder,
  } = props;
  return (
    <TextField
      inputProps={{
        style: { border: "none" },
        classes: {
          notchedOutline: classes.notchedOutline,
        },
      }}
      className={classes.root}
      id={id}
      type={type ? type : "text"}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      placeholder={placeholder}
    />
  );
}
