import { api } from "../config"

export const fetchPlas = async () => {
    try {
        let res = await api.get("/api/plans");
        if (res.status == 200) {
            return res;
        } else {

            return null;
        }
    } catch (err) {

        return null;
    }
}