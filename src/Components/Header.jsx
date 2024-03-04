import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "800",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ fontWeight: 800 }}
              onClick={() => navigate("/")}
            >
              Crypto Hunter
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
                color: "white",
                border: "1px solid #ced4da",
              }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"RUB"}>RUB</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
