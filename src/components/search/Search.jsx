import { searchProducts } from '@/query/products'
import { productPrice } from '@/utils/priceUtil'
import { Group, Input, Loader, UnstyledButton } from '@mantine/core'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Link } from 'nextjs13-progress'
import React, { useState } from 'react'

export default function Search() {
    const [searchTxt, setSearchTxt] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const router = useRouter()
    const handleSearchChange = async (event) => {
        setSearchTxt(event.target.value)
        setSearchResults([])
        if (searchTxt.length >= 3) {
            try {
                setIsSearching(true)
                const res = await searchProducts(searchTxt)
                if (res?.data?.products) {
                    setSearchResults(res?.data?.products?.edges)
                }
            } catch (err) {
                console.error(err);
            } finally {
                setIsSearching(false)
            }
        }
        if (event.target.value === '') {
            setSearchResults([])
        }
    }
    const handleItemClick = (url) => {
        setSearchResults([])
        router.push(url)
    }
    return (
        <React.Fragment>
            <div className="search-wrapper">
                <Input
                    placeholder="Search Products..."
                    size='md'
                    rightSectionPointerEvents="all"
                    rightSection={<SearchIcon size={20} strokeWidth={1.5} color='#777' />}
                    value={searchTxt}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="search-result-wrapper">
                {isSearching && (
                    <div className='loader-wrapper'>
                        <Loader size={30} type="bars" color='#C96' />
                    </div>
                )}
                {searchResults.length !== 0 && searchResults.map((item) => (
                    <React.Fragment key={item?.node.id}>
                        <div className="search-item">
                            <UnstyledButton onClick={() => { handleItemClick(`/product/${item?.node.slug}`) }}>
                                <Group>
                                    <div className="item-image">
                                        <Image
                                            src={item?.node.image.mediaItemUrl}
                                            alt="Product image"
                                            className="product-image"
                                            width={60}
                                            height={60}
                                        />
                                    </div>
                                    <div className="details-wrapper">
                                        <h2 className='title'>{item?.node.name}</h2>
                                        <div className="price">${productPrice(item?.node.price)}</div>
                                    </div>
                                </Group>
                            </UnstyledButton>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    )
}
