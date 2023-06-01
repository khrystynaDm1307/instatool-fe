import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function FilterComponent({
  selectedValues,
  setSelectedValues,
  selectedCountries,
  setSelectedCountries,
}) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;

    const fetchCities = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
        );
        const data = await response.json();

        const optionsData = Object.entries(data)
          .slice(0, 10)
          .flatMap(([country, cities]) => {
            const newSet = new Set(cities);
            const citiesWithCountry = Array.from(newSet).map((city) => ({
              country,
              city,
              type: "city",
            }));
            return [{ country, type: "country" }, ...citiesWithCountry];
          });

        if (active) {
          setOptions([...optionsData]);
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setLoading(false);
    };

    if (open && options.length === 0) {
      fetchCities();
    }

    return () => {
      active = false;
    };
  }, [open]);

  const handleOptionClick = (option) => {
    if (option.type === "country") {
      const citiesInCountry = options.filter(
        (o) => o.country === option.country && o.type === "city"
      );
      const allSelected = citiesInCountry.every((city) =>
        selectedValues.includes(city)
      );

      if (allSelected) {
        const newSelectedOptions = selectedValues.filter(
          (o) => !citiesInCountry.includes(o)
        );
        setSelectedValues(() => newSelectedOptions);
        setSelectedCountries(() =>
          selectedCountries.filter((country) => country !== option.country)
        );
      } else {
        const newSelectedOptions = [...selectedValues, ...citiesInCountry];
        setSelectedValues(() => newSelectedOptions);
        setSelectedCountries(() => [...selectedCountries, option.country]);
      }
    } else {
      const newSelectedOptions = selectedValues.includes(option)
        ? selectedValues.filter((o) => o !== option)
        : [...selectedValues, option];
      setSelectedValues(() => newSelectedOptions);
    }
  };

  return (
    <Box>
      <Typography mb={1} variant="h6">
        Location
      </Typography>
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
        getOptionLabel={(option) => option.city || option.country}
        options={options}
        loading={loading}
        multiple={true}
        value={selectedValues}
        onChange={(event, value) => console.log(value)}
        renderOption={(props, option) => {
          if (option.type === "country") {
            const citiesInCountry = options.filter(
              (o) => o.country === option.country && o.type === "city"
            );
            const allSelected = citiesInCountry.every((city) =>
              selectedValues.includes(city)
            );

            return (
              <li {...props} onClick={() => handleOptionClick(option)}>
                <Checkbox checked={allSelected} />
                All cities
              </li>
            );
          } else {
            return (
              <li {...props} onClick={() => handleOptionClick(option)}>
                <Checkbox checked={selectedValues.includes(option)} />
                {option.city}
              </li>
            );
          }
        }}
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
    </Box>
  );
}
