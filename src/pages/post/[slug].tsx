import { Post } from "@/container/posts";
import { getAllPosts } from "@/data/get-all-posts";
import { PostData } from "@/domain/post"
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getPosts } from "@/data/get-posts";

export type DynamicPostProps = {
    post: PostData;
}

interface Params extends ParsedUrlQuery {
    slug: string
}

const DynamicFooter =({ post }: DynamicPostProps) => {
    return <Post post ={post}/>
};

export default DynamicFooter;

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();

    return {
        paths: posts.map((posts) => ({
            params: { slug: posts.slug },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params as Params;

    if (!slug) {
        return {
            notFound: true,
        };
    }

    const posts = await getPosts(slug);

    return {
        props: { post: posts[0] },
    };
};