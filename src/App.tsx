import './App.css';
import Register from "./components/register.tsx";
import { Router,Route,RootRoute, RouterProvider } from "@tanstack/react-router";
import Sidebar from "./components/sidebar.tsx";

const rootRoute = new RootRoute();

const registerRoute = new Route({
  getParentRoute: ()=> rootRoute,
  path:"/",
  component:Register,
})
const sidebarRoute  =new Route({
  getParentRoute: ()=> rootRoute,
  path:"main",
  component:Sidebar,  
})

const router = new Router({
  routeTree:rootRoute.addChildren([registerRoute,sidebarRoute]),
});

export default function () {
  return (
    <RouterProvider router={router} />
  )
}
