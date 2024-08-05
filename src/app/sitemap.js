import { wixClientServer } from '../lib/WixClientServer'

export default async function sitemap() {


	const wixClient = await wixClientServer();
    const products =  await wixClient.products
	.queryProducts()
    .find();
   
	const product = products.items.map((product)=>{
		return(
			{
				url: `https://thawab-commerce.vercel.app/${product.slug}`,
				lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 1,
			}
		)
	})
	
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
	  ...product
	  
	 
	]
  }