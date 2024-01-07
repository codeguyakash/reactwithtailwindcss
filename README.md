## React with TailWind CSS
codeguyakash[dot]gmail[dot]com



## Installation of TailWind CSS
npm install -D tailwindcss
npx tailwindcss init


## Installation of TailWind CSS

# Config in tailwind.config.js
<code>
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</code>

# Config in index.css

<code>
@tailwind base;
@tailwind components;
@tailwind utilities;
</code>