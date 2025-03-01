import React from 'react';
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import "./landingScreen.css"
import { Button } from '@mui/material';

const pages = ['Home', 'Health Topics', 'Services', "Contact"];

const LandingScreen = () => {
  const navigate = useNavigate()

  const onClickHandler = (e, page) => {
    navigate(`/${page}`)
  }
  return (
    <div>
      <Box style={{
        height: "125px",
        backgroundColor: "#97c3ee",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}>
        <h1>Healthcare Portal</h1>
      </Box>

      <AppBar position="static" style={{ backgroundColor: "#8484e2" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "center" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={(e) => onClickHandler(e, page)}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  onClick={() => navigate("/login")}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box style={{
        paddingBottom: "50px",
        backgroundColor: "#351f1f0d"
      }}>
        <h2 style={{
          color: "black",
          margin: 0,
          padding: "80px 10px 50px 100px"
        }}>
          Latest Health Information
        </h2>

        <Box className="box" backgroundColor="white">
          <h2 className='header'>COVID-19 Updates</h2>
          <p>Stay informed about the latest COVID-19 guidelines and vaccination information</p>
          <button className='readmore_buttn'>Read More</button>
        </Box>

        <Box className="box" backgroundColor="white">
          <h2 className='header'>Seasonal Flu Preventation</h2>
          <p>Learn about steps you can take to prevent the seasonal flu and when to get vaccinated</p>
          <button className='readmore_buttn'>Read More</button>
        </Box>

        <Box className="box" backgroundColor="white" marginBottom="0px">
          <h2 className='header'>Mental Health Awareness</h2>
          <p>Explore resources and support options for maintaining good mental health</p>
          <button className='readmore_buttn'>Read More</button>
        </Box>
      </Box>
    </div>
  );
}
export default LandingScreen;