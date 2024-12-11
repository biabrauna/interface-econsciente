
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function SplashScreen() {
    const navigate = useNavigate();

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        setTimeout(() => {
            navigate("/Login");
        }, 1000);
    })

    return (
        <div style={{ backgroundImage: "url(https://console.cloudinary.com/pm/c-d2ad94b7829cc5889bcd8db4d261c9/media-explorer?assetId=702650c913e35e4b6b3d4fe503112a1f)", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
            <div className="App">
            <img src="https://res.cloudinary.com/dnulz0tix/image/upload/v1733910597/z1yhunaucajmbcydnexn.png" className="App-logo" alt="logo" />
            </div>
        </div>
    );
}