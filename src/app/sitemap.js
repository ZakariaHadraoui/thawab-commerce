export default function sitemap() {
	
	return [
	  {
		url: 'https://thawab-commerce.vercel.app/',
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1,
	  },
	  {
		url: 'https://thawab-commerce.vercel.app/list',
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	  },
	  {
		url: 'https://acme.com/blog',
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 0.5,
	  },
	]
  }