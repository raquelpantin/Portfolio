import React, { useState } from "react";
import "./ProjectSection.scss";
import Crypto from "../Projects/Crypto";
import Azul from "../Projects/Azul";
import Brainflix from "../Projects/Brainflix";
import Hackathon from "../Projects/Hackathon";
import Shopify from "../Projects/Shopify";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#116466",
      contrastText: "#f9f6f0",
    },
  },
});

function ProjectSection() {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <Crypto />;
    } else if (page === 1) {
      return <Azul />;
    } else if (page === 2) {
      return <Brainflix />;
    } else if (page === 3) {
      return <Hackathon />;
    } else {
      return <Shopify />;
    }
  };

  return (
    <div className="project">
      <h2 className="project-title">Projects</h2>
      <div className="project-container">
        <div className="project-pages">{PageDisplay()}</div>

        <div className="project-buttons">
          <ThemeProvider theme={theme}>
            <Button
              disabled={page === 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
              variant="contained"
              color="neutral"
            >
              Back
            </Button>
            <Button
              disabled={page === 4}
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
              variant="contained"
              color="neutral"
            >
              Next
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
