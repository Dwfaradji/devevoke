import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPage from '@/components/Blog/blogPage';
import blogData from '@/data/dataBlog';
import { getBlogSlug } from '@/utils/blog';
import { buildAbsoluteUrl, createPageMetadata } from '@/config/site';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: getBlogSlug(blog),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData.find((blog) => getBlogSlug(blog) === slug);

  if (!blog) {
    return {
      title: 'Article introuvable',
      description: "Cet article n'existe pas ou a été supprimé.",
    };
  }

  return createPageMetadata({
    path: `/blog/${slug}`,
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.descriptionShort,
    image: blog.img || '/icon.png',
    imageAlt: blog.alt || blog.title,
    imageWidth: 1200,
    imageHeight: 630,
    type: 'article',
    publishedTime: blog.date,
    modifiedTime: blog.updatedAt || blog.date,
    authors: ['Boucif Faradji'],
  });
}

const Page = ({ params }: Props) => {
  const { slug } = React.use(params);
  const blog = blogData.find((blog) => getBlogSlug(blog) === slug);

  if (!blog) {
    notFound();
  }

  const imageUrl = buildAbsoluteUrl(blog.img || '/icon.png');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.metaDescription || blog.descriptionShort,
    image: imageUrl,
    datePublished: blog.date || '2024-01-01',
    dateModified: blog.updatedAt || blog.date || '2024-01-01',
    author: {
      '@type': 'Person',
      name: 'Boucif Faradji',
      url: buildAbsoluteUrl('/a-propos'),
    },
    publisher: {
      '@type': 'Organization',
      name: 'DevEvoke',
      logo: {
        '@type': 'ImageObject',
        url: buildAbsoluteUrl('/icon.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': buildAbsoluteUrl(`/blog/${slug}`),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPage blog={blog} />
    </>
  );
};

export default Page;
