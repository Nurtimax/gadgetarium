import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GadgetariumSpinnerLoading from "../components/GadgetariumSpinnerLoading";
import React from "react";
import { ROUTES } from "../utils/constants/routes";

const AddProduct = lazy(() => import("../containers/add-product/AddProduct"));
const Orders = lazy(() => import("../containers/orders/Orders"));
const AdminLayout = lazy(() => import("../layout/admin"));
const Goods = lazy(() => import("../containers/goods"));
const ReviewRating = lazy(() => import("../containers/review-rating"));
const OrderItem = lazy(() => import("../components/orders/OrderItem"));
const Forms = lazy(() => import("../components/add_product/Forms"));
const PriceQuantity = lazy(() => {
  return import("../components/add_product/PriceQuantity");
});
const DescriptionOverview = lazy(() => {
  return import("../components/add_product/DescriptionOverview");
});

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
          path={`${ROUTES.GOODS}/${ROUTES.ADDPRODUCT}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <AddProduct />
            </Suspense>
          }
        >
          <Route
            path="part-1"
            element={
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <Forms />
              </Suspense>
            }
          />
          <Route
            path="part-2"
            element={
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <PriceQuantity />
              </Suspense>
            }
          />
          <Route
            path="part-3"
            element={
              <Suspense fallback={<GadgetariumSpinnerLoading />}>
                <DescriptionOverview />
              </Suspense>
            }
          />
        </Route>
        <Route
          path={`${ROUTES.ORDERS}`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.ORDERS}/:orderId`}
          element={
            <Suspense fallback={<GadgetariumSpinnerLoading />}>
              <OrderItem />
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
