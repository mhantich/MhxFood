import { Navigate, useLocation } from "react-router-dom";
import { useUserStore } from "@/stores/userStore";
import { useAuthStore } from "@/stores/authStore";
import { LoadingAnimation } from "@/components/LoadingAnimation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function PublicRoutes({ children }: ProtectedRouteProps) {
  const { user } = useUserStore();
  const { isLoading, isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (isAuthenticated || user) {
    // Preserve the attempted URL to redirect back after login
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

export default PublicRoutes;