import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function FilterComponent() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      fetch(
        "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
      )
        .then((response) => response.json())
        .then((data) => {
          // Process the JSON data
          const optionsData = Object.entries(data)
            .slice(0, 10)
            .flatMap(([country, cities]) => {
              const newSet = new Set(cities);
              return Array.from(newSet).map((city) => ({ country, city }));
            });
          if (active) {
            setOptions([...optionsData]);
          }
        }); // For demo purposes.
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      groupBy={(option) => option.country}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option.city}
      options={options}
      loading={loading}
      multiple={true}
      onChange={(e,value) => console.log(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
