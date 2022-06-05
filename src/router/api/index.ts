import { RouterGroup } from "../../utils/routerGroup";
import { articleGet } from "../../controllers/api/user/store";

export const clientRouter: RouterGroup = {
    router: (route) => {
        route.post("/login", articleGet)
    }
}