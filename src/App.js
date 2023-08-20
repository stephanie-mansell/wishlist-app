import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

import Home from "./pages/Home";
import FAQ from "./pages/Faq";
import Login from "./pages/Login";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
]);

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ClerkProvider>
  );
}

export default App;
