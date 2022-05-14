import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor: '#4D4C7D'}}>
          <Toolbar>
            <Button onClick={() => navigate("/")} color="inherit">dashboard</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
