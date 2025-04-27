// ** style của components
import { COLORS } from "@/constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  // Style cho input
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    color: COLORS.white,
    fontSize: 16,
    marginBottom: 16,
  },
  // Style cho Button Component (nút)
  button: {
    width: "100%",
    paddingVertical: 14,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  // Style cho Icon Button (nút có biểu tượng)
  iconButton: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  iconButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },

  // Style cho Link Text (liên kết văn bản)
  linkText: {
    color: COLORS.secondary,
    fontSize: 14,
    textDecorationLine: "underline",
  },

  // Style cho Container chính
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.background,
  },

  // Style cho Header
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
