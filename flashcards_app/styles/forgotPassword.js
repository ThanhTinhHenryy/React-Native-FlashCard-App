// ** style của riêng ForgotPassword Screen
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";

export const styles = StyleSheet.create({
  // ** Container chính của ForgotPassword Screen
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "rgba(74, 222, 128, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  // ** Header Section
  brandSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign: "center", // Sửa lại textAlign là "center"
  },

  // ** Form Section (Email Input)
  forgotPasswordSection: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    marginTop: 20,
  },

  // ** Input Styles
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: COLORS.surface,
    marginBottom: 16,
    fontSize: 16,
    color: COLORS.text,
  },

  // ** Button Style (Main Reset Password Button)
  resetButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    width: "100%",
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.surface,
  },

  // ** Login Link Style
  loginText: {
    color: COLORS.secondary,
    textAlign: "center",
    marginTop: 16,
  },

  // ** Social Login Section Style
  socialLoginSection: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },

  // ** Individual Social Buttons (Google, Facebook)
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 10,
    width: "100%",
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.surface,
    fontWeight: "bold",
  },
  // ** Back
  backToHomeButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    alignItems: "center",
  },
  backToHomeText: {
    fontSize: 16,
    color: COLORS.surface,
    fontWeight: "bold",
  },
  // ** Terms Link Text
  termsText: {
    fontSize: 14,
    color: COLORS.grey,
    textAlign: "center", // Sửa lại textAlign là "center"
    marginVertical: 12,
  },
});
