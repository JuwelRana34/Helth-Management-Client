import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Providers/AuthProvider.jsx";
import ThemeProvider from "./Providers/ThemeProvider.jsx";
import Routes from "./Routes/Routes.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <Routes />
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
