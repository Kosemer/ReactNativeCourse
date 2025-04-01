import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.deleteGoalHandler.bind(this, props.id)}
        style={(pressed) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",

  },
  pressedItem:{
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 15,
  },
});
