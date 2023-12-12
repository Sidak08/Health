import { Navbar } from "../../components/navbar";


export default function Page() {
    const iconColor = {
        "home": "#B7A9A9",
        "shorts": "#B7A9A9",
        "food": "#FFFFFF",
        "workout": "#B7A9A9"
    }
    return (
        <Navbar iconColor={iconColor} backgroundColor={"#1E1E1E"} />
    )
}