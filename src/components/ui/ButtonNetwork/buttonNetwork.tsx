import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';
import { BlogProps } from '@/data/typeFile';
import { buildAbsoluteUrl } from '@/config/site';
import { getBlogSlug } from '@/utils/blog';

interface PropsButtonNetwork {
  url: BlogProps;
}

const ButtonNetwork = ({ url }: PropsButtonNetwork) => {
  const shareUrl = buildAbsoluteUrl(`/blog/${getBlogSlug(url)}`); // Assurez-vous que l'URL de base soit correcte
  return (
    <div className="flex gap-x-5" aria-label="Boutons de partage sur les réseaux sociaux">
      {/* Facebook Share Button */}
      <FacebookShareButton
        url={shareUrl}
        quote={`Découvrez cet article intéressant sur Devevoke :`} // Inclut le lien dans le post Facebook
        hashtag={'#devevoke'}
        aria-label="Partager sur Facebook"
      >
        <FacebookIcon size={32} round aria-label="Facebook Icon" />
      </FacebookShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton
        url={shareUrl}
        title={`Découvrez cet article sur Devevoke :`} // Inclut le lien dans le tweet
        aria-label="Partager sur Twitter"
      >
        <TwitterIcon size={32} round aria-label="Twitter Icon" />
      </TwitterShareButton>

      {/* LinkedIn Share Button */}
      <LinkedinShareButton
        url={shareUrl}
        title={`Un nouvel article est disponible sur Devevoke :`} // Inclut le lien dans le post LinkedIn
        aria-label="Partager sur LinkedIn"
      >
        <LinkedinIcon size={32} round aria-label="LinkedIn Icon" />
      </LinkedinShareButton>
    </div>
  );
};

export default ButtonNetwork;
