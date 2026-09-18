import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../app/colors";

interface AuthInputProps extends TextInputProps {
  iconName?: any;
  rightElement?: ReactNode;
}

export default function AuthInput({
  iconName,
  rightElement,
  style,
  ...props
}: AuthInputProps) {
  return (
    <View style={styles.wrapper}>
      {iconName ? (
        <Ionicons
          name={iconName}
          size={20}
          color={colors.textMuted}
          style={styles.iconLeft}
        />
      ) : null}

      <TextInput
        {...props}
        style={[styles.input, style]}
        placeholderTextColor={colors.textMuted}
      />

      {rightElement ? (
        <View style={styles.rightElement}>{rightElement}</View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 52,
    marginBottom: 16,
    width: "100%",
  },
  iconLeft: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    paddingVertical: 0,
  },
  rightElement: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
