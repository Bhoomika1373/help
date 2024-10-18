import Navbar from "./navbar";
import SideBar from "./sidebar";
import Content from "./content";
export default function Home() {

  return (
     <><Navbar/>
     <div className="flex">
     <SideBar/>
     <Content/>
     </div>
    </>
   
  );
}
