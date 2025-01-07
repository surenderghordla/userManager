import './App.css';
import Register from "./components/register.tsx";
import { Router, Route, RootRoute, RouterProvider} from "@tanstack/react-router";
import Sidebar from "./components/sidebar.tsx";
import supabase from '@/utils/supabase';

const rootRoute = new RootRoute();

const registerRoute = new Route({
  getParentRoute:()=> rootRoute,
  path: "/",
  component: Register,
  beforeLoad: async () => {
    const { error } = await supabase.auth.signOut();
    if(error){
      window.location.href = "/";
    }
  }
})

const sidebarRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/main",
  component: Sidebar,
  beforeLoad: async () => {
    const { error } = await supabase.auth.getUser();
    if(error){
      window.location.href = "/";
    }
  }
})

const router = new Router({
  routeTree: rootRoute.addChildren([sidebarRoute,registerRoute]),
});

export default function () {
  return(
    <RouterProvider router={router} />
  )
}
