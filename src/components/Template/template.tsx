import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PropsTemplate {
  image: string;
  link: string;
  name: string; // Used as category
  id: number;
  title?: string;
  description?: string;
}

const Template = ({ image, link, name, title, description }: PropsTemplate) => {
  return (
    <Link href={link} prefetch={false} className="group block h-full">
      <div className="hover:border-primary-500/40 hover:shadow-primary-500/10 relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all duration-400 hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            width={1000}
            height={750}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={`Template ${title || name}`}
            priority
          />
          {/* Badge Catégorie */}
          <div className="absolute top-4 left-4">
            <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm backdrop-blur-md">
              {name}
            </span>
          </div>
          {/* Overlay Hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="bg-primary-500 translate-y-4 transform rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:translate-y-0">
              Voir la démo
            </span>
          </div>
        </div>

        {/* Contenu en bas */}
        <div className="flex flex-grow flex-col p-5">
          <h3 className="group-hover:text-primary-400 mb-2 text-xl font-bold text-white transition-colors">
            {title || name}
          </h3>
          {description && (
            <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Template;
