
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
        <div style={{ backgroundImage: `url('https://res.cloudinary.com/dnulz0tix/image/upload/v1733910597/mc8vbxz0qmdqgr1e2bnn.png')`, display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
            <div className="App">
            <img src="https://res.cloudinary.com/dnulz0tix/image/upload/v1733910597/z1yhunaucajmbcydnexn.png" className="App-logo" alt="logo" />
            </div>
        </div>
    );
}