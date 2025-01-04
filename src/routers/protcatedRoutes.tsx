import Loaiding from "@/components/Loaiding";
import { useUserStore } from "@/stores/userStore";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoutes({ children }: ProtectedRouteProps) {
  const { user } = useUserStore();
  if (!user) {
    return <Loaiding />;
  }

  return <div>{user ? children : <Navigate to="/login" />}</div>;
}

export default ProtectedRoutes;
