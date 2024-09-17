import React from "react";
import { Button, Container, Typography, Stack } from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

const LoginPage: React.FC = () => {
  const handleGoogleLogin = () => {
    const googleClientId =
      "1074212407033-6i7kjpp2npa840ut5irf1ftp73fvfa1i.apps.googleusercontent.com";
    const redirectUri = "http://localhost:3000/home";
    const scope = "email profile";
    const responseType = "token";
    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = googleOAuthUrl;
  };

  const handleFacebookLogin = () => {
    window.location.href =
      "https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&state=YOUR_STATE_PARAM";
  };

  const handleEvenMoreLogin = () => {
    console.log("More login options clicked");
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" color="white" gutterBottom>
        Login
      </Typography>
      <Stack direction="column" spacing={2} mt={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleLogin}
          fullWidth
          sx={{ padding: 2 }}
        >
          Login with Google
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FacebookIcon />}
          onClick={handleFacebookLogin}
          fullWidth
          sx={{ padding: 2 }}
        >
          Login with Facebook
        </Button>
        <Button
          variant="text"
          color="secondary"
          onClick={handleEvenMoreLogin}
          fullWidth
        >
          Login with Even More
        </Button>
      </Stack>
    </Container>
  );
};

export default LoginPage;
