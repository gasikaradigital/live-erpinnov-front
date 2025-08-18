import { api } from "../config"

export const fetchPlan = async () => {
    try {
        const res = await api.get("/api/plans");

        console.log(res);
        if (res.status == 200) {
            return res;
        } else {

            return null;
        }
    } catch (err) {

        return null;
    }
}