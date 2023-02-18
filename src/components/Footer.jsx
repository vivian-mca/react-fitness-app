import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    {/* Logo */}
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    {/* Footer info */}
    <Typography variant="body1" sx={{ fontSize: { lg: '20px', xs: '12px' }, textAlign: 'center' }} mt="41px" pb="40px">Made by Fight Milk, Frank's Fluids LLC </Typography>
  </Box>
);

export default Footer;
