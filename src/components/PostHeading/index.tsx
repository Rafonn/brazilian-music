import { Container } from "./styles";
import { ReactNode } from "react";

export type HeadingProps = {
    children: ReactNode
};

export const Heading = ({ children }: HeadingProps) => {
    return <Container>{children}</Container>
}