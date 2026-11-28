/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    const siteUrl = (
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      'https://www.devevoke.com'
    ).replace(/\/+$/, '');

    return [
      // Redirection 301 du domaine apex vers www (chemin conservé)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'devevoke.com' }],
        destination: `${siteUrl}/:path*`,
        statusCode: 301,
      },
      // Fusion de /info-tarif vers /tarifs
      {
        source: '/info-tarif',
        destination: '/tarifs',
        statusCode: 301,
      },
      // Redirections 301 des anciens slugs de blog (tiret final / > 80 caractères)
      {
        source: '/blog/quest-ce-que-la-certification-hds-et-pourquoi-est-elle-obligatoire-',
        destination: '/blog/quest-ce-que-la-certification-hds-et-pourquoi-est-elle-obligatoire',
        statusCode: 301,
      },
      {
        source: '/blog/comment-concevoir-un-logiciel-metier-ux-friendly-pour-un-ehpad-',
        destination: '/blog/comment-concevoir-un-logiciel-metier-ux-friendly-pour-un-ehpad',
        statusCode: 301,
      },
      {
        source:
          '/blog/numerique-eco-responsable-green-it-comment-decarboner-les-logiciels-de-sante-',
        destination:
          '/blog/numerique-eco-responsable-green-it-comment-decarboner-les-logiciels-de-sante',
        statusCode: 301,
      },
      {
        source: '/blog/la-transformation-digitale-des-cliniques-par-ou-commencer-',
        destination: '/blog/la-transformation-digitale-des-cliniques-par-ou-commencer',
        statusCode: 301,
      },
      {
        source:
          '/blog/gestion-des-vehicules-en-association-medico-sociale-comment-optimiser-la-flotte-dun-ime-ou-sessad-',
        destination: '/blog/gestion-des-vehicules-en-association-medico-sociale-ime-sessad',
        statusCode: 301,
      },
      // Redirection demande de démo Floticar vers la plateforme officielle
      {
        source: '/demande-demo',
        destination: 'https://floticar.com/demande-de-demo',
        permanent: true,
      },
      {
        source: '/demander-demo',
        destination: 'https://floticar.com/demande-de-demo',
        permanent: true,
      },
      // Seules les pages qui existaient réellement en production sur devevoke.com sont redirigées
      {
        source: '/portfolio',
        destination: '/realisations',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
