import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/app/routes/routes";
import { AuthProvider } from "@/context/auth.context";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}