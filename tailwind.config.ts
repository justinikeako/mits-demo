import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },

      screens: {
        xs: "475px",
      },

      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", fontWeight: 300 }],
        sm: ["0.875rem", { lineHeight: "1.25rem", fontWeight: 300 }],
        base: ["1rem", { lineHeight: "1.5rem", fontWeight: 300 }],
        lg: ["1.125rem", { lineHeight: "1.75rem", fontWeight: 300 }],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 400,
            letterSpacing: "-0.0125em",
          },
        ],
        "2xl": [
          "1.5rem",
          { lineHeight: "2rem", fontWeight: 400, letterSpacing: "-0.025em" },
        ],
        "3xl": [
          "1.875rem",
          { lineHeight: "2.25rem", fontWeight: 400, letterSpacing: "-0.025em" },
        ],
        "4xl": [
          "2.25rem",
          { lineHeight: "2.5rem", fontWeight: 400, letterSpacing: "-0.05em" },
        ],
        "5xl": [
          "3rem",
          { lineHeight: "1", fontWeight: 400, letterSpacing: "-0.05em" },
        ],
        "6xl": [
          "3.75rem",
          { lineHeight: "1", fontWeight: 400, letterSpacing: "-0.05em" },
        ],
        "7xl": [
          "4.5rem",
          { lineHeight: "1", fontWeight: 400, letterSpacing: "-0.05em" },
        ],
        "8xl": [
          "6rem",
          { lineHeight: "1", fontWeight: 400, letterSpacing: "-0.05em" },
        ],
        "9xl": [
          "8rem",
          { lineHeight: "1", fontWeight: 400, letterSpacing: "-0.05em" },
        ],
      },
      lineHeight: {
        cap: "1cap",
      },
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-radial-gradient": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at center, var(--tw-gradient-stops))",
        },
        ".bg-radial-gradient-t": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at top, var(--tw-gradient-stops))",
        },
        ".bg-radial-gradient-tl": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at top left, var(--tw-gradient-stops))",
        },
        ".bg-radial-gradient-tr": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at top right, var(--tw-gradient-stops))",
        },
        ".bg-radial-gradient-r": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at right, var(--tw-gradient-stops))",
        },
        ".bg-radial-gradient-l": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at left, var(--tw-gradient-stops))",
        },
        ".bg-radial-gradient-bl": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at bottom left, var(--tw-gradient-stops))",
        },
        ".bg-radial-gradient-b": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at bottom, var(--tw-gradient-stops))",
        },
        ".bg-radial-gradient-br": {
          "background-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at bottom right, var(--tw-gradient-stops))",
        },

        ".radial-circular": {
          "--tw-radial-gradient-shape": "circle",
        },
        ".radial-closest-side": {
          "--tw-radial-gradient-size": "closest-side",
        },
        ".radial-farthest-side": {
          "--tw-radial-gradient-size": "farthest-side",
        },
        ".radial-closest-corner": {
          "--tw-radial-gradient-size": "closest-corner",
        },
        ".radial-farthest-corner": {
          "--tw-radial-gradient-size": "farthest-corner",
        },
      });
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask-radial-gradient": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at center, var(--tw-gradient-stops))",
        },
        ".mask-radial-gradient-t": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at top, var(--tw-gradient-stops))",
        },
        ".mask-radial-gradient-tl": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at top left, var(--tw-gradient-stops))",
        },
        ".mask-radial-gradient-tr": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at top right, var(--tw-gradient-stops))",
        },
        ".mask-radial-gradient-r": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at right, var(--tw-gradient-stops))",
        },
        ".mask-radial-gradient-l": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at left, var(--tw-gradient-stops))",
        },
        ".mask-radial-gradient-bl": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at bottom left, var(--tw-gradient-stops))",
        },
        ".mask-radial-gradient-b": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at bottom, var(--tw-gradient-stops))",
        },
        ".mask-radial-gradient-br": {
          "mask-image":
            "radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at bottom right, var(--tw-gradient-stops))",
        },

        ".mask-gradient-to-b": {
          "mask-image":
            "linear-gradient(to bottom, rgb(0 0 0 / var(--tw-mask-from-opacity)), rgb(0 0 0 / var(--tw-mask-to-opacity)))",
        },
        ".mask-gradient-to-t": {
          "mask-image":
            "linear-gradient(to top, rgb(0 0 0 / var(--tw-mask-from-opacity)), rgb(0 0 0 / var(--tw-mask-to-opacity)))",
        },

        ".mask-to-10": {
          "--tw-mask-to-opacity": "0.1",
        },
        ".mask-to-20": {
          "--tw-mask-to-opacity": "0.2",
        },
        ".mask-to-25": {
          "--tw-mask-to-opacity": "0.25",
        },
      });
    }),

    plugin(function ({ addUtilities, matchUtilities }) {
      addUtilities({
        ".mask-cover": {
          "mask-size": "cover",
        },
        ".mask-contain": {
          "mask-size": "contain",
        },
        ".mask-luminance": {
          "mask-type": "luminance",
        },
        ".mask-center": {
          "mask-position": "center center",
        },
        ".mask-no-repeat": {
          "mask-repeat": "no-repeat",
        },
      });

      matchUtilities({
        mask: (value) => ({
          maskImage: value,
        }),
      });
    }),

    plugin(function ({ addUtilities }) {
      addUtilities({
        ".edge": {
          "--tw-shadow-colored": "0 3px var(--tw-shadow-color)",
          "box-shadow":
            "var(--tw-shadow-colored), var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000)",
        },
      });
    }),
  ],
} satisfies Config;
