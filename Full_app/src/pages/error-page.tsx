import { Box, Typography } from "@mui/material"
import { useRouteError } from "react-router-dom"
interface Error{
    error: {
        message: string,
        stack: string
    },
    statusText: string,
    status: number
}

const ErrorPage = (): JSX.Element => {
    const error = useRouteError() as Error
    console.log(error);
    const errorMessage = error?.error.message
    console.log(errorMessage);
    

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", gap: 5 }}>
        <Typography variant="h1" component="h1">Wrong page!</Typography>
        <Typography variant="body1" component="p">Sorry, an unexpected error has occured.</Typography>
        <Typography variant="body1" component="p">{errorMessage}</Typography>
    </Box>
  )
}

export default ErrorPage