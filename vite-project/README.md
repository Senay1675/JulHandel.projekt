# Backend (Express API)

Beskrivning

Den här applikationen använder Express.js för att hantera API-förfrågningar. Ett exempel på en GET-request är att hämta alla produkter genom att anropa endpointen: http://localhost:3000/api/products

Servern körs på port 3000 och för att starta den används följande kommando: node server.js

När servern är igång kan du använda ovanstående URL för att göra en GET-förfrågan till API:t. Det kommer att returnera en lista med produkter i JSON-format.

# Frontend (Vite-projekt)

Beskrivning

Frontend-delen av applikationen körs med Vite och använder port 5173 som standard. För att starta frontend-projektet används följande kommando: npm run dev

När frontend-applikationen är igång kan du öppna den i webbläsaren på: http://localhost:5173

# Tester

Test 1: Header-länkar
Det första testet verifierar att header-komponenten innehåller tre länkar.

Test 2: Hemsidans innehåll
Det andra testet kontrollerar att det finns en <h4>-element på startsidan och att detta element innehåller text.

Testmiljö och körning
Jag använder Vitest som testramverk. För att köra testerna används följande kommando: npx start.
När du kör detta kommando kommer alla tester att köras, och resultaten visas i terminalen.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
