import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GadgetariumSpinnerLoading from "../components/GadgetariumSpinnerLoading";
import { ROUTES } from "../utils/constants";

const AddProduct = lazy(() => import("../containers/add-product/AddProduct"));
const Orders = lazy(() => import("../containers/orders/Orders"));
const AdminLayout = lazy(() => import("../layout/admin"));
const Goods = lazy(() => import("../containers/goods"));
const ReviewRating = lazy(() => import("../containers/review-rating"));

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Suspense fallback={<GadgetariumSpinnerLoading />}>
            <AdminLayout />
          </Suspense>
        }
      >
        <Route index element={<Navigate to={ROUTES.GOODS} />} />
        <Route
          path="goods"
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Goods />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.GOODS}/${ROUTES.PRODUCT}`}
          element={<h1>Product</h1>}
        />
        <Route
          path={`${ROUTES.GOODS}/${ROUTES.ADMINITEMDETAIL}`}
          element={<h1>detail</h1>}
        />
        <Route
          path={`${ROUTES.GOODS}/${ROUTES.ADDPRODUCT}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <AddProduct />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.ORDERS}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.REVIEWSRATING}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <ReviewRating />
            </Suspense>
          }
        />
        <Route />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
