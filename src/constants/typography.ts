type FontWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "normal"
  | "bold";

interface TypographyStyles {
  button: {
    fontSize: number;
    fontWeight: FontWeight;
    lineHeight: number;
  };
  h1: {
    fontSize: number;
    fontWeight: FontWeight;
    lineHeight: number;
  };
  h2: {
    fontSize: number;
    fontWeight: FontWeight;
    lineHeight: number;
  };
  text: {
    fontSize: number;
    fontWeight?: FontWeight;
    lineHeight: number;
  };
  caption: {
    fontSize: number;
    fontWeight?: FontWeight;
    lineHeight: number;
  };
  label: {
    fontSize: number;
    fontWeight?: FontWeight;
    lineHeight: number;
  };
}

export const typography: TypographyStyles = {
  button: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
  h2: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32,
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
};
