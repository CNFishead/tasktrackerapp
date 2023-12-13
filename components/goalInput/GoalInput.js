import React, { useState } from "react";
import { Button, TextInput, View, Modal, Image } from "react-native";
import { styles } from "./GoalInputStyles";

const GoalInput = ({ handlePress, open, setVisible }) => {
  const [text, setText] = useState("");
  function goalInputHandler(value) {
    setText(value);
  }
  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31212" onPress={() => setVisible(false)} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                handlePress(text);
                setText("");
                setVisible(false);
              }}
              color={"#7a46be"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
