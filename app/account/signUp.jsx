import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ViewBase, Pressable, Platform, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { GoogleSvg, AppleSvg } from '../../components/svg';
import * as SplashScreen from 'expo-splash-screen';
import { Link } from "expo-router"
import { TopBar } from '../../components/topBar';
import { StatusBar } from 'expo-status-bar';
import { BottomBar } from '../../components/bottomBar';
SplashScreen.preventAutoHideAsync();

export default function Page() {

    const style = StyleSheet.create({
        container: {
            backgroundColor: "#121212",
            height: "100%",
            padding: 16, // Add padding if needed
        },
    });

    return (
        <>
            <TopBar color="#121212" />
            <View style={style.container}>
                <Title title={"Sign Up"} />
                <InputDiv style={{ flex: 1 }} />
                <OtherSignOP style={{ flex: 1 }} />
                <Login style={{ flex: 1 }} text="Already Have An Account Login" link="/account/login" btn="Login" />
            </View>
            <BottomBar color="#121212" />
        </>
    );
};

export const Title = ({ title }) => {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require("../../assets/fonts/Inter/Inter.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const style = StyleSheet.create({
        Text: {
            // fontFamily: 'Inter',
            color: "#FFFFFF",
            fontSize: 32,
            marginTop: 38,
            marginLeft: 25,
        }
    })

    return (
        <View>
            <Text style={[style.Text]}>
                {title}
            </Text>
        </View>
    );
};
export const InputDiv = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleContinuePress = () => {
        // Access the email and password values here
        console.log('Email:', email);
        console.log('Password:', password);
        // Add any other logic you need
    };

    const style = StyleSheet.create({
        container: {
            height: 305,
            backgroundColor: "#1E1E1E",
            marginLeft: 9,
            marginRight: 9,
            marginTop: 53,
            borderRadius: 4
        }
    });

    return (
        <View style={style.container}>
            <Input setEmail={setEmail} setPassword={setPassword} />
            <ContinueButton onPress={handleContinuePress} />
        </View>
    );
};

const Input = ({ setEmail, setPassword }) => {
    const style = StyleSheet.create({
        container: {
            backgroundColor: "#2C2C2C",
            borderRadius: 4,
            height: 62,
            marginLeft: 19,
            marginRight: 19,
            marginTop: 29,
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 20,
            color: "#B7A9A9",
            padding: 23
        },
        SecondBox: {
            marginTop: 19,
            backgroundColor: "#2C2C2C",
            borderRadius: 4,
            height: 62,
            marginLeft: 19,
            marginRight: 19,
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 20,
            color: "#B7A9A9",
            padding: 23
        },
    });

    return (
        <View>
            <TextInput
                style={style.container}
                placeholder='Email Address'
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={style.SecondBox}
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
            />
        </View>
    );
};

export const ContinueButton = ({ onPress }) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 52,
            marginRight: 19,
            marginLeft: 19,
            height: 62,
            borderRadius: 10,
            backgroundColor: '#03DAC6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: 32,
            fontWeight: '400',
            fontStyle: 'normal',
            lineHeight: 32,
            color: '#FFFFFF',
        },
    });

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
    );
};

export const OtherSignOP = () => {
    return (
        <View>
            <Apple />
            <Google />
        </View>
    )
}

const Apple = () => {
    const style = StyleSheet.create({
        container: {
            height: 69,
            borderRadius: 4,
            backgroundColor: "#1E1E1E",
            marginLeft: 9,
            marginRight: 9,
            marginTop: 32,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 16,
            flexDirection: 'row'
        },
        text: {
            paddingLeft: 27,
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 20,
            color: "#B7A9A9"
        }
    })

    return (
        <View style={style.container}>
            <AppleSvg />
            <Text style={style.text}>Continue With Apple</Text>
        </View>
    )
}

const Google = () => {
    const style = StyleSheet.create({
        container: {
            height: 69,
            borderRadius: 4,
            backgroundColor: "#1E1E1E",
            marginLeft: 9,
            marginRight: 9,
            marginTop: 12,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 16,
            flexDirection: 'row'
        },
        text: {
            paddingLeft: 10,
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 20,
            color: "#B7A9A9"
        },
        svg: {
            marginLeft: -15
        }
    })
    return (
        <View style={style.container}>
            <View style={style.svg} >
                <GoogleSvg />
            </View>
            <Text style={style.text}>Continue With Apple</Text>
        </View>
    )
}

export const Login = ({ text, btn, link }) => {
    const style = StyleSheet.create({
        button: {
            width: 161,
            height: 72,
            borderRadius: 12,
            backgroundColor: "#6200EE",
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: 24,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 24,
            color: "#FFFFFF"
        },
        otherText: {
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#FFFFFF",
            width: 156,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-between',
            marginTop: 22,
            alignItems: 'center',
            marginHorizontal: 9
        }

    })
    return (
        <View style={style.container}>
            <Text style={style.otherText}>
                {text}
            </Text>
            <View style={style.button}>
                <Link href={link}>
                    <Text style={style.text}>
                        {btn}
                    </Text>
                </Link>
            </View>
        </View>
    )
}


