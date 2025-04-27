// ** Trang Đăng Nhập
import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/login.style"; // !
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { Link, useRouter } from "expo-router";
import Input from "@/components/Input";

export default function Login() {
  // * Login func
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // console.log("test");
    console.log("Đang đăng nhập với:", email, password);
    // Thực hiện logic đăng nhập ở đây, ví dụ API call để login
  };
  const handleSignUp = () => {
    router.push("/(auth)/signup");
  };
  const handleBackToHome = () => {
    router.push("/(auth)/welcome");
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.brandSection}>
        <Text style={styles.appName}>ZapMind</Text>
        <Text style={styles.tagline}>Đăng Nhập</Text>
      </View>

      {/* Form Section */}
      <View style={styles.loginSection}>
        {/* Input */}
        <Input placeholder="Nhập email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Để ẩn mật khẩu
        />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.9}
        >
          <Text style={styles.loginButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <Link href="/(auth)/forgot-password" style={styles.forgotPasswordText}>
          Quên mật khẩu?
        </Link>

        {/* Sign Up Link */}
        <Text style={styles.termsText}>
          Chưa có tài khoản?{" "}
          <Link href="/(auth)/signup" style={{ color: COLORS.secondary }}>
            Đăng ký
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
          {/* Có thể thêm nút đăng nhập bằng Facebook hoặc các phương thức khác ở đây */}
        </View>
        {/* Back home */}
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
