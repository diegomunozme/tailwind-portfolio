module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mario: "url('./Assets/mario.jpg')",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translatex(-150vw)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left-two": {
          "0%": {
            opacity: "0",
            transform: "translatex(-200vw)",
            "animation-delay": "500ms",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            "animation-delay": "500ms",
          },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 1.5s ease-out",
        "fade-in-left-two": "fade-in-left-two 2s ease-out",
        "fade-in-left-three": "fade-in-left 2.5s ease-out",
      },

      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-primary)",
      },
    },
  },
  plugins: [],
};
