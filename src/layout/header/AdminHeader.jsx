import { AppBar, Box, Container, Grid, Toolbar } from "@mui/material";
import { Logo } from "../../assets";
import NavLinks from "../../components/header/NavLinks";
import AdminProfile from "../../components/header/AdminProfile";
import { adminPage } from "../../utils/constants";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <Box className="admin_stop">
      <AppBar position="fixed">
        <Container>
          <Toolbar className="padding flex">
            <Grid container spacing={5} className="flex between">
              <Grid item xl={2} lg={2} md={1.9}>
                <Link to="/">
                  <Logo />
                </Link>
              </Grid>
              <Grid item xl={5} lg={5} md={7.4} className="flex center">
                <NavLinks page={adminPage} />
              </Grid>
              <Grid item xl={3.6} lg={3} md={2} className="height flex">
                <AdminProfile />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default AdminHeader;
