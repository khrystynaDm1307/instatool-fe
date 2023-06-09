import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { data } from "../../data";

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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let active = true;

    const fetchCities = async () => {
      setLoading(true);
      let filteredData = [];
      try {
        if (!searchQuery) {
          filteredData = Object.entries(data)
            .slice((page - 1) * 5, page * 5)
            .flatMap(([country, cities]) => {
              const newSet = new Set(cities);
              const citiesWithCountry = Array.from(newSet).map((city) => ({
                country,
                city,
                type: "city",
              }));
              return [{ country, type: "country" }, ...citiesWithCountry];
            });
        } else {
          filteredData = Object.entries(data)
            .filter(([country, cities]) => {
              // Filter by search query
              if (searchQuery) {
                const lowercaseQuery = searchQuery.toLowerCase();
                return (
                  country.toLowerCase().startsWith(lowercaseQuery) ||
                  cities.some((city) =>
                    city.toLowerCase().startsWith(lowercaseQuery)
                  )
                );
              }
              return true;
            })

            .flatMap(([country, cities]) => {
              const newSet = new Set(cities);

              const citiesWithCountry = Array.from(newSet).map((city) => ({
                country,
                city,
                type: "city",
              }));
              return [{ country, type: "country" }, ...citiesWithCountry];
            })
            .filter(({ country, city }) => {
              const lowercaseQuery = searchQuery.toLowerCase();
              if (country.toLowerCase().startsWith(lowercaseQuery)) return true;
              return city?.toLowerCase().startsWith(lowercaseQuery);
            });
        }

        console.log(filteredData.length);

        const optionsData = searchQuery
          ? filteredData.slice((page - 1) * 50, page * 50)
          : filteredData;

        if (active) {
          if (page === 1) {
            setOptions([...optionsData]);
          } else {
            setOptions((prevOptions) => [...prevOptions, ...optionsData]);
          }
          setHasMore(optionsData.length > 0);
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setLoading(false);
    };

    if (open) {
      fetchCities();
    }

    return () => {
      active = false;
    };
  }, [open, page, searchQuery]);

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

      setSelectedCountries(() =>
        selectedCountries.filter((country) =>
          newSelectedOptions.some((o) => o.country === country)
        )
      );

      setSelectedValues(() => newSelectedOptions);
    }
  };

  const handleSearch = (event, value) => {
    const query = value || event.target.value;
    setSearchQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
        isOptionEqualToValue={(option, value) => {
          return option.country === value.country && option.city === value.city;
        }}
        getOptionLabel={(option) => option.city || option.country}
        options={[
          ...options,
          { label: "Load more", type: "button", country: "", city: "" },
        ]}
        loading={loading}
        multiple={true}
        value={selectedValues}
        onChange={(event, value) => {
          setSelectedCountries(() =>
            selectedCountries.filter((country) =>
              value.some((o) => o.country === country)
            )
          );

          setSelectedValues(value);
        }}
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
          }
          if (option.type === "city") {
            return (
              <li {...props} onClick={() => handleOptionClick(option)}>
                <Checkbox checked={selectedValues.includes(option)} />
                {option.city}
              </li>
            );
          }

          if (
            option.type === "button" &&
            hasMore &&
            options.length > 0 &&
            !loading
          )
            return (
              <Typography
                variant="h6"
                p={2}
                pb={0}
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={handleLoadMore}
              >
                {option.label}
              </Typography>
            );
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
            onChange={handleSearch}
          />
        )}
      />
    </Box>
  );
}
