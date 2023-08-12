import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import theme from "./theme";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <NavBar />
      <Container maxWidth="xl">
        {location.pathname === "/" ? (
          <div>Home</div>
        ) : (
          <>
            <Outlet />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
