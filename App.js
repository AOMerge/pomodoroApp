import { StatusBar } from "expo-status-bar";
import { styles, Colors } from "./src/style/style";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";
import { useState, useEffect } from "react";
import Timer from "./src/components/timer.component";
import Header from "./src/components/header.component";
import { Audio } from "expo-av";

export default function App() {
  const [isWorking, setisWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  const exchangebgColor = [Colors.A300, Colors.A200, Colors.tersiary];
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    let interval = null;
    if(isActive){
      interval = setInterval(()=>{
        setTime(time => time - 1);
      }, 1000);
    }else if(!isActive && time !== 0){
      clearInterval(interval);
    }
    return ()=> clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    playShound();
    setIsActive(!isActive);
  };
  const playShound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/413690_7950035-lq.mp3")
    );
    await sound.playAsync();
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
      <Button
        onPress={() => handleStart()}
        title={isActive ? "end" : "start"}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
