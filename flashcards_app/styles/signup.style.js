// ** style cho signup
// styles/signup.style.ts
import { COLORS } from "@/constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  // ** Container chính của Signup Screen
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  // ** Header Section (Branding)
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
    fontSize: 14,
    color: COLORS.secondary,
    textAlign: "center",
  },

  // ** Form Section (Signup Form)
  signupSection: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    marginTop: 20,
    flexGrow: 1,
  },

  // ** Button Style (Main Signup Button)
  signupButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    width: "100%",
  },
  signupButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.surface,
  },

  // ** Terms and SignUp Section
  termsText: {
    marginTop: 30,
    fontSize: 14,
    color: COLORS.grey,
    textAlign: "center",
    marginVertical: 12,
  },

  // ** Social Login Section Style
  socialLoginSection: {
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 10,
    marginBottom: 40,
    width: "100%",
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

  // ** Link to Terms and Privacy
  linkText: {
    color: COLORS.secondary,
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
});
