import Link from "next/link";
import { notFound } from "next/navigation";
import blogPosts from "../../../data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((article) => article.slug === slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((article) => article.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="inner-page journal-article-page">
      <nav className="journal-breadcrumb" aria-label="Breadcrumb">
        <Link href="/blog">Journal</Link>
        <span aria-hidden="true">/</span>
        <span>{post.category}</span>
      </nav>

      <header className="journal-article-header">
        <p className="eyebrow">{post.category} · {post.readTime}</p>
        <h1>{post.title}</h1>
        <p className="journal-article-excerpt">{post.excerpt}</p>
        <p className="journal-byline">Words by Rizwan Shahani</p>
      </header>

      <figure className="journal-article-cover">
        <img src={post.image} alt={post.imageAlt} />
      </figure>

      <article className="journal-article-body">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <div className="journal-article-end">
          <span aria-hidden="true">✦</span>
          <p>Thank you for reading.</p>
        </div>
      </article>

      <div className="journal-back-link">
        <Link className="text-link" href="/blog">
          <span aria-hidden="true">←</span> Back to the journal
        </Link>
      </div>
    </main>
  );
}
