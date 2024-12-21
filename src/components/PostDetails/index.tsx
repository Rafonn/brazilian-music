import { Date } from "../Date";
import { Container } from "./styles";

export type PostDetailsProps = {
    date: string,
    author: string,
    category: string,
}

export const PostDatails =({ author, category, date }: PostDetailsProps) => {
    return <Container>
        Published on: <Date date={date}/> by: {author} in {category}.
    </Container>
}