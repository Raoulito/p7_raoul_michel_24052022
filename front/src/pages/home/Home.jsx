import "./home.css";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
    return (
        <>
            <div className="homeContainer">
                <Feed />
                <Rightbar />
            </div>
        </>
    );
}
