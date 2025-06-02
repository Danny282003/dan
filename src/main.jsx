import { createRoot } from "react-dom/client";
import './tailwind.css'
// import Explore from "./Explore";

// import Project from "./Project";
import Dynamicweb from "./Dynamicweb";
import Practice from "./Practice";
import Assign from "./Assign";
import LearningUseRef from "./LearningUseRef";
import SalesApp from "./SalesApp";
import LearningUseEffect from "./LearningUseEffect";
import FetchingData from "./FetchingData";
import Timer from "./Timer";
import TailwindResponsive from "./TailwindResponsive";
import Header from "./Header";
import Extra from "./Extra";
import Assignslider from "./Assignslider";

// import Explore from "./Explore";


const dan = createRoot(document.getElementById('root'))

function MyFunction() {
    return (
        // <Dynamicweb />
        // <Project />
        // <Practice />
        // <Explore />
        <>
            <Assignslider />
            <Assign />  
        </>
       
        // <Timer/>
        // <SalesApp />
        // <>
        //  <Header/>
        // <TailwindResponsive />
        // </>
       
     
    )
}

dan.render(
    <MyFunction />
)




