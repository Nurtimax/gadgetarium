import { Box, Container, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import GadgetariumSpinnerLoading from "../../components/GadgetariumSpinnerLoading";
import Tabs from "../../components/UI/Tabs";
import { ADMIN_TAB_ITEMS, SEARCH_PARAMS } from "../../utils/constants";
import AdminProductDetails from "./AdminProductDetails";
const AdminMainProductDetails = () => {
  const { data, isLoading, chooseItem, count, images } = useSelector(
    (state) => state.adminProductDetails
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <StyledAdminMainProductDetails>
      <Container>
        {isLoading && <GadgetariumSpinnerLoading />}
        <AdminProductDetails
          data={data}
          chooseItem={chooseItem}
          count={count}
          images={images}
        />
        <Tabs tabs={ADMIN_TAB_ITEMS} param={SEARCH_PARAMS.CONTENT} />
        <Outlet />
      </Container>
    </StyledAdminMainProductDetails>
  );
};

export default AdminMainProductDetails;

const StyledAdminMainProductDetails = styled(Box)(() => ({
  padding: "0 0 215px",
}));
