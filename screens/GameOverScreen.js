import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DefaultStyles from "../constants/default-styles";
import Colors from "../constants/Colors";

const GameOverScreen = props => {
  const { roundsNumber, userNumber, onRestart } = props;

  return (
    <View style={styles.container}>
      <Text style={DefaultStyles.title}>The game is over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://moondela.com/wp-content/uploads/2017/05/249-sp-be-successful.png"
          }}
          resizeMode="cover"
        />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
      </View>

      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30
  },
  resultContainer: { marginHorizontal: 30, marginVertical: 30 },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: { color: Colors.primary, fontFamily: "open-sans" },
  resultText: {
    textAlign: "center",
    fontSize: 20
  }
});

export default GameOverScreen;
