import "./App.css";
import Sidebar from "./components/Navbars/Sidebar/Sidebar";
import Feed from "./components/Feeds/Feed";
import Rightbar from "./components/Navbars/Rightbar/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbars/Navbar/Navbar";
import AddModal from "./components/Modals/AddModal";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light")
    
  const darkTheme = createTheme ({
      palette:{
          mode: mode
      }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddModal/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
