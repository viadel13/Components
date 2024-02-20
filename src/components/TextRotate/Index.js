import { Box, keyframes } from '@mui/material';
import { useLayoutEffect, useState } from 'react';

const TextRotate = () => {

  const [valeur, setValeur] = useState(0)

  useLayoutEffect(() => {
    setValeur(10.8)
    const text = document.querySelector('.text p');
    if (text) {
      text.innerHTML = text.innerText
        .split('')
        .map((char, i) => `<span style="transform:rotate(${i * valeur}deg); position: absolute; left: 50%;  transform-origin: 0 80px; font-weight: 600; text-transform: uppercase; font-size: 18px; ">${char}</span>`)
        .join('');
    }
  }, [valeur]);

  const rotateText = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;



  return (
    <Box
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        component='div'
        sx={{
          position: "relative",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            backgroundColor: '#000',
            color: 'white',
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box component='span'
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'default',
              transform: 'rotate(-45deg)',
              display: 'block'
            }}
          >
            &#8594;
          </Box>
        </Box>
        <Box
          component='div'
          className='text'
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            animation: `${rotateText} 10s linear infinite`,
          }}
        >
          <p>Talk . about . let's .</p>
        </Box>
      </Box>
    </Box>
  );
}

export default TextRotate;
