import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/forgotPassword"; // Import style đã chỉnh sửa
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { Link, useRouter } from "expo-router"; // Đảm bảo bạn có expo-router để quản lý link điều hướng
import Input from "../../components/Input";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleResetPassword = () => {
    console.log("Đang reset mật khẩu với email:", email);
    // Thực hiện logic reset mật khẩu ở đây, ví dụ API call để reset password
  };
  const handleBackToHome = () => {
    router.push("/(auth)/welcome");
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>ZapMind</Text>
        <Text style={styles.tagline}>Quên mật khẩu</Text>
      </View>

      {/* Form Section */}
      <View style={styles.forgotPasswordSection}>
        {/* Email Input */}
        <Input placeholder="Nhập email" value={email} onChangeText={setEmail} />

        {/* Reset Password Button */}
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetPassword}
          activeOpacity={0.9}
        >
          <Text style={styles.resetButtonText}>Đặt lại mật khẩu</Text>
        </TouchableOpacity>

        {/* Link to Login */}
        <Text style={styles.termsText}>
          Bạn đã nhớ mật khẩu?{" "}
          <Link href="/(auth)/login" style={{ color: COLORS.secondary }}>
            Đăng nhập
          </Link>
        </Text>

        <TouchableOpacity
          onPress={handleBackToHome}
          style={styles.backToHomeButton}
        >
          <Text style={styles.backToHomeText}>Quay lại trang chủ</Text>
        </TouchableOpacity>

        {/* Terms Section */}
        <Text style={styles.termsText}>
          Bằng cách Tiếp Tục, Bạn đồng ý với{" "}
          <Link
            href="https://www.example.com/terms"
            style={{ color: COLORS.secondary }}
          >
            Điều khoản dịch vụ
          </Link>{" "}
          và{" "}
          <Link
            href="https://www.example.com/privacy"
            style={{ color: COLORS.secondary }}
          >
            Chính sách bảo mật
          </Link>
          .
        </Text>
      </View>
    </View>
  );
}
