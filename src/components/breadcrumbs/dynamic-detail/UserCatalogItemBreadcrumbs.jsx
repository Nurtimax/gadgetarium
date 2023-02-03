import { useParams } from "react-router-dom";
import { catalogMenu_FAKE_DATA } from "../../../utils/constants";

const UserCatalogItemBreadcrumbs = () => {
  const { catalogItem, product } = useParams();

  const findedCatalogItem = catalogMenu_FAKE_DATA.find(
    (catalog) => catalog.id === +catalogItem
  );

  const getCatalogItem = findedCatalogItem.subcategories.find(
    (catalogId) => catalogId.id === +product
  );

  return <span>{getCatalogItem?.title}</span>;
};
export default UserCatalogItemBreadcrumbs;
