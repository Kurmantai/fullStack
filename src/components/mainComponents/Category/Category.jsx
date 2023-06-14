import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Category() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "150px",
        height: "25px",
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid #ccc",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          label=""
          sx={{
            width: "100%",
            height: "100%",
            "& .MuiSelect-root": {
              paddingTop: "0",
              paddingBottom: "0",
            },
            "& .MuiSelect-selectMenu": {
              minHeight: "initial",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <MenuItem value={10}>Top Hit 2023</MenuItem>
          <MenuItem value={20}>Dance</MenuItem>
          <MenuItem value={30}>Relax</MenuItem>
          <MenuItem value={40}>Hip Hop</MenuItem>
          <MenuItem value={50}>Work out</MenuItem>
          <MenuItem value={60}>Classic</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
