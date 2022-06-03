import Feed from "../../components/feed/Feed";

export default function Home() {
    return (
        <>
            <div sx={{display:"flex", flexDirection:"row"}}>
                <Feed />
            </div>
        </>
    );
}
