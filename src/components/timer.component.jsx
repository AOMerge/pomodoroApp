import { View, Text } from "react-native"
import { styles } from "../style/style"

export default function Timer ({time})
{
    const formatteTime = `${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${time % 60}`
    return (
      <View style={styles.VewTimer}>
        <Text style={styles.TextTimer}>{formatteTime}</Text>
      </View>
    );
}