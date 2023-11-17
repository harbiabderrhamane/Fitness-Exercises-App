import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "70px" } }}
      //position="relative"
      p="20px"
    >
      <Stack direction={"row"}>
        <Box>
          <Typography color="#FF2625" fontSize="26px" fontWeight="700">
            Fitness Club
          </Typography>
          <Typography
            fontWeight="700"
            sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          >
            Sweat, Smile <br />
            And Repeat
          </Typography>
          <Typography fontSize={"20px"} lineHeight={"35px"} mb={"16px"}>
            Check our the most effective personlized exercices to you
          </Typography>

          <Button variant="contained" color="error" href="#exercices">
            Explore Exercices
          </Button>
          <Typography
            color="#FF2625"
            fontSize="200px"
            fontWeight={600}
            sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }}
          >
            Exercises
          </Typography>
        </Box>
        <Box>
          <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
        </Box>
      </Stack>
    </Box>
  );
}

export default HeroBanner;
// import React from "react";
// import { Box, Typography, Button, Stack } from "@mui/material";
// import Banner from "../assets/images/banner.png";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// function HeroBanner() {
//   return (
//     <Box
//       sx={{ mt: { lg: "150px", sx: "70px" }, ml: { sm: "70px" } }}
//       // position="relative"
//       p="20px"
//     >
//       <Stack direction={"row"}>
//         <Box>
//           <Typography color="#FF2625" fontSize="26px" fontWeight="700">
//             Fitness Club
//           </Typography>
//           <Typography
//             fontWeight="700"
//             sx={{ fontSize: { lg: "44px", xs: "40px" } }}
//           >
//             Sweat, Smile <br />
//             And Repeat
//           </Typography>
//           <Typography fontSize={"20px"} lineHeight={"35px"} mb={"16px"}>
//             Check our the most effective personlized exercices to you
//           </Typography>

//           <Button variant="contained" color="error" href="#exercices">
//             Explore Exercices
//           </Button>
//           <Typography
//             color="#FF2625"
//             fontSize="200px"
//             fontWeight={600}
//             sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }}
//           >
//             Exercises
//           </Typography>
//         </Box>
//         <Box>
//           <img src={Banner} alt="Banner" className="hero-banner-img" />
//         </Box>
//       </Stack>
//     </Box>
//   );
// }

// export default HeroBanner;
