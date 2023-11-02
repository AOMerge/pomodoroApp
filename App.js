import { StatusBar } from 'expo-status-bar';
import { styles, Colors } from './src/style/style'
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';
import Timer from './src/components/timer.component';
import Header from './src/components/header.component';

export default function App() {
  const [isWorking, setisWorking] = useState(false);
  const [time , setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState("POMO"|"SHORT"|"LONG");
  const exchangebgColor = [Colors.A300, Colors.A200, Colors.tersiary];
  const [isActive, setIsActive] = useState(false);

  const handleStart = () => {
    setIsActive(!isActive);
  };
  
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: exchangebgColor[currentTime] },
      ]}
    >
      <Header
        setTimer={setTime}
        currentTimer={currentTime}
        setCurrentTimer={setCurrentTime}
      />
      <Timer time={time} />
      <Button onPress={() => handleStart()} title={ isActive ? "end" : "start"} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
