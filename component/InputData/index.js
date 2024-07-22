import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

const InputData = ({
  label,
  placeholder,
  isTextArea,
  onChangeText,
  namaState,
  value,
}) => {
  if (isTextArea) {
    return (
      <View style={Style.both}>
        <Text style={Style.label}>{label}</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={Style.InputArea}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => onChangeText(namaState, text)}
        />
      </View>
    );
  }
  return (
    <View style={Style.both}>
      <Text style={Style.label}>{label}</Text>
      <TextInput
        style={Style.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChangeText(namaState, text)}
      />
    </View>
  );
};

export default InputData;

const Style = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 300,
    borderRadius: 50,
    paddingLeft: 10,
  },

  both: {
    paddingBottom: 25,
    paddingTop: 10,
    paddingLeft: 10,
  },

  InputArea: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 300,
    borderRadius: 20,
    paddingLeft: 10,
    textAlignVertical: "top",
  },
});
