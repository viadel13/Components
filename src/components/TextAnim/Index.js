import styled from "@emotion/styled";
import { Box, Stack, keyframes } from "@mui/material"

const TextAnim = () => {

  
  const anim = keyframes`
    0% {
      margin-top: 0;
    }
    25% {
      margin-top: -100px; /* Déplace l'élément vers le haut de 100px après 1 seconde (25% de 4s) */
    }
    50% {
      margin-top: -210px; /* Déplace l'élément vers le haut de 210px après 2 secondes (50% de 4s) */
    }
    75% {
      margin-top: 0; /* Retour à la position initiale après 3 secondes (75% de 4s) */
    }
    100% {
      margin-top: 0; /* Retour à la position initiale après 4 secondes (100% de 4s) */
    }
  `;

  const BoxStyled = styled(Box)(({ theme }) => ({
    color: '#000',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100px',
    overflow: 'hidden',

  }));

  const Line = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 84px;
  &:first-of-type {
    animation: ${anim} 4s infinite; /* Applique l'animation uniquement au premier paragraphe */
  }
`;

  return (
    <Box
      sx={{
        display: 'flex',
        height: '60vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Stack>
        <p style={{ fontWeight: 700, fontSize: '84px', textAlign: 'center' }}>WE ARE CREATIVE</p>
        <BoxStyled component='div' >
          <Line>DESIGNERS</Line>
          <Line>DEVELOPERS</Line>
          <Line>STUDIO</Line>
        </BoxStyled>
      </Stack>
    </Box>
  )
}

export default TextAnim;
