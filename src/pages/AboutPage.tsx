import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to the About Page
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/contact"
      >
        Go to Contact
      </Button>
    </Container>
  );
};

export default AboutPage;
