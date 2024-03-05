import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import HomePageDir from "./pages/Home/HomePageDir.jsx";



// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      
      <Route path="/" element={<HomePageDir />} />
     
    </Route>
  )
);

function App() {
  return <RouterProvider  router={router} />;
}

export default App;
