import { Link, useParams, useLocation } from "react-router-dom";
import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import { catalogMenu_FAKE_DATA, userPages } from "../../utils/constants";

function UserBreadcrumbs() {
  const { catalogId, catalogId_id } = useParams();
  const location = useLocation();
  const landingPage = location.pathname.split("/").join(" ");

  const findedCatalog = catalogMenu_FAKE_DATA?.find(
    (catalog) => catalog.id === Number(catalogId)
  );

  const findedCatalogId = findedCatalog?.subcategories.find(
    (catalog_id) => catalog_id.id === Number(catalogId_id)
  );

  const findedTabs = userPages?.find(
    (tab) => String(tab.to) === String(landingPage).trim()
  );

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {location.pathname !== "/" && (
        <Link color="inherit" id="my-breadcrumb-id" to="/">
          <Typography>Главная</Typography>
        </Link>
      )}
      {findedCatalog ? (
        <Link to={findedCatalog?.id}>{findedCatalog?.title}</Link>
      ) : (
        <Link to={landingPage}>{findedTabs?.theme}</Link>
      )}
      {findedCatalogId && (
        <Link to={findedCatalogId?.id}>{findedCatalogId?.title}</Link>
      )}
    </MuiBreadcrumbs>
  );
}

export default UserBreadcrumbs;
