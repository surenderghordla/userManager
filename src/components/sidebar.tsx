import Header from "./header.tsx";
import Sidebar from "./app-sidebar";
import { SidebarProvider } from "./ui/sidebar.tsx";
import TableData from "./tableData.tsx";


export default function () {
    return (
        <SidebarProvider className="sidebar">
            <Sidebar />
            <main>
                <Header />
                <TableData />
            </main>
        </SidebarProvider>
    )
}