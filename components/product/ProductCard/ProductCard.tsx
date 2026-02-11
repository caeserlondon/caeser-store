// components/product/ProductCard.tsx
import { Product } from '@common/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import s from './ProductCard.module.css';

interface Props {
  product: Product;
  variant?: 'simple' | 'slim';
  priority?: boolean; // 👈 New prop
}

const placeholderImage = '/product-image-placeholder.svg';

const ProductCard: FC<Props> = ({ product, variant = 'simple', priority = false }) => {
  const imgSrc = product.images?.[0]?.url ?? placeholderImage;

  return (
    <Link className={s.root} href={`/products/${product.slug}`}>
      {variant === 'slim' ? (
        <>
          <div className="inset-0 flex items-center justify-center absolute z-20">
            <span className="bg-black text-white p-3 font-bold text-xl">
              {product.name}
            </span>
          </div>
          {product.images && (
            <Image
              className={s.productImage}
              alt={product.name ?? 'Product image'}
              src={imgSrc}
              width={320}
              height={320}
              quality={85}
              loading={priority ? "eager" : "lazy"} 
            />
          )}
        </>
      ) : (
        <>
          <div className={s.productBg}></div>
          <div className={s.productTag}>
            <h3 className={s.productTitle}>
              <span>{product.name}</span>
            </h3>
            <span className={s.productPrice}>
              {product.price.value} {product.price.currencyCode}
            </span>
          </div>
          {product.images && (
            <Image
              className={s.productImage}
              alt={product.name ?? 'Product image'}
              src={imgSrc}
              width={540}
              height={540}
              quality={85}
              loading={priority ? "eager" : "lazy"}
              priority={priority}
            />
          )}
        </>
      )}
    </Link>
  );
};

export default ProductCard;