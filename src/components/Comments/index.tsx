import { Container } from "./styles";
import { DiscussionEmbed } from "disqus-react";

export type CommentsProps = {
    slug: string,
    title: string,
};

export const Comments = ({slug, title}: CommentsProps) => {
    return <Container>
        <DiscussionEmbed
            shortname="Brazilian-Music"
            config={{
            }}
        />
    </Container>
}