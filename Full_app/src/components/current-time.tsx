import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const CurrentTime = (): JSX.Element => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const inverval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(inverval)
  }, [])

  return (
    <>
      <Box className="current-time">
        <Typography variant="h5">Current time: {time.toLocaleTimeString()}</Typography>
      </Box>
    </>
  );
};

export default CurrentTime;
