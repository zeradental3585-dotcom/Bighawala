/**
 * Master Tailwind config for BighaWala.com.
 *
 * This merges the 7 distinct per-page inline `tailwind.config = {...}` blocks
 * that used to be pasted into every page's <head> when the site loaded
 * Tailwind via the CDN Play script. All color keys and font families from
 * every variant are unified here so no page's existing class names change
 * meaning after switching to this single compiled stylesheet.
 *
 * `saffron` needed special handling: 83 pages used it as a flat color
 * (`bg-saffron`, `text-saffron`), while disclaimer.html/privacy-policy used
 * it as a shaded scale (`bg-saffron-500`, `text-saffron-600`, etc). Tailwind
 * supports both simultaneously via a DEFAULT key alongside numbered shades.
 *
 * `shadow-xs` / `shadow-2xs` are Tailwind v4-only utility names that the
 * CDN (which serves v4 by default) was generating. Re-added here as custom
 * boxShadow entries so pages using them keep the same subtle shadow instead
 * of silently losing it under this v3 compiled build.
 */
module.exports = {
  content: [
    './*.html',
    './privacy-policy/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#2E7D32',
        darkGreen: '#1B5E20',
        lightGreen: '#E8F5E9',
        lightGreenBg: '#F1F8E9',
        darkText: '#333333',
        customGreenHover: '#1B5E20',
        customSaffronHover: '#E65100',
        accentSaffron: '#FF6F00',
        whatsappGreen: '#25D366',
        whatsappDark: '#128C7E',
        saffron: {
          DEFAULT: '#FF6F00',
          50: '#fffaf0',
          100: '#fef3d6',
          500: '#ff9933',
          600: '#e07d16',
          700: '#b85f0c',
        },
        indiaGreen: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          600: '#138808',
          700: '#0f6b06',
          800: '#0c5205',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px 1px 0 rgb(0 0 0 / 0.04)',
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
};
