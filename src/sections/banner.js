/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/h1.jpg';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import { useEffect } from 'react';

export default function Banner() {
//   const getUnits   =  async()  =>{
//     const url       =   `https://consolitex.org/_Bienes_Raices/api.php?i=0&q=mañongo`;
//     const resp      =   await fetch(url, {method:'POST'});
//     const data      =   await resp.json();
//     const gifs      =   data.map( img => {
//         return  {
//             id      :   img.id,
//             nombre   :   img.nombre,
//             precio     :   img.precio
//         }
//     })
//     return gifs;
// }
// useEffect(() => {
//     getUnits()
//     .then((data)=>data.map(u=>console.log(u)))
// }, [])
  return (
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Los mejores inmuebles en el mercado
          </Heading>
          <Text as="p" variant="heroSecondary">
            En nuestro sitio web, encontrarás ese inmueble con el que tanto sueñas. ¡Trabajamos duro para conseguir lo que buscan nuestros clientes! 
          </Text>
          <Button variant="primary">
            Ver mas...
          </Button>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt='banner'/>
        </Box>
      </Container>

    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};