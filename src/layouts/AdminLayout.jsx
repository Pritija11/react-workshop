import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "react-router-dom";
const AdminLayout = ({children}) =>{

    return (
        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[250px_1fr] grid-rows-[auto_1fr_auto] min-h-screen">
            <div className="col-span-2">
                <Header/>
            </div>
            <div className="bg-stone-600 col-span-2  md:col-span-1 flex flex-cols">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/notetaker">Note Taker</Link>
            </div>
            <div className="overflow-y-auto">Content
                {children}
            </div>
            <div className="col-span-2">
                <Footer/>
            </div>

        </div>
    );


}

export default AdminLayout;