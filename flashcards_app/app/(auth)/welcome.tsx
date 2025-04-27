// ** Trang này chào mừng khi bấm nút đăng nhập rồi mói chọn đăng nhập hay đăng ký
import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "@/styles/auth.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { Link, useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();
  const handleLogIn = () => {
    console.log("Welcome: Click Đăng nhập");
    router.push("/(auth)/login");
  };
  const handleSignUp = () => {
    console.log("Welcome: Click Đăng ký");
    router.push("/(auth)/signup");
  };
  return (
    <View style={styles.container}>
      {/* Brand Section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>ZapMind</Text>
        <Text style={styles.tagline}>
          App học từ vựng bằng phương pháp flashcard
        </Text>
        <Text style={styles.tenThanhVien}>
          Thanh Tịnh - Tấn Thành - Hoàng Minh
        </Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/auth-bg-1.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Login section */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleLogIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="log-in-outline" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <Text
          style={{ flexDirection: "row", marginBottom: 16, color: "white" }}
        >
          Chưa có tài khoản ?{" "}
          <Link href="/(auth)/signup" style={{ color: COLORS.secondary }}>
            Đăng ký
          </Link>
        </Text>
        <Text style={styles.termsText}>
          Bằng cách Tiếp Tục, Bạn đồng ý bla bla
        </Text>
      </View>
    </View>
  );
}
