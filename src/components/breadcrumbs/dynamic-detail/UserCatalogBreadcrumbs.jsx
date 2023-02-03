import { useParams } from "react-router-dom";
import { catalogMenu_FAKE_DATA } from "../../../utils/constants";

const UserCatalogBreadcrumbs = () => {
  const { catalogItem } = useParams();
  const findedCatalogItem = catalogMenu_FAKE_DATA.find(
    (catalog) => catalog.id === +catalogItem
  );
  return <span>{findedCatalogItem?.title}</span>;
};

export default UserCatalogBreadcrumbs;
