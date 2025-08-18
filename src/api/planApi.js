import { api } from "../config"

export const fetchPlan = async () => {
    try {
        let res = await api.get("/api/plans");
        if (res.status == 200) {
            return res.data;
        } else {

            return null;
        }
    } catch (err) {

        return null;
    }
}