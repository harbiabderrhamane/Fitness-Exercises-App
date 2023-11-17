import React from "react";

import { Box, Stack } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

function HorizontalScrollbar({ data, setBodyPart, bodyPart, isBodyParts }) {
  return (
    <Stack direction={"row"} sx={{ overflowY: "auto" }}>
      {data.map((item) => (
        <Box key={item.id || item} m="0 40px">
          {/* here we are just chekcing if we are displayin the body parts if yes show the body parts if not show the exerciseCard */}
          {isBodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default HorizontalScrollbar;
