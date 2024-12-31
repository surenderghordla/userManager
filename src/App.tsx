import Header from "./components/header";
import Sidebar from "./components/app-sidebar";
import './App.css';
import { SidebarProvider } from './components/ui/sidebar.tsx'
import Main from "./components/tableData.tsx";
import Register from "./components/register.tsx";

import { Router,Route,RootRoute, RouterProvider } from "@tanstack/react-router";

const rootRoute = new RootRoute();

const registerRoute = new Route({
  getParentRoute: ()=> rootRoute,
  path:"/",
  component:Register,
})

const mainRoute = new Route({
  getParentRoute: ()=> rootRoute,
  path:"/main",
  component:Main,
})

const router = new Router({
  routeTree:rootRoute.addChildren([registerRoute,mainRoute]),
});

export default function () {
  return (
    <SidebarProvider >
      <Sidebar />
      <main>
        <Header />
        <RouterProvider router={router} />
      </main>
    </SidebarProvider>
  )
}
