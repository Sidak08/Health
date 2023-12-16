import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

export const BottomBar = ({ color }) => {
    const statusBarHeight = StatusBar.currentHeight || 0;
    const notchHeight = Platform.OS === 'ios' ? 30 : 0;
    let height = 0;

    if (notchHeight >= 30) {
        height = 35;
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: color,
            width: '100%',
            height: height,
            position: 'absolute',
            bottom: 0,
        },
    });

    return <View style={styles.container} />;
};
