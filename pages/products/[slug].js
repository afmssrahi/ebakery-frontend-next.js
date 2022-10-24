import Head from 'next/head';
import { fromImageToUrl } from '../../utils/urls';
import products from './../../products.json';

const product = products?.data[0];

const Product = () => {
	return (
		<div>
			<Head>
				{product.attributes.meta_title && (
					<title>{product.attributes.meta_title}</title>
				)}
				{product.attributes.meta_description && (
					<meta
						name='description'
						content={product.attributes.meta_description}
					/>
				)}
			</Head>
			<div className='w-1/3 mx-auto'>
				<h1 className='text-5xl font-bold pb-10 text-center underline'>
					Product Page
				</h1>
				<h3 className='text-3xl font-bold'>
					{product?.attributes?.name}
				</h3>
				<img
					className='h-auto w-full object-cover'
					src={fromImageToUrl(product?.attributes?.image)}
					alt={product?.attributes?.alternativeText}
				/>
				<p className='py-2'>{product?.attributes?.price} tk</p>
				<p>{product?.attributes?.content}</p>
			</div>
		</div>
	);
};

export default Product;
