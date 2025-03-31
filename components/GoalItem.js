import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.deleteGoalHandler}>
    <View style={styles.goalItem} >
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      padding: 15,
    },
    goalText: {
      color: "white",
    },
  });
