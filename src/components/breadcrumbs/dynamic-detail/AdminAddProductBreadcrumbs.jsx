import { useSearchParams } from "react-router-dom";

const AdminAddProductBreadcrumbs = () => {
  const [searchParams] = useSearchParams();
  const stepper = searchParams.get("stepper");

  return <span>{stepper || "Добавление товара"}</span>;
};

export default AdminAddProductBreadcrumbs;
