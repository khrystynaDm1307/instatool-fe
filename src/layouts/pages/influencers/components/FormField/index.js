import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

// prop-types
import PropTypes from "prop-types";
import { useState } from "react";
import { Autocomplete, FormHelperText } from "@mui/material";
import { LANGUAGES } from "assets/feeds/languages";

function useInputByType({
  type,
  children,
  formData,
  name,
  subItems,
  inputLabel,
  inputOptions,
  ...props
}) {
  const { errors, values, touched } = formData;

  const [options, setOPTIONS] = useState([]);

  switch (type) {
    case "text":
      return (
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          type="text"
          inputProps={{ "aria-label": "Without label" }}
          name={name}
          error={errors[name] && touched[name]}
          value={values[name]}
          onChange={formData.handleChange}
          {...props}
          label={inputLabel}
        />
      );
    case "select":
      return (
        <Select
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "100%", p: "0.75rem",pl:0 }}
          error={errors[name] && touched[name]}
          value={values[name]}
          name={name}
          onChange={formData.handleChange}
          {...props}
          label={inputLabel}
        >
          {children?.map(({ name: label, value }) => (
            <MenuItem value={value} key={label}>
              {label}
            </MenuItem>
          ))}
        </Select>
      );
    case "diapason":
      return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {subItems.map((item) => (
            <Select
              value={values[item.name]}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ width: "47%", p: "0.75rem" }}
              error={errors[item.name] && touched[item.name]}
              name={item.name}
              onChange={formData.handleChange}
              key={item.name}
              {...props}
              label={inputLabel}
            >
              {item.children?.map(({ name: label, value }) => (
                <MenuItem value={value} key={label}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          ))}
        </Box>
      );
    case "multiple":
      return (
        <Autocomplete
          multiple
          name={name}
          id={`tags-standard-${name}`}
          options={options}
          getOptionLabel={(option) => option}
          defaultValue={options}
          filterSelectedOptions
          value={values[name]}
          onInputChange={(e, newValue) => {
            setOPTIONS([newValue, ...options]);
          }}
          onChange={(e, newValue) => formData.handleChange({ target: { value: newValue, name } })}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder={props.placeholder} />
          )}
        />
      );
    case "autocomplete":
      return (
        <Autocomplete
          name={name}
          id={`tags-standard-${name}`}
          options={children}
          getOptionLabel={(option) => option.name}
          value={values[name]}
          onChange={formData.handleChange}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder={props.placeholder} />
          )}
        />
      );
    default:
      return <TextField {...props} />;
  }
}

function FormField(props) {
  const { label, name, formData } = props;
  const { errors, touched } = formData;

  return (
    <Box>
      {label && (
        <Typography mb={1} variant="h6">
          {label}
        </Typography>
      )}
      {useInputByType(props)}
      {errors[name] && touched[name] && (
        <FormHelperText sx={{ color: "red", ml: 1, mt: 1 }}>{errors[name]}</FormHelperText>
      )}
    </Box>
  );
}

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormField;
