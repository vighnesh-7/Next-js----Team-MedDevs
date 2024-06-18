import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/help","/aboutus","/"],

    ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/","/api/user/create"],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};