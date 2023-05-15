import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class App extends React.Component {
  state = { counter: 0 };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.countNumber}>
            <Text style={{ textAlign: "center", fontSize: 30 }}>
              {this.state.counter}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.countButton}
              onPress={() => {
                this.setState({ counter: this.state.counter + 1 });
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                this.setState({ counter: 0 });
              }}
            ></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    justifyContent: "center",
  },
  countButton: {
    width: 100,
    height: 100,
    backgroundColor: "#0f0",
    borderRadius: 50,
  },
  resetButton: {
    width: 40,
    height: 40,
    backgroundColor: "#f00",
    borderRadius: 50,
  },
  buttonWrapper: {
    borderWidth: 1,
    padding: 50,
    borderRadius: 50,
    gap: 20,
    flexDirection: "row",
    borderColor: "#fff",
  },
  countNumber: {
    backgroundColor: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 30,
    borderRadius: 50,
  },
});

export default App;
