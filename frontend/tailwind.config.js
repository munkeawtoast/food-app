/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mitr3: ['Mitr_300Light'],
        mitr4: ['Mitr_400Regular'],
        mitr5: ['Mitr_500Medium'],
        mitr6: ['Mitr_600SemiBold'],
        mitr7: ['Mitr_700Bold'],
        prompt3: ['Prompt_300Light'],
        prompt4: ['Prompt_400Regular'],
        prompt5: ['Prompt_500Medium'],
        prompt6: ['Prompt_600SemiBold'],
        prompt7: ['Prompt_700Bold'],
      },
    },
  },
  plugins: [],
}
