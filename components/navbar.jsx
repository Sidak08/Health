import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FoodSvg, HomeSvg, ShortsSvg, WorkoutSvg } from "./svg.jsx"
import { useState } from 'react';
import { Link } from "expo-router"

export const Navbar = ({ backgroundColor, iconColor }) => {
    const styles = {
        navbarDiv: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 10,
            paddingTop: 12,
        },
        fixedPosition: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: backgroundColor,
        },
        iconDiv: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            color: '#B7A9A9',
        },
    };

    return (
        <View style={styles.fixedPosition}>
            <View style={styles.navbarDiv}>
                <Link href="/">
                    <View style={styles.iconDiv}>
                        <HomeSvg color={iconColor.home} width={23} height={25} />
                        <Text style={{ ...styles.text, color: iconColor.home }}>Home</Text>
                    </View>
                </Link>

                <Link href="/shorts">
                    <View style={styles.iconDiv}>
                        <ShortsSvg color={iconColor.shorts} width={23} height={25} />
                        <Text style={{ ...styles.text, color: iconColor.shorts }}>Shorts</Text>
                    </View>
                </Link>

                <Link href="/food">
                    <View style={styles.iconDiv}>
                        <FoodSvg color={iconColor.food} width={23} height={25} />
                        <Text style={{ ...styles.text, color: iconColor.food }}>Food</Text>
                    </View>
                </Link>

                <Link href="/workout">
                    <View style={styles.iconDiv}>
                        <WorkoutSvg color={iconColor.workout} width={23} height={25} />
                        <Text style={{ ...styles.text, color: iconColor.workout }}>Workout</Text>
                    </View>
                </Link>
            </View>
        </View>
    );
};