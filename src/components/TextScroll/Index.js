import { Box } from '@mui/material'
import Marquee from 'react-fast-marquee';

const TextScroll = () => {

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      backgroundColor='#000000'
      color='#FFFDF6'
      textTransform='uppercase'
      fontSize='60px'
      width='100%'
      fontWeight={700}
    >
      <Marquee
       speed={150}
      >
        <span >contact us</span>
        <span style={{margin: '100px'}}> Let’s Build Together</span>
      </Marquee>
    </Box>
  )
}

export default TextScroll
