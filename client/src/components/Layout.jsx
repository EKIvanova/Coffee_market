import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import NavBar from './project_ui/NavBar';

export default function Layout({ user, handleLogout }) {
  return (
    <Flex direction="column" minH="100vh">
      <Box as="header">
        <NavBar user={user} handleLogout={handleLogout} />
      </Box>
      <Box as="main" flex="1">
        <Outlet />
      </Box>
    </Flex>
  )
}
