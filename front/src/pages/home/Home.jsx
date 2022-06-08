import Feed from "../../components/feed/Feed";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authGuard } from "../../services/auth-guard";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        authGuard(navigate);
        setLoading(false);
    }, []);

    return (
        <>
            <div sx={{ display: "flex", flexDirection: "row" }}>{!loading && <Feed />}</div>
        </>
    );
}
