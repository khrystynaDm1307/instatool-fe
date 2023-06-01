import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import ListSubheader from "@mui/material/ListSubheader";
import { VariableSizeList } from "react-window";
import { Chip, MenuItem, Typography } from "@mui/material";
import { data } from "../../data";

const LISTBOX_PADDING = 8; // px

function VirtualizedAutocomplete({
  options,
  getOptionLabel,
  onChange,
  setSelectedCountries,
  setSelectedValues,
  selectedCountries,
  selectedValues,
  ...props
}) {
  const [listboxWidth, setListboxWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setListboxWidth(listboxRef.current.offsetWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const listboxRef = React.createRef();
  const filterOptions = createFilterOptions();

  const itemData = options.reduce((result, option) => {
    result.push({ type: "group", group: option.country });

    option.cities.forEach((city) => {
      result.push({ type: "option", label: city });
    });

    return result;
  }, []);

  const getChildSize = (index) => {
    const item = itemData[index];
    return item.type === "group" ? 48 : 36;
  };

  const getHeight = () => {
    return itemData.reduce((acc, _, index) => acc + getChildSize(index), 0);
  };

  const getOptionSize = (index) => getChildSize(index);

  const OptionList = React.forwardRef((props, ref) => {
    const { children, ...listProps } = props;
    const totalHeight = getHeight();

    const handleSelect = (value) => {
      setSelectedValues((prevValues) => [...prevValues, value]);
      onChange(value);
    };

    const handleDelete = (value) => {
      setSelectedValues((prevValues) =>
        prevValues.filter((val) => val !== value)
      );
    };

    const handleSelectCountry = (country) => {
      const cities = options.filter((item) => item.country === country);
      const cityLabels = cities[0].cities;

      if (selectedCountries.includes(country)) {
        const remainingCities = selectedValues.filter(
          (value) => !cityLabels.includes(value)
        );

        setSelectedValues(remainingCities);
        setSelectedCountries(selectedCountries.filter((c) => c !== country));
        return;
      }

      setSelectedValues((prevValues) => [...prevValues, ...cityLabels]);
      setSelectedCountries((prevValues) => [...prevValues, country]);
    };

    return (
      <div ref={ref} {...listProps}>
        <VariableSizeList
          height={totalHeight}
          width="100%"
          itemSize={getOptionSize}
          itemCount={itemData.length}
          itemData={itemData}
        >
          {({ index, style }) => {
            const item = itemData[index];

            if (item.type === "group") {
              return (
                <ListSubheader
                  component="div"
                  style={{ ...style, height: 48, cursor: "pointer" }}
                  onClick={() => handleSelectCountry(item.group)}
                >
                  {item.group}
                </ListSubheader>
              );
            }

            return (
              <div style={style} onClick={() => handleSelect(item.label)}>
                {selectedValues.includes(item.label) ? (
                  <Chip
                    label={item.label}
                    onDelete={() => handleDelete(item.label)}
                  />
                ) : (
                  <MenuItem>{item.label}</MenuItem>
                )}
              </div>
            );
          }}
        </VariableSizeList>
      </div>
    );
  });

  return (
    <Autocomplete
      ListboxComponent={OptionList}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
      multiple={true}
      filterOptions={filterOptions}
      getOptionLabel={getOptionLabel}
      options={options}
      groupBy={(option) => option.country}
      onChange={(event, value) => onChange(value)}
      {...props}
    />
  );
}

export default function FilterComponent({
  setSelectedCountries,
  setSelectedValues,
  selectedCountries,
  selectedValues
}) {
  // const options = [
  //   { country: "Ukraine", cities: ["Kyiv", "Lviv"] },
  //   { country: "United States", cities: ["New York", "Los Angeles"] },
  // ];

  const options = Object.entries(data)
    .slice(0, 2)
    .map(([country, cities]) => {
      return { country, cities };
    });

  const getOptionLabel = (option) => option.cities.join(", ");

  const handleSelect = (value) => {
    console.log("Selected:", value);
  };

  return (
    <div>
      <Typography mb={1} variant="h6">
        Location
      </Typography>
      <VirtualizedAutocomplete
        options={options}
        getOptionLabel={getOptionLabel}
        onChange={handleSelect}
        setSelectedCountries={setSelectedCountries}
        setSelectedValues={setSelectedValues}
        selectedCountries={selectedCountries}
        selectedValues={selectedValues}
      />
    </div>
  );
}
