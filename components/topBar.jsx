import { Pressable, StyleSheet, Text, View, SafeAreaView, Platform, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const TopBar = ({ color }) => {
    const statusBarHeight = StatusBar.currentHeight || 0;
    const notchHeight = Platform.OS === 'ios' ? 30 : 0;

    const style = StyleSheet.create({
        backgroundColor: color,
        width: "100%",
        height: notchHeight + 20,
        position: 'absolute',
        top: 0,
    })
    return (
        <>
            <StatusBar style="light" />
            <View style={style}>
            </View>
        </>
    )
}


