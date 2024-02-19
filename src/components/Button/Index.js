import { Button, Stack } from '@mui/material';
import styled from '@emotion/styled';

function MyButton() {

  const ButtonStyled = styled(Button)(({ theme }) => ({
    padding: '16px 43px',
    borderRadius: '29px',
    border: '2.6px solid #000000',
    color: '#000000',
    position: 'relative',
    overflow: 'hidden',
    
    '&::after': {
      content: '"LET’S TALK"',
      position: 'absolute',
      top: 0,
      left: 0,
      background: '#fff',
      color: '#000',
      width: '100%',
      height: '100%',
      transition: '.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'translateY(0) rotateX(0deg)',
      transformOrigin: 'bottom',
    },

    '&::before':{
      content: '"LET’S TALK"',
      position: "absolute",
      top: 0,
      left: 0,
      background: '#131212',
      color: 'white',
      width: '100%',
      height: '100%',
      transition: '.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'translateY(100%) rotateX(90deg)',
      transformOrigin: 'top',
    },

    '&:hover::after': { 
      transform: 'translateY(-100%) rotateX(90deg)',
    },

    '&:hover::before': { 
      transform: 'translateY(0) rotateX(0deg)',
    }

  }));

  return (
    <Stack direction='row' justifyContent='center' alignItems='center' height={250}>
      <ButtonStyled
        variant='outlined'
        disableRipple
      >
        LET’S TALK
      </ButtonStyled>
    </Stack>
  );
}

export default MyButton;
