'use client'
import { Box, Button, Flex, Grid, Group, Pill, Rating, Tabs, TextInput } from '@mantine/core'
import { CheckCircleIcon, FacebookIcon, HeartIcon, Instagram, MinusIcon, PlusIcon, ShoppingBagIcon, TwitterIcon } from 'lucide-react'
import { Link } from 'nextjs13-progress'
import ProductGallery from './ProductGallery'
import { productPrice } from '@/utils/priceUtil'
import ProductAttributes from './ProductAttributes'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsVariableProduct, setProduct, setSelectedAttributes } from '@/store/reducers/productSlice'
import { addToCartFunc } from '@/query/cart'
import { updateCart } from '@/store/reducers/sessionSlice'
import { notifications } from '@mantine/notifications'

export default function ProductContent(props) {
	const { product } = props
	const [qty, setQty] = useState(1)
	const dispatch = useDispatch()
	const { selectedVariation, isAvailable } = useSelector((state) => state.productSlice)
	const [price, setPrice] = useState(product?.price)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		dispatch(setProduct(product))
		dispatch(setIsVariableProduct(product?.type))
		dispatch(setSelectedAttributes({}))
	}, [])

	useEffect(() => {
		if (selectedVariation !== null) {
			setPrice(selectedVariation?.rawPrice)
		} else {
			setPrice(product?.price)
		}
	}, [selectedVariation])

	const handeAddToCart = async () => {
		// TODO: add to cart for variable product
		try {
			setLoading(true)
			const res = await addToCartFunc({ productId: product?.databaseId, quantity: qty }, localStorage.getItem('woo-session'))
			if (res?.addCartItems) {
				notifications.show({
					title: 'Success',
					message: 'Item added to cart',
					withCloseButton: true,
					color: 'white',
					icon: <CheckCircleIcon color='green' strokeWidth={1.5} />,
					autoClose: 3000,
					containerWidth: 300,
				})
				dispatch(updateCart(res?.addCartItems?.cart))
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<div className="product-top-section">
				<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
					<Grid.Col span={5}>
						<ProductGallery gallery={product?.galleryImages.nodes} featured={product?.image} />
					</Grid.Col>
					<Grid.Col span={7}>
						<div className="product-details">
							<h2 className="product-title">{product?.name}</h2>
							<div className="review-wrapper">
								<Group>
									<Rating defaultValue={product?.reviewCount} fractions={2} readOnly />
									<a className="ratings-text" href="#">( {product?.reviewCount} Reviews )</a>
								</Group>
							</div>
							<div className="product-price">
								<span>${productPrice(price)}</span>
								{product?.type === 'SIMPLE' && (
									<>
										{product?.price < product.regularPrice && (
											<span className="old-price">${productPrice(product?.regularPrice)}</span>
										)}
									</>
								)}
							</div>
							<div className="product-content">
								<div dangerouslySetInnerHTML={{ __html: product?.shortDescription }} />
							</div>
							{product?.type === 'VARIABLE' && (<ProductAttributes attributes={product?.attributes.nodes} />)}

							<div className="product-details-action">
								<div className="details-action-col">
									<div className="product-details-quantity">
										<Box maw={120} className='qty-wrapper'>
											<TextInput
												placeholder="Your email"
												rightSection={<PlusIcon color='#666' size={18} strokeWidth={1} onClick={() => { setQty(qty + 1) }} />}
												leftSection={<MinusIcon color='#666' size={18} strokeWidth={1} onClick={() => { qty > 1 && setQty(qty - 1) }} />}
												value={qty}
												readOnly
											/>
										</Box>
									</div>

									<div className="details-action-wrapper">
										<Group justify='flex-start'>
											<Button
												variant="outline"
												color="#c96"
												radius="xs"
												size="md"
												leftSection={<ShoppingBagIcon size={18} strokeWidth={1.5} />}
												className='btn-product btn-cart'
												onClick={handeAddToCart}
												loading={loading}
												disabled={!isAvailable}
											>
												Add to cart
											</Button>
											<Button
												variant='transparent'
												color='#666'
												leftSection={<HeartIcon size={18} strokeWidth={1.5} />}
												className='btn-product btn-wishlist'
											>
												Add to Wishlist
											</Button>
										</Group>
									</div>
								</div>
							</div>
							<div className="product-details-footer">
								<Flex justify={'space-between'} align={'center'}>
									<div className="product-cat">
										<span>Category:</span>
										{product?.productCategories?.nodes?.map((cat) => (
											<Pill key={cat.id} size='md'>
												<Link href={`/product/category/${cat?.slug}`} className="cat-link">
													{cat?.name}
												</Link>
											</Pill>
										))}
									</div>
									<div className="social-icons">
										<Flex justify={'flex-start'} align={'center'}>
											<span className="social-label">Share:</span>
											<Link href="#" className="social-icon" title="Facebook" target="_blank">
												<FacebookIcon size={20} color='#777' strokeWidth={1.5} />
											</Link>
											<Link href="#" className="social-icon" title="Twitter" target="_blank">
												<TwitterIcon size={20} color='#777' strokeWidth={1.5} />
											</Link>
											<Link href="#" className="social-icon" title="Instagram" target="_blank">
												<Instagram size={20} color='#777' strokeWidth={1.5} />
											</Link>
										</Flex>
									</div>
								</Flex>
							</div>
						</div>
					</Grid.Col>
				</Grid>
			</div>
			<div className="product-bottom-section">
				<div className="product-details-tab">
					<Tabs defaultValue="description">
						<div className="tab-list">
							<Tabs.List>
								<Tabs.Tab value="description">Description</Tabs.Tab>
								<Tabs.Tab value="information">Additional Information</Tabs.Tab>
								<Tabs.Tab value="reviews">Reviews ({product?.reviewCount})</Tabs.Tab>
							</Tabs.List>
						</div>
						<div className="tab-content">
							<Tabs.Panel value="description">
								<div className="panel-content">
									<div className="product-desc-content">
										<h3>Product Information</h3>
										<div dangerouslySetInnerHTML={{ __html: product?.description }} />
									</div>
								</div>
							</Tabs.Panel>
							<Tabs.Panel value="information">
								<div className="panel-content">
									<div className="product-desc-content">
										<h3>Information</h3>
									</div>
								</div>
							</Tabs.Panel>
							<Tabs.Panel value="reviews">
								<div className="panel-content">
									<div className="product-desc-content">
										<h3>Reviews ({product?.reviewCount})</h3>
									</div>
								</div>
							</Tabs.Panel>
						</div>
					</Tabs>
				</div>
			</div>
		</>
	)
}
