import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./GoalItemStyles";

const GoalItem = ({ itemData, removeGoalHandler, index }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => removeGoalHandler(index)}
        android_ripple={{ color: "#3b0681" }}
      >
        <Text style={styles.goalText}>{itemData}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
