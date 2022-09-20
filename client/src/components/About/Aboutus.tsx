import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import React from "react";
import agent from "../../api/agent";
const Aboutus = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Error testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestError.get400Error().catch((error) => console.log(error))
          }
        >
          Test 400 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestError.get500Error().catch((error) => console.log(error))
          }
        >
          Test 500 Server Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestError.get401Error().catch((error) => console.log(error))
          }
        >
          Test unauthorize Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestError.getValidationError().catch((error: unknown) =>
              console.log(error)
            )
          }
        >
          Test Validation Error
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Aboutus;
