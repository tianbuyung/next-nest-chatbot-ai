declare type ThemeOptions = "light" | "dark" | "system";

declare interface ThemeContextType {
  theme: ThemeOptions;
  changeTheme: (theme: ThemeOptions) => void;
}

declare interface ChatCompletionMessage {
  role: string;
  content: string;
}
