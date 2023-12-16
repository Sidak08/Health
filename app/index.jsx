import { Navbar } from "../components/navbar";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router"
import { TopBar } from "../components/topBar"
import { StatusBar } from 'expo-status-bar';
import { GreetingBox } from "../components/heading"
import CircularProgress from 'react-native-circular-progress-indicator';
import { CircularProgressBase } from 'react-native-circular-progress-indicator'
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
    const iconColor = {
        "home": "#FFFFFF",
        "shorts": "#B7A9A9",
        "food": "#B7A9A9",
        "workout": "#B7A9A9"
    }
    const style = StyleSheet.create({
        container: {
            height: "100%",
            backgroundColor: "#121212"
        }
    })

    const blankUserData = {
        "user": {
            "name": "",
            "age": 0,
            "weight": 0, // in kilograms
            "height": 0, // in centimeters
            "gender": "",
            "streak": 0,
            "longestStreak": 0,
            "workoutThisWeek": 0,
            "totalWorkout": 0
        },
        "food": {
            "recent": [
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                }
            ]
        },
        "goals": {
            "caloriesGoal": 0, // daily calorie intake goal
            "proteinGoal": 0, // daily protein intake goal (in grams)
            "carbohydrateGoal": 0, // daily carbohydrate intake goal (in grams)
            "fatGoal": 0, // daily fat intake goal (in grams)
            "sugarGoal": 0, // daily sugar intake goal (in grams)
            "ironGoal": 0, // daily iron intake goal (in milligrams)
            "sodiumGoal": 0,
            "cholesterolGoal": 0,
            "fiberGoal": 0,
            "stepGoal": 0,
            "weightGoal": 0,
            "pushUpGoal": 0,
            "sitUpGoal": 0,
            "squatGoal": 0
        },
        "dailySummary": [
            {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": 0
                    },
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": 0
                    }
                ],
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": 0,
                    "carbohydrate": 0,
                    "fat": 0,
                    "sugar": 0,
                    "iron": 0,
                    "sodium": 0,
                    "cholesterol": 0,
                    "fiber": 0
                }
            },
            {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": 0
                    }
                ],
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": 0,
                    "carbohydrate": 0,
                    "fat": 0,
                    "sugar": 0,
                    "iron": 0
                }
            },
            {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": 0
                    },
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": 0
                    }
                ],
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": 0,
                    "carbohydrate": 0,
                    "fat": 0,
                    "sugar": 0,
                    "iron": 0,
                    "sodium": 0,
                    "cholesterol": 0,
                    "fiber": 0
                }
            },
            {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": 0
                    },
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": 0
                    }
                ],
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": 0,
                    "carbohydrate": 0,
                    "fat": 0,
                    "sugar": 0,
                    "iron": 0
                }
            }
        ]
    }
    const [userData, setUserData] = useState(blankUserData);

    useEffect(() => {
        axios.post('http://localhost:3000/home', {})
            .then(response => {
                // Handle the successful response
                setUserData(response.data);
            })
            .catch(error => {
                // Handle the error
                console.error('Error:', error);
            });
    }, [])

    return (
        <>
            <StatusBar style="light" />
            <TopBar color="#121212" />
            <View style={style.container}>
                <GreetingBox />
                <ShortsBox />
                <WorkoutTracker userData={userData} />
            </View>
            <Navbar iconColor={iconColor} backgroundColor={"#1E1E1E"} />
        </>
    )
}

const ShortsBox = () => {
    const style = StyleSheet.create({
        container: {
            height: 116,
            borderRadius: 4,
            backgroundColor: "#1E1E1E",
            marginHorizontal: 11,
            marginTop: 4
        }
    })
    return (
        <View style={style.container} />
    )
}

const WorkoutTrackerCircle = ({ steps, calories, protein }) => {
    const average = Math.round((steps + calories + protein) / 3)
    const props = {
        activeStrokeWidth: 25,
    };
    const text = {
        fontSize: 18,
        fontWeight: "400",
        fontStyle: "normal",
        textAlign: "center",
        color: "#FFFFFF"
    }

    return (
        <>
            <CircularProgressBase {...props} value={steps} radius={100} activeStrokeColor={'#6200EE'}>
                <CircularProgressBase {...props} value={calories} radius={75} activeStrokeColor={'#BB86FC'}>
                    <CircularProgressBase {...props} value={protein} radius={50} activeStrokeColor={'#03DAC6'}>
                        <Text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="#FFFFFF"
                            fontSize="20"
                            style={text}
                            transform={`translate(-50%, -50%)`}
                        >
                            {average}%
                        </Text>
                    </CircularProgressBase>
                </CircularProgressBase>
            </CircularProgressBase>
        </>
    );
};

const WorkoutTrackerText = ({ steps, calories, protein }) => {
    const style = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "left",
            height: 228,
            marginRight: 14
        },
        Heading: {
            fontSize: 18,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#FFFFFF"
        },
        subHeading: {
            fontSize: 13,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#B7A9A9"
        }
    })
    return (
        <View style={style.container}>
            <View>
                <Text style={style.Heading}>Steps</Text>
                <Text style={style.subHeading}>{steps} steps</Text>
            </View>

            <View>
                <Text style={style.Heading}>Calories</Text>
                <Text style={style.subHeading}>{calories} Kcal</Text>
            </View>
            <View>
                <Text style={style.Heading}>Protein</Text>
                <Text style={style.subHeading}>{protein} grams</Text>
            </View>

        </View>
    )

}

const WorkoutTracker = ({ userData }) => {
    const steps = (userData.dailySummary[0].stepsTaken / userData.goals.stepGoal) * 100
    const calories = ((userData.dailySummary[0].caloriesConsumed - userData.dailySummary[0].caloriesBurned) / userData.goals.caloriesGoal) * 100
    const protein = (userData.dailySummary[0].macrosConsumed.protein / userData.goals.proteinGoal) * 100

    const style = StyleSheet.create({
        container: {
            height: 228,
            borderRadius: 4,
            backgroundColor: "#1E1E1E",
            marginHorizontal: 11,
            marginTop: 8,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
        }
    })
    return (
        <View style={style.container}>
            <WorkoutTrackerCircle steps={steps} calories={calories} protein={protein} />
            <WorkoutTrackerText steps={userData.dailySummary[0].stepsTaken} calories={userData.dailySummary[0].caloriesConsumed - userData.dailySummary[0].caloriesBurned} protein={userData.dailySummary[0].macrosConsumed.protein} />
        </View>
    )
}

