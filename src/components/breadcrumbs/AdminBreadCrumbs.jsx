import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { adminPage } from "../../utils/constants";

function AdminBreadcrumbs({ items = [] }) {
  const location = useLocation();
  const { product } = useParams();
  const landingPage = location.pathname;

  const findedAdminPage = adminPage.find(
    (admin) => `/${admin.to}` === landingPage
  );

  const findedProduct = items.find((item) => item.id === +product);

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {location.pathname !== "/admin" &&
        (findedAdminPage?.theme === "Товары"
          ? null
          : landingPage.split("/").includes("goods") && (
              <Link color="inherit" to="/">
                Товары
              </Link>
            ))}
      {findedProduct && <Link color="inherit">{findedProduct.theme}</Link>}
    </MuiBreadcrumbs>
  );
}

export default AdminBreadcrumbs;
