import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import AuthService from "../../services/auth.service";

const theme = createTheme();

export default function SignUp() {
  const [userNameError, setUserNameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [state, setState] = React.useState({
    username: "",
    password: "",
    email: "",
    loading: false,
    message: "",
  });

  const clearForm = () => {
    setUserNameError(false);
    setPasswordError(false);
    setState({
      username: "",
      password: "",
      loading: false,
      message: "",
    });
  };

  const validateForm = (data) => {
    clearForm();
    let isValidForm = true;
    const username = data.get("username");
    if (username === "") {
      setUserNameError(true);
      isValidForm = false;
    }
    const password = data.get("password");
    if (password === "") {
      setPasswordError(true);
      isValidForm = false;
    }
    setState({
      loading: isValidForm,
      message: isValidForm ? "" : "Empty required fields",
    });
    return isValidForm;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validateForm(data)) {
      await AuthService.register(
        data.get("username"),
        data.get("password")
      ).then(
        () => {
          window.location.href = "/";
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
          setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={userNameError}
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  //required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={passwordError}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={state.loading}
            >
              Sign up
            </Button>
            <Collapse in={state.message !== ""}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={clearForm}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {state.message}
              </Alert>
            </Collapse>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
