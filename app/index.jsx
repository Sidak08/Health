import { Navbar } from "../components/navbar";
import { Text } from "react-native";
import { Link } from "expo-router"

export default function Page() {
    const iconColor = {
        "home": "#FFFFFF",
        "shorts": "#B7A9A9",
        "food": "#B7A9A9",
        "workout": "#B7A9A9"
    }
    return (<>
        <Link href={"/account/signup"}>
            <Text> Hi </Text>
        </Link>
        <Link href={"/account/info"}>
            <Text> BI </Text>
        </Link>
        <Navbar iconColor={iconColor} backgroundColor={"#1E1E1E"} />
    </>
    )
}

const styles = {
    container: {
        backgroundColor: 'blue',
    },
};
