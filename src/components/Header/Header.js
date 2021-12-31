import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled('header')(({ theme }) => ({
   background: '#f7f7f7',
}));

const HeaderBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   minHeight: '5rem',
}));

const Nav = styled('nav')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}));

const Header = () => {
   return (
      <HeaderWrapper>
         <Container maxWidth='lg'>
            <HeaderBox>
               <Link
                  to='/'
                  style={{ textDecoration: 'none', color: '#1976d2' }}
               >
                  <Typography
                     variant='h6'
                     sx={{
                        fontWeight: 'bold',
                        cursor: 'pointer',
                     }}
                  >
                     SHOMIN ARENA
                  </Typography>
               </Link>

               <Nav>
                  <Link to='/login' style={{ textDecoration: 'none' }}>
                     <Button variant='contained'>Login</Button>
                  </Link>
               </Nav>
            </HeaderBox>
         </Container>
      </HeaderWrapper>
   );
};

export default Header;
