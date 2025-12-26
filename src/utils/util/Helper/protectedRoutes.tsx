import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router";
import { queryClient } from "./QueryClientInstance";
import { useEffect } from "react";
import LoadingFull from "@/frontend/Loading";

export default function ProtectedRoutes() {
  const { isAuthenticated, isLoading, revalidateAuth } = useAuth();
  const location = useLocation();
  useEffect(() => {
    if (isAuthenticated) {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    }
    return revalidateAuth();
  }, [isAuthenticated, location.pathname, revalidateAuth]);
  if (isLoading) {
    return <LoadingFull />;
  }
  if (!isAuthenticated && !isLoading) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }
  return (
    isAuthenticated &&
    !isLoading && (
      <section className="w-screen min-h-screen scrollbar-hide">
        <Outlet />
      </section>
    )
  );
}
