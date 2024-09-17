import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to the Contact Page
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Home
      </Button>
    </Container>
  );
};

export default ContactPage;
