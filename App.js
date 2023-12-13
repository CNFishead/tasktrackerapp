import { StatusBar } from "expo-status-bar";
import { Button, Linking, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import { styles } from "./styles/HomeStyles";
import { useState } from "react";
import GoalItem from "./components/goalItem/GoalItem";
import GoalInput from "./components/goalInput/GoalInput";
import WebView from "react-native-webview";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function handlePress(text) {
    if (text === "") return;
    setGoals((prevState) => [...prevState, text]);
  }

  function removeGoalHandler(indx) {
    setGoals((prevState) => prevState.filter((goal, i) => i !== indx));
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          color={"#7f3ada"}
        />
        <GoalInput handlePress={handlePress} open={modalVisible} setVisible={setModalVisible} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem itemData={itemData.item} removeGoalHandler={removeGoalHandler} index={itemData.index} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </>
  );
}
