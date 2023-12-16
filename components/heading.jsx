import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProfileSvg } from './svg';
import { Link } from "expo-router"

export const GreetingBox = () => {
    const [date, setDate] = useState(new Date());
    const [greeting, setGreeting] = useState('');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    useEffect(() => {
        const currentDate = new Date();
        setDate(currentDate);

        const hours = currentDate.getHours();
        if (hours < 12) {
            setGreeting('Good Morning');
        } else if (hours < 17) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []);

    return (
        <View style={styles.div}>
            <View style={styles.container}>
                <Text style={styles.date}>{daysOfWeek[date.getDay()]} {months[date.getMonth()].slice(0, 3)} {date.getDate()}</Text>
                <Text style={styles.greeting}>{greeting}</Text>
            </View>
            <Link href="/profile">
                <ProfileSvg />
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        paddingVertical: 2,
        paddingLeft: 20
    },
    date: {
        fontSize: 13,
        fontWeight: "400",
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    greeting: {
        fontSize: 20,
        fontWeight: "400",
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    div: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 23
    }
});

export default GreetingBox;
