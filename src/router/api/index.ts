import { RouterGroup } from "../../utils/routerGroup";
import { registerUser } from "../../controllers/api/user/store";
import CheckToken from "../../middleware/check-token";

export const clientRouter: RouterGroup = {
    router: (route) => {
        route.post("/register", new CheckToken().handle(), registerUser)
    }
}