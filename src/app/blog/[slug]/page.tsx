import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import Container from "@/components/ui/Container";
import { PostHero } from "@/components/sections/PostHero";
import { PostBody } from "@/components/sections/PostBody";
import UpdatedContactBanner from "@/components/sections/UpdatedContactBanner";
import BlogCard from "@/components/cards/BlogCard";
import { blogs, getPostBySlug, getRelatedPosts } from "@/data/blogs";

type Props = {
  // The part of the URL after /blog/ — Next gives it to us as a Promise
  params: Promise<{ slug: string }>;
};

// Tell Next which /blog/... pages exist, so it can build them ahead of time
export function generateStaticParams() {
  const baseSlugs = blogs.map((post) => ({ slug: post.slug }));
  return [
    ...baseSlugs,
    { slug: "why-most-digital-transformations-fail" },
    { slug: "hidden-cost-cloud-native" },
  ];
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // No post with this slug → show the 404 page
  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, 3);
  const recommended = related.slice(0, 2);

  return (
    <>
      <PostHero post={post} />

      <PostBody post={post} recommended={recommended} />

      <Section bg="grey">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            You May Also Like
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard
                key={item.slug}
                title={item.title}
                excerpt={item.excerpt}
                image={item.image}
                tag={item.category}
                date={item.date}
                author={item.author}
                href={`/blog/${item.slug}`}
                linkLabel="Read more"
              />
            ))}
          </div>
        </Container>
      </Section>

      <UpdatedContactBanner />
    </>
  );
}
