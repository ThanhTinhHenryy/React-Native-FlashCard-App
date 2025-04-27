// ** Trang Đăng ký
import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/signup.style"; // !
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { Link, useRouter } from "expo-router";
import Input from "@/components/Input";

export default function Signup() {
  // * Signup func
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    console.log("Đang đăng ký với:", email, password, confirmPassword);
    // Thực hiện logic đăng ký ở đây, ví dụ API call để signup
  };

  const handleBackToHome = () => {
    router.push("/(auth)/welcome");
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.brandSection}>
        <Text style={styles.appName}>ZapMind</Text>
        <Text style={styles.tagline}>Đăng Ký</Text>
      </View>

      {/* Form Section */}
      <View style={styles.signupSection}>
        {/* Input Fields */}
        <Input placeholder="Nhập email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Để ẩn mật khẩu
        />
        <Input
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true} // Để ẩn mật khẩu
        />

        {/* Signup Button */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignup}
          activeOpacity={0.9}
        >
          <Text style={styles.signupButtonText}>Đăng Ký</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.termsText}>
          Đã có tài khoản?{" "}
          <Link href="/(auth)/login" style={{ color: COLORS.secondary }}>
            Đăng nhập
          </Link>
        </Text>

        {/* Social Login Section */}
        <View style={styles.socialLoginSection}>
          {/* Google */}
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
            <Text style={styles.socialButtonText}>Tiếp tục với Google</Text>
          </TouchableOpacity>
          {/* Facebook */}
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={20} color={COLORS.surface} />
            <Text style={styles.socialButtonText}>Tiếp tục với Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleBackToHome}
          style={styles.backToHomeButton}
        >
          <Text style={styles.backToHomeText}>Quay lại trang chủ</Text>
        </TouchableOpacity>

        {/* Terms */}
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
