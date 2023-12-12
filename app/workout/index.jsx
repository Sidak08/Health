import { Navbar } from "../../components/navbar";

export default function Page() {
    const iconColor = {
        "shorts": "#B7A9A9",
        "home": "#B7A9A9",
        "food": "#B7A9A9",
        "workout": "#FFFFFF"
    }
    return (
        <Navbar iconColor={iconColor} backgroundColor={"#1E1E1E"} />
    )
}