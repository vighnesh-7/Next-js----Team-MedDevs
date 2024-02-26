
import UserDashboard from "@/components/UserDashboard";

import { currentUser } from '@clerk/nextjs';

const Profile = async () => {
    const user = await currentUser();


    const userInfo = {
        name: `${user.firstName} ${user.lastName}`,
        firstName:user.firstName,
        lastName:user.lastName,
        imageUrl: user.imageUrl,
        // lastSignInAt: user.lastSignInAt,
        email: user.emailAddresses[0].emailAddress,
        phoneNumber:user.phoneNumbers[0].phoneNumber,
        };

        // console.log(user);

    return ( 
        <div style={{ display: "flex", justifyContent: "space-between", padding: 50 }}  >
            <UserDashboard myuser ={userInfo}/>
        </div>
    );
}

export default Profile;