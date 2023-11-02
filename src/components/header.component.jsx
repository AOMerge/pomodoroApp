import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../style/style";

const options = [ "Pomodoro", "Short Break", "Long Break" ];

export default function Header ({currentTimer, setCurrentTimer, setTimer})
{
    function handlePress (i)
    {
      const newTime = i === 0 ? 25 : i === 1 ? 5 : 15;
      setCurrentTimer(i);
      setTimer(newTime * 60);      
    }
    return (
      <View style={styles.ViewHeader}>
        <Text style={styles.Text}>Pomodoro</Text>
        <View style={styles.ViewnNavHeader}>
          {options.map((item, i) => (
            <TouchableOpacity
              onPress={() => handlePress(i)}
              key={item.length}
              style={[
                styles.ButtonNavHeader,
                currentTimer === i && styles.ButtonNavHeaderActive,
              ]}
            >
              <Text
                style={
                  currentTimer === i ? styles.ButtonNavHeaderActive : styles.TextNavHeader
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
}