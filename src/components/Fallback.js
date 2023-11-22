import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          marginTop: 70,
          marginBottom: 20,
          fontSize: 15,
          color: "#0C4271",
          fontWeight: 700,
        }}
      >
        Start adding your tasks
      </Text>
      <Image
        source={require("../../assets/logo.png")}
        style={{ height: 420, width: 420, marginBottom: 110 }}
      />
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
