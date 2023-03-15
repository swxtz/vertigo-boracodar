import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #F8FAFC;

    --purple: #7C3AED;

    --grey-50: #F8FAFC;
    --grey-100: #F1F5F9;
    --grey-200: #E2E8F0;
    --grey-300: #CBD5E1;
    --grey-400: #94A3B8;
    --grey-500: #64748B;
    --grey-600: #475569;
    --grey-700: #334155;
    --grey-800: #1E293B;
    --grey-900: #0F172A
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: var(--bg-color);
  }

  body {
    font-family: "Titillium Web", sans-serif;
  }
`;

