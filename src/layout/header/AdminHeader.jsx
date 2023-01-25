import { AppBar, Box, Container, Grid, Toolbar } from "@mui/material";
import { Logo } from "../../assets";
import NavLinks from "../../components/header/NavLinks";
import AdminProfile from "../../components/header/AdminProfile";
import { adminPage } from "../../utils/constants";

const AdminHeader = () => {
  return (
    <Box className="admin_stop">
      <AppBar position="fixed">
        <Container>
          <Toolbar className="padding flex">
            <Grid container spacing={1} className="between">
              <Grid item xs={2.5}>
                <Logo />
              </Grid>
              <Grid item xs={5.5}>
                <NavLinks page={adminPage} />
              </Grid>
              <Grid item xs={3.5} className={`height flex `}>
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
