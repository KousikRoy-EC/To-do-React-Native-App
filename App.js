import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [text, settext] = useState();
  const [goal, setgoal] = useState([]);
  const deleteGoals = (item) => {
    let newGoal = goal.filter(i => i !== item);
    setgoal(newGoal);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={settext}
        value={text} />
      <Button title="Click here" onPress={() => { setgoal([...goal, text]); settext("") }} />
      {goal.map((item, index) => {
        return <Text key={index} style={styles.listStyle} onPress={() => deleteGoals(item)} >{item}</Text>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    minWidth: "50%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  listStyle: {
    minWidth: "50%",
    backgroundColor: "black",
    color: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  }
});
