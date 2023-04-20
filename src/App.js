import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./components/context/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
