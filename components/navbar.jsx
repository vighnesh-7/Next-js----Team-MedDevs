import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import MainNav from "./main-navbar";
import PaymentComponent from "./Transaction";


const Navbar = () => {
    // const {userId} = auth()

    // if(!userId)     redirect("/sign-in")
    
    return ( 
    <div className="border-b border-gray-300 " style={{backgroundColor:'#2e6b69'}} >
        <div className="flex items-center h-16 px-4">
            <MainNav />
            {/* <PaymentComponent/> */}
            <div className="flex items-center space-x-5 ml-auto ">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    </div>
        
    );
}

export default Navbar;