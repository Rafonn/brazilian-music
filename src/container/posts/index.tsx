import { PostData } from "@/domain/post"
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { PostContainer } from "@/components/PostContainer";
import { Heading } from "@/components/PostHeading";
import { PostCover } from "@/components/PostCover";
import { PostDatails } from "@/components/PostDetails";

export type PostProps = {
    post: PostData;
}

export const Post = ({ post }: PostProps) => {
    return(
        <>
            <Header />
            
            <MainContainer>
                <Heading>{post.title}</Heading>
                <PostCover coverUrl={post.cover.formats.large.url} alt={post.title}/>
                <PostDatails author={post.author.name} category={post.category.name} date={post.created_at}/>
                <PostContainer content={post.content}/>
            </MainContainer>
        </>
    )
}