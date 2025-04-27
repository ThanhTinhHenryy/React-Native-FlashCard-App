// components/Input.tsx
import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";

interface InputProps {
  placeholder: string; // Nội dung placeholder
  value: string; // Giá trị của input
  onChangeText: (text: string) => void; // Hàm xử lý khi thay đổi giá trị
  secureTextEntry?: boolean; // Optional, dùng khi nhập mật khẩu
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.grey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    color: COLORS.white,
    fontSize: 16,
  },
});

export default Input;
