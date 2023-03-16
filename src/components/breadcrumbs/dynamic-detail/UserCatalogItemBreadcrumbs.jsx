import { useSelector } from "react-redux";

const UserCatalogItemBreadcrumbs = () => {
  const { data } = useSelector((state) => state.productDetails);
  return <span>{data?.subCategoryName}</span>;
};
export default UserCatalogItemBreadcrumbs;
