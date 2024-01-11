# React + Vite + Tailwindcss

- Create project React + Vite + Tailwindcss

  - npm create vite@latest my-project -- --template react
  - cd my-project
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p
    - : in tailwind.config.js add :
      content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      ],
    - : in index.css add :
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
  - npm run dev

- If do you want add css just in time (jit) for tailwindcss in project

  - : in tailwind.config.js add :
    mode: "jit",
  - : in package.json add :
    TAILWIND_MODE=watch (in "dev" in "scripts", before vite, VD: "dev": "TAILWIND_MODE=watch vite",)

- docs: https://tailwindcss.com/docs/guides/vite

- clone code
- open terminal
  download node_modules: npm i
- run: npm run dev
