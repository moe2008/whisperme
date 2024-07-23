import React from "react";
import AppPage from "@/components/layout/AppPage";
import ProtectedRoute from "@/helper/ProtectedRoute";

const index = () => {
  return (
    <ProtectedRoute>
      <AppPage />
    </ProtectedRoute>
  );
};

export default index;
