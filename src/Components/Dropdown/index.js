import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { data } from "../Data";

const MenuProps = {
  PaperProps: {
    style: {
      width: "160px",
      maxHeight: "350px",
      left: "772px",
    },
  },
};

function getStyles(country, countryName, theme) {
  return {
    fontWeight:
      countryName.indexOf(country) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Dropdown() {
  const theme = useTheme();
  const [countryName, setCountryName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCountryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 160, mt: 1 }}>
        <Select
          multiple
          displayEmpty
          value={countryName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em style={{ height: 0 }}>Landen</em>;
            }
            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          style={{
            minHeight: 0,
            height: "30px",
            minWidth: 0,
          }}
        >
          <MenuItem disabled value="">
            <em>Afrika</em>
          </MenuItem>
          {data.map(
            (country, index) =>
              country.continent === "Afrika" && (
                <MenuItem
                  key={index}
                  value={country.location}
                  style={getStyles(country, countryName, theme)}
                >
                  {country.location}
                </MenuItem>
              )
          )}
          <MenuItem disabled value="">
            <em>Azië</em>
          </MenuItem>
          {data.map(
            (country, index) =>
              country.continent === "Azie" && (
                <MenuItem
                  key={index}
                  value={country.location}
                  style={getStyles(country, countryName, theme)}
                >
                  {country.location}
                </MenuItem>
              )
          )}
          <MenuItem disabled value="">
            <em>Amerika</em>
          </MenuItem>
          {data.map(
            (country, index) =>
              country.continent === "USA" && (
                <MenuItem
                  key={index}
                  value={country.location}
                  style={getStyles(country, countryName, theme)}
                >
                  {country.location}
                </MenuItem>
              )
          )}
          <MenuItem disabled value="">
            <em>Midden Amerika</em>
          </MenuItem>
          {data.map(
            (country, index) =>
              country.continent === "Midden Amerika" && (
                <MenuItem
                  key={index}
                  value={country.location}
                  style={getStyles(country, countryName, theme)}
                >
                  {country.location}
                </MenuItem>
              )
          )}

          <MenuItem disabled value="">
            <em>Zuid Amerika</em>
          </MenuItem>
          {data.map(
            (country, index) =>
              country.continent === "Zuid Amerika" && (
                <MenuItem
                  key={index}
                  value={country.location}
                  style={getStyles(country, countryName, theme)}
                >
                  {country.location}
                </MenuItem>
              )
          )}
          <MenuItem disabled value="">
            <em>Europa</em>
          </MenuItem>
          {data.map(
            (country, index) =>
              country.continent === "Europa" && (
                <MenuItem
                  key={index}
                  value={country.location}
                  style={getStyles(country, countryName, theme)}
                >
                  {country.location}
                </MenuItem>
              )
          )}
          <MenuItem disabled value="">
            <em>Oceanië</em>
          </MenuItem>
          {data.map(
            (country, index) =>
              country.continent === "Oceanie" && (
                <MenuItem
                  key={index}
                  value={country.location}
                  style={getStyles(country, countryName, theme)}
                >
                  {country.location}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
    </div>
  );
}
