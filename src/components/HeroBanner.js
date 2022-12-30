import React from 'react';
import {Box, Stack, Typography,} from '@mui/material';

import HeroBannerImage from "../assets/images/banner.png";


const HeroBanner = () => (
    <Box sx={{ mt: {md :'150px', xs: '20px'},
      ml: {sm: '50px'} 
    }} position= 'relative' p='20px'
     >
      <Typography
       color='#ff2625' fontWeight='700' fontSize= '40px'
       mb='40px'
       mt='60px'>
       Jags Fitness Club
      </Typography>
      <Typography fontWeight={700} fontSize={35}
      sx={{fontSize: {md: '44px', xs: '40px'
      }}}
      mb='0px' mt='20px'>
       Sweat, Smile, <br />
        And Repeat Again !
      </Typography>
      <Typography fontSize='22px' lineHeight="35px" mb={3} mt={1}>
        Check Out The Most Effective <br />Exercises For Each Muscle Group.
      </Typography>
      
      <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center',
       background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
  
       <Typography 
         fontFamily={600}
         color="#ff2625"
          sx={{
            opacity:0.1,
            display: {md: 'block', xs: 'none'}
          }}
          fontSize='200px'
          
          >
    
       </Typography>
       <img   src={HeroBannerImage} 
    alt="banner"  id='hero-banner-img'  
    />
    
    </Box>
  
)

export default HeroBanner;
