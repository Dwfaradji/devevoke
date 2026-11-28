// Type file for the data

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  results: string;
  image: string;
  imageMobile: string;
  alt: string;
  tech: string[];
  link: string;
  type: string;
}

interface Price {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  details: string[];
}

interface Lists {
  id: number;
  title: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  items: Lists[];
}

interface PageInfo {
  titleH1?: string;
  title?: string;
  text?: string;
}

interface Text {
  title: string;
  text: string;
}

type BlogFilterCategory =
  | 'Médico-social'
  | 'Sécurité & RGPD'
  | 'Applications mobiles'
  | 'Autres';

interface BlogRelatedService {
  label: string;
  href: string;
  description: string;
}

interface BlogProps {
  id: string;
  title: string;
  metaTitle?: string;
  slug?: string;
  descriptionShort: string;
  descriptionLong: Text[];
  img: string;
  alt: string;
  readingTime: number;
  category: string;
  filterCategory?: BlogFilterCategory;
  date: string;
  updatedAt?: string;
  metaDescription: string;
  relatedService?: BlogRelatedService;
}

export type { Project, Price, Service, PageInfo, BlogProps, BlogFilterCategory, BlogRelatedService };
