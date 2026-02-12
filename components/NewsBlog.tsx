import React from 'react';
import { ScrollFade } from './ScrollFade';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Choose the Right Red Dot Sight for Your Setup',
    excerpt:
      'A comprehensive guide to selecting the perfect red dot based on your platform, use case, and budget.',
    date: 'Feb 5, 2026',
  },
  {
    id: 2,
    title: 'ADEOptics at SHOT Show 2026: What We Unveiled',
    excerpt:
      'Recap of our latest product launches and the innovations that got people talking on the show floor.',
    date: 'Jan 28, 2026',
  },
  {
    id: 3,
    title: 'Zeroing Your Scope: A Step-by-Step Tutorial',
    excerpt:
      'Learn the correct method to zero any optic at 25, 50, and 100 yards with minimal ammo.',
    date: 'Jan 15, 2026',
  },
];

export const NewsBlog: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <ScrollFade>
          <div className="text-center mb-12">
            <p className="text-brand-coral font-medium uppercase tracking-widest text-sm mb-2">
              Latest
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-black font-heading">
              News & Blog
            </h2>
          </div>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <ScrollFade key={post.id} delay={index * 100}>
              <article className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
                {/* Image placeholder */}
                <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs text-neutral-600 font-medium">{post.date}</span>
                  <h3 className="text-lg font-bold text-neutral-black font-heading mt-2 mb-2 group-hover:text-brand-coral transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-semibold text-brand-coral group-hover:underline">
                    Read More &rarr;
                  </span>
                </div>
              </article>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
};
