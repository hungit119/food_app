import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const FormInput = (props) => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={{ ...styles.input, borderColor: `${error ? "red" : "#f0f0f0"}` }}
        {...props}
        placeholder={placeholder}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#333",
    marginLeft: 4,
    marginBottom: 2,
    marginTop: 20,
  },
  input: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: 10,
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});

export default FormInput;
