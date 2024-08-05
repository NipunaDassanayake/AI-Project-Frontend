import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
}
export default RootLayout;
