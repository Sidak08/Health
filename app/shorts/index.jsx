import { Navbar } from "../../components/navbar";


export default function Page() {
    const iconColor = {
        "home": "#B7A9A9",
        "shorts": "#FFFFFF",
        "food": "#B7A9A9",
        "workout": "#B7A9A9"
    }
    return (
        <Navbar iconColor={iconColor} backgroundColor={"#121212"} />
    )
}