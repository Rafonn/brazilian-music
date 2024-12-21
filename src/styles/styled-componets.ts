import { theme } from "./theme";

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaulTheme extends Theme {}
}