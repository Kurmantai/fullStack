import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function NextPage() {
  return (
    <Stack
      style={{
        zIndex: "100",

        background: "lightgray",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
      }}
      spacing={2}
    >
      <Pagination count={3} />
    </Stack>
  );
}
