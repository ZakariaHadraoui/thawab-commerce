export default function robots() {
	return {
	  rules: {
		userAgent: '*',
		allow: '/',
		disallow: '/private/',
	  },
	  sitemap: 'https://thawab-commerce.vercel.app/sitemap.xml',
	}
  }