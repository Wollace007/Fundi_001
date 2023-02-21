import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { AcUnitOutlined, Download } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Divider } from '@mui/material';
import Pic from "../assets/images/pro avatar.jpg";
import PieChart from './graphs/PieChart';
import LineGraphs from './graphs/LineGraphs';
import Picture from "../assets/images/illustration.jpg"



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#007bff',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="#007bff"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="#007bff"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <React.Fragment>
      <Box sx={{ p: 3, mx: 'auto' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static"
            sx={{ backgroundColor: "#fff !important", }}

          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="#212121"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block', color: "#212121" } }}
              >
                Home
              </Typography>
              <Search sx={{ color: "#212121", display: 'flex', justifyContent: 'flex-end', border: " 1px solid blue" }}>
                <SearchIconWrapper>
                  <SearchIcon sx={{ backgroundColor: "#00e5ff !important" }} />
                </SearchIconWrapper  >
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ color: "#212121" }}

                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' }, margin: 'auto 2rem' }}>
                <IconButton size="large" aria-label="show 4 new mails" color="#007bff">
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="#007bff"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Divider orientation="vertical" flexItem sx={{ borderRight: 'solid 5px blue', mx: 4 }} />
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="#007bff">
                  <Typography sx={{ fontSize: ".85rem", textTransform: "capitalize", mr: 1 }}> hello world</Typography>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleProfileMenuOpen} sx={{}}>
                      <Avatar alt="wollace" src={Pic} sx={{ width: 44, height: 44 }} />
                    </IconButton>
                  </Tooltip>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="#007bff"

                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Grid container spacing={1} sx={{ my: 1.5 }}>
            <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: "start", color: '#e53935', fontSize: "1.85rem" }}>
              Dashboard
            </Grid>
            <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end" }}>
              <Button variant="contained" startIcon={<Download />} style={{ textTransform: "none" }}>
                Generate Report
              </Button>

            </Grid>

          </Grid>
          {renderMobileMenu}
          {renderMenu}
        </Box>


        <Box sx={{ flexGrow: 1, marginTop: "5px" }}>
          {/* <Card variant="outl ined">{card}</Card> */}
          <Grid container spacing={2}>
            <Grid item xs={3} >
              <Card sx={{ minWidth: 275, borderLeft: 'solid 3px red' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <Grid item style={{ display: 'flex', color: '#e53935' }}>
                      welcomewrsrtyu
                    </Grid>
                    <Grid item style={{ display: 'flex', fontSize: '22px', fontWeight: 700 }}>
                      $4000
                    </Grid>
                  </div>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <AcUnitOutlined sx={{ fontSize: '2.5em !important', color: '##8a8ea3' }} />

                  </Grid>
                </CardContent>

              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ minWidth: 275, borderLeft: 'solid 3px red' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <Grid item style={{ display: 'flex', color: '#e53935' }}>
                      welcomewrsrtyu
                    </Grid>
                    <Grid item style={{ display: 'flex', fontSize: '22px', fontWeight: 700 }}>
                      $4000
                    </Grid>
                  </div>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <AcUnitOutlined sx={{ fontSize: '2.5em !important', color: '##8a8ea3' }} />

                  </Grid>
                </CardContent>

              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ minWidth: 275, borderLeft: 'solid 3px red' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <Grid item style={{ display: 'flex', color: '#e53935' }}>
                      welcomewrsrtyu
                    </Grid>
                    <Grid item style={{ display: 'flex', fontSize: '22px', fontWeight: 700 }}>
                      $4000
                    </Grid>
                  </div>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <AcUnitOutlined sx={{ fontSize: '2.5em !important', color: '##8a8ea3' }} />

                  </Grid>
                </CardContent>

              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ minWidth: 275, borderLeft: 'solid 3px red' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <Grid item style={{ display: 'flex', color: '#e53935' }}>
                      welcomewrsrtyu
                    </Grid>
                    <Grid item style={{ display: 'flex', fontSize: '22px', fontWeight: 700 }}>
                      $4000
                    </Grid>
                  </div>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <AcUnitOutlined sx={{ fontSize: '2.5em !important', color: '##8a8ea3' }} />

                  </Grid>
                </CardContent>

              </Card>
            </Grid>

          </Grid>
        </Box>

        <Box component="span" sx={{ flexGrow: 1, padding: '10rem' }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <LineGraphs />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box component="span" sx={{ flexGrow: 1, padding: '10rem' }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>

                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} style={{}}>
              <Card >
                <img
                  style={{ height: "auto", maxWidth: "50%", objectFit: "contain" }}
                  alt="nothing"
                  // src='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg'
                   src={Picture}
                  title="illustration"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Our illustrations
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Add some quality, svg illustrations to your project courtesy of unDraw,
                    a constantly updated collection of beautiful
                    svg images that you can use completely free and without attribution!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>

      </Box>

    </React.Fragment>
  );
}

export default Home
