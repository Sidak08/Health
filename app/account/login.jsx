import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ViewBase, Pressable } from 'react-native';
import { Title, InputDiv, OtherSignOP, Login } from './signup';
import { useFonts } from 'expo-font';
import { GoogleSvg, AppleSvg } from '../../components/svg';
import { TopBar } from '../../components/topBar';
import { BottomBar } from '../../components/bottomBar';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
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
                <Title title={"Login"} />
                <InputDiv style={{ flex: 1 }} />
                <OtherSignOP style={{ flex: 1 }} />
                <Login style={{ flex: 1 }} text="Need to make an account" btn="Sign Up" link="/account/signup" />
            </View>
            <BottomBar color="#121212" />
        </>
    );
};