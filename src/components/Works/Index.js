import { Avatar, Box, Stack } from '@mui/material'
import projet1 from './img.png'
import styled from '@emotion/styled';

const Works = () => {

  const ImageProduit = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  margin: 45px;

  .overlay {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  img {
    width: 100%;
    transition: opacity 0.5s ease-in-out, transform 1s;
  }

  &:hover {
    .overlay {
      opacity: 8;
    }

    img {
      opacity: 8;
      transform: scale(1.1);
    }
  }
`;


  const BoxStyled2 = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
  }));

  const BoxStyled3 = styled(Box)(({ theme }) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    color: 'white',
  }));

  const BoxStyled4 = styled(Box)(({ theme }) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    color: 'white',
    display: 'flex',

  }));

  return (
    <Box
      width='100%'
      height='100vh'
      justifyContent='center'
      display='flex'
      alignItems='center'
    >
      <ImageProduit>
        <Avatar
          sx={{
            borderRadius: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={projet1} alt='projet1'
        />
        <BoxStyled2 component='div' className='overlay'>
          <BoxStyled3 component='div' className='content'>
            <BoxStyled4>
              <Stack direction='row' alignSelf='flex-start' p={4} spacing={2}>
                <Box
                  sx={{
                    backgroundColor: '#FFFDF6',
                    color: '#000000',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '9.92px',
                    padding: '10px 12px 10px 12px',
                    borderRadius: '100px'

                  }}
                >
                  <p>UI-UX DESIGN</p>
                </Box>
                <Box
                  sx={{
                    backgroundColor: '#FFFDF6',
                    color: '#000000',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '9.92px',
                    padding: '10px 12px 10px 12px',
                    borderRadius: '100px'

                  }}
                >
                  <p>WEBSITE DESIGN</p>
                </Box>
              </Stack>
            </BoxStyled4>
            <Stack
              height='100%'
              sx={{
                position: 'absolute',
                top: 0,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#FFFDF6',
                  color: '#000000',
                  width: '65px',
                  height: '65px',
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'

                }}
              >
                <span style={{ fontSize: '25px', fontWeight: 'bold', cursor: 'default' }}>&#8594;</span>
              </Box>
            </Stack>

            <Stack
              spacing={1}
              p={4}
              sx={{
                height: '100%',
                justifyContent: 'flex-end'
              }}
            >
              <p style={{ fontSize: '20px', fontWeight: 600, lineHeight: '24.8px' }}>
                ARK STUDIO
              </p>
              <p style={{ fontSize: '14px', fontWeight: 100, lineHeight: '16.8px' }}>Landing page of architecture and interior studio</p>
            </Stack>
          </BoxStyled3>
        </BoxStyled2>
      </ImageProduit>
    </Box>
  )
}

export default Works
