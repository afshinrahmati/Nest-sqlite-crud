import { RouterGroup } from "../../utils/routerGroup";
import { storeLogin } from "../../controllers/api/user/store";

export const clientRouter: RouterGroup = {
    router: (route) => {
        route.post("/login", storeLogin)
    }
}