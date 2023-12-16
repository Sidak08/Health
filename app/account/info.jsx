import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image,
    Pressable,
    ScrollView,
} from "react-native";
import { LogoSvg } from "../../components/svg";
import { TopBar } from "../../components/topBar";
import { BottomBar } from "../../components/bottomBar";

export default function Page() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        height: "",
        weight: "",
        age: "",
        maxPushups: "",
        maxSitups: "",
        maxSquats: "",
    });

    const handleContinuePress = () => {
        console.log("Form Data:", formData);
        // Add any other logic you need
    };

    const style = StyleSheet.create({
        container: {
            backgroundColor: "#121212",
        },
    });

    return (
        <>
            <TopBar color="#121212" />
            <ScrollView style={style.container}>
                <Title />
                <BasicInfo setFormData={setFormData} formData={formData} />
                <StrengthTest setFormData={setFormData} formData={formData} />
                <ContinueButton onPress={handleContinuePress} />
            </ScrollView>
            <BottomBar color="#121212" />
        </>
    );
}

const Title = () => {
    const style = StyleSheet.create({
        image: {
            marginTop: 11,
        },
        container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 13,
        },
        text: {
            fontSize: 24,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#FFFFFF",
        },
    });
    return (
        <View style={style.container}>
            <View style={style.image}>
                <LogoSvg />
            </View>
            <Text style={style.text}>Flex Fuel</Text>
        </View>
    );
};

const BasicInfo = ({ setFormData, formData }) => {
    const styles = StyleSheet.create({
        container: {
            borderRadius: 4,
            backgroundColor: "#1E1E1E",
            marginHorizontal: 13,
            paddingBottom: 16,
            marginTop: 44,
        },
        text: {
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#FFFFFF",
            marginLeft: 23,
            marginTop: 13,
        },
        bottomDiv: {
            marginTop: 24,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Basic Info</Text>
            <View>
                <Input
                    txt="First Name"
                    value={formData.firstName}
                    onChangeText={(text) =>
                        setFormData((prevData) => ({ ...prevData, firstName: text }))
                    }
                />
                <Input
                    txt="Last Name"
                    value={formData.lastName}
                    onChangeText={(text) =>
                        setFormData((prevData) => ({ ...prevData, lastName: text }))
                    }
                />
            </View>
            <View style={styles.bottomDiv}>
                <Input
                    txt="Height"
                    value={formData.height}
                    onChangeText={(text) =>
                        setFormData((prevData) => ({ ...prevData, height: text }))
                    }
                />
                <Input
                    txt="Weight"
                    value={formData.weight}
                    onChangeText={(text) =>
                        setFormData((prevData) => ({ ...prevData, weight: text }))
                    }
                />
                <Input
                    txt="Age"
                    value={formData.age}
                    onChangeText={(text) =>
                        setFormData((prevData) => ({ ...prevData, age: text }))
                    }
                />
            </View>
        </View>
    );
};

const Input = ({ txt, value, onChangeText }) => {
    const style = StyleSheet.create({
        input: {
            height: 40,
            borderRadius: 4,
            backgroundColor: "#2C2C2C",
            marginHorizontal: 23,
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#B7A9A9",
            paddingLeft: 14,
            marginTop: 10,
        },
    });
    return (
        <TextInput
            placeholder={txt}
            style={style.input}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const StrengthTest = ({ setFormData, formData }) => {
    const style = StyleSheet.create({
        container: {
            marginHorizontal: 11,
            backgroundColor: "#1E1E1E",
            marginTop: 22,
            paddingBottom: 26,
        },
        text: {
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#FFFFFF",
            marginTop: 14,
            marginLeft: 26,
        },
    });

    return (
        <View style={style.container}>
            <Text style={style.text}>Strength Test</Text>
            <View>
                <Input
                    txt="Max Pushups"
                    value={formData.maxPushups}
                    onChangeText={(text) =>
                        setFormData((prevData) => ({ ...prevData, maxPushups: text }))
                    }
                />
                <Input
                    txt="Max Situps"
                    value={formData.maxSitups}
                    onChangeText={(text) =>
                        setFormData((prevData) => ({ ...prevData, maxSitups: text }))
                    }
                />
                <Input
                    txt="Max Squats"
                    value={formData.maxSquats}
                    onChangeText={(text) =>
                        setFormData((prevData) => ({ ...prevData, maxSquats: text }))
                    }
                />
            </View>
        </View>
    );
};

const ContinueButton = ({ onPress }) => {
    const style = StyleSheet.create({
        button: {
            marginTop: 36,
            marginHorizontal: 14,
            height: 70,
            borderRadius: 12,
            backgroundColor: "#297FC3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 33,
        },
        text: {
            fontSize: 32,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#FFFFFF",
        },
    });
    return (
        <Pressable onPress={onPress}>
            <View style={style.button}>
                <Text style={style.text}>Continue</Text>
            </View>
        </Pressable>
    );
};
