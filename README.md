# base-app-react-v2

## Objet

Configuration de base d'une application react (septembre 2024)

## Technos

- Front : React, MaterialUI, TailwindCSS, Flowbite (sans installation)
- Back : ?

## Etape de création du projet

1. Création du projet React avec Typescript + SWC via Vite.
2. Installation de Redux, Axios, Tailwind, react-router-dom, react-helmet (`npm install --save react-helmet` puis `npm i --save-dev @types/react-helmet`)
3. Création de la structure du projet : `/components`, `/assets`, `/hooks`, `/store`, `/types`, etc.
4. Définition des palettes de couleurs dans `tailwind.config.ts` (pour Tailwind) et `/src/index.css`
5. Installation de Material UI (MUI) Core
6. Configuration du theme et des palettes de couleur pour MUI dans le composant `/root/Layout.tsx`, `themeMUI.ts` et `theme.d.ts`.
7. Mise en place du theme switcher (light/dark)

## React router refreshing and rewriting manually working

Exemple complet lorsque l'application est à la **racine du site**:

```h
/*.htaccess*/

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

ATTENTION :
You have to make sure the path after RewriteBase and after the last RewriteRule matches the folder that the app lives (if it's a subfolder)
For exemple, for `https://webakinob.fr/cabinet-rc`, you must have :

```h
....
  RewriteBase /cabinet-rc
  ...
  ...
  RewriteRule . /cabinet-rc/index.html [L]
```

## React + TypeScript + Vite

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
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
