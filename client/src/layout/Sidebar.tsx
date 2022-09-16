import { Stack,Divider, Box, Typography } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Stack
    direction="row"
    divider={<Divider orientation="vertical" flexItem />}
    spacing={2}
  >
    <Box
      sx={{
        width:'auto',
        height: 'auto',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography>
        Footer Herer
      </Typography>
    </Box>
    
  </Stack>
  )
}

export default Sidebar

 