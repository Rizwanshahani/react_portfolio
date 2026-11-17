import Link from "next/link";
import blogPosts from "../../data/blog-posts";

export const metadata = {
  title: "Journal",
  description:
    "Original notes from Rizwan Shahani on design, frontend development, and thoughtful digital experiences.",
};

function ArticleMeta({ post }) {
  return (
    <p className="journal-meta">
      <span>{post.category}</span>
      <span aria-hidden="true">·</span>
      <span>{post.readTime}</span>
    </p>
  );
}

export default function BlogPage() {
  const [featuredPost, ...posts] = blogPosts;

  return (
    <main className="inner-page journal-page">
      <header className="page-intro journal-intro">
        <p className="eyebrow">The journal · Ideas in practice</p>
        <h1>
          Notes on the
          <em> digital craft.</em>
        </h1>
        <p>
          Thoughts on thoughtful interfaces, frontend development, and the
          details that make digital work feel considered.
        </p>
        <span className="journal-count">{blogPosts.length} original articles</span>
      </header>

      <section className="journal-listing" aria-label="Journal articles">
        <article className="journal-featured">
          <Link className="journal-featured-image" href={`/blog/${featuredPost.slug}`}>
            <img src={featuredPost.image} alt={featuredPost.imageAlt} />
          </Link>
          <div className="journal-featured-copy">
            <p className="eyebrow">Featured note</p>
            <ArticleMeta post={featuredPost} />
            <h2>
              <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h2>
            <p className="journal-excerpt">{featuredPost.excerpt}</p>
            <Link className="text-link" href={`/blog/${featuredPost.slug}`}>
              Read the article <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>

        <div className="journal-grid">
          {posts.map((post, index) => (
            <article className="journal-card" key={post.slug}>
              <Link
                className="journal-card-image"
                href={`/blog/${post.slug}`}
                aria-label={`Read ${post.title}`}
              >
                <img src={post.image} alt={post.imageAlt} loading="lazy" />
                <span className="journal-card-number">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </Link>
              <div className="journal-card-copy">
                <ArticleMeta post={post} />
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="journal-excerpt">{post.excerpt}</p>
                <Link
                  className="journal-read-link"
                  href={`/blog/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                >
                  Read note <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
