import { navItems } from '@/src/config/constants'
import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import React, { Fragment } from 'react'

const SideBar = () => {

    const data = [
        {
            image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
            title: 'Technical SEO with Hygraph',
            exerpt: 'Get started with your SEO implementation when using a Headless CMS',
            author: {
                name: 'Samar Badriddinov',
                image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
            },
        },
        {
            image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
            title: 'Union Types and Sortable Relations with Hygraph',
            exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
            author: {
                name: 'Samar Badriddinov',
                image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
            },
        },
    ]

    return (
        <>
            <Box width={{ xs: '100%', md: '30%' }}>
                <Box position={'sticky'} top={'9vh'} sx={{transition: 'all .3s ease'}}>
                    <Box border={'1px solid gray'} padding={'20px'} borderRadius={'8px'}>
                        <Typography variant='h5'>Category</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                            {navItems.map(nav => (
                                <Fragment key={nav.route}>
                                    <Button fullWidth sx={{justifyContent: 'flex-start', height: '50px'}} >{nav.label}</Button>
                                    <Divider />                
                                </Fragment>
                            ))}
                        </Box>
                    </Box>
                    <Box border={'1px solid gray'} padding={'20px'} borderRadius={'8px'} marginTop={'20px'}>
                        <Typography>Latest blog</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                            {data.map((item) => (
                                <Box key={item.title} marginTop={'20px'}>
                                    <Box sx={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                                        <Image 
                                            src={item.image} 
                                            alt={item.title} 
                                            width={100} 
                                            height={100} 
                                            style={{objectFit: 'contain', gap: '8px'}} 
                                        />
                                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                            <Typography variant='body1'>{item.title}</Typography>
                                            <Box sx={{ display: 'flex', alignItems:'center', gap: '10px' }}>
                                            <Avatar alt={item.author.name} src={item.author.image} />
                                            <Box>
                                                <Typography variant='body2'>{item.author.name}</Typography>
                                                <Box sx={{opacity: '.6'}}>{format(new Date(), 'dd MMM, yyyy')}</Box>
                                            </Box>
                                        </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SideBar