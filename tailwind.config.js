/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-dark':'#1E6F9F',
        'blue':'#4EA8DE',
        'purple-dark':'#5E60CE',
        'purple':'#8284FA',
        'gray-70':'#0D0D0D',
        'gray-60':'#1A1A1A',
        'gray-50':'#262626',
        'gray-40':'#333333',
        'gray-30':'#808080',
        'gray-20':'#D9D9D9',
        'gray-10':'#F2F2F2',
        'danger':'#E25858',
      },
      fontFamily:{
        inter:['inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

