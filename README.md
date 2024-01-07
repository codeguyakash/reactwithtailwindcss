## React with TailWind CSS
codeguyakash[dot]gmail[dot]com



## Installation of TailWind CSS
npm install -D tailwindcss
npx tailwindcss init


## Installation of TailWind CSS
-------tailwind.config.js--------------------
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
## Installation of TailWind CSS
-------index.css--------------------
<code>
@tailwind base;
@tailwind components;
@tailwind utilities;
</code>