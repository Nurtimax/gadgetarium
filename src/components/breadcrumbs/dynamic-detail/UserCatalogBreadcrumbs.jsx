import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { catalogMenu_FAKE_DATA } from "../../../utils/constants";

const UserCatalogBreadcrumbs = () => {
  const { catalogItem } = useParams();
  const findedCatalogItem = catalogMenu_FAKE_DATA.find(
    (catalog) => catalog.id === Number(catalogItem)
  );

  const { data } = useSelector((state) => state.productDetails);

  return <span>{data?.categoryName || findedCatalogItem?.title}</span>;
};

export default UserCatalogBreadcrumbs;
