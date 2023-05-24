import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:'4',
    size:'3xl'

}

const Home = () => {
  return (
    <Box>
        <MyCarousel  />
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading textTransform={'uppercase'} py={'2'} w={"fit-content"} borderBottom={"2px solid"} m={'auto'}>
                Services
            </Heading>

            <Stack
            h={'full'}
            py={'4'}
            alignItems={'center'}
            direction={["column","column","column", "row"]}
            >
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                <Text letterSpacing={'widest'} lineHeight={'190%'} px={["4", "16"]} textAlign={'center'}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore animi modi voluptatibus laborum iste quae, voluptatem odit nostrum voluptates illo commodi alias molestiae nam assumenda. Fugiat et enim iusto ullam.
                    Harum illum quos molestias aspernatur? Minus autem praesentium, tenetur ipsa cum, alias illo asperiores facere ut iste corrupti beatae nam voluptates. Magnam reprehenderit vero voluptate, obcaecati repellat recusandae sint quis.
                    Rerum facere perferendis quibusdam eaque laboriosam quia, sint fugiat accusamus id, suscipit, quasi nostrum. Nesciunt vitae dolor possimus illum rerum neque reiciendis consequuntur. Provident accusamus nesciunt blanditiis iusto saepe fuga.
                    Alias libero eius ipsum praesentium suscipit. In at corrupti vero fuga eveniet harum quisquam beatae quasi sed, illo, facilis earum ut debitis architecto quos molestiae expedita unde nulla eum. Tenetur.
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = () => {
    return(
        <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} showArrows={false}>
            <Box w="full" h={'100vh'}>
                <Image src={img1} h={'full'} w="full" objectFit={'cover'}/>
                <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the Future</Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img2} h={'full'} w="full" objectFit={'cover'} />
                <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Live to GAME!</Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img3} h={'full'} w="full" objectFit={'cover'} />
                <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Be a Gamer</Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img4} h={'full'} w="full" objectFit={'cover'} />
                <Heading bgColor={"blackAlpha.600"} color={"white"}  {...headingOptions}>be the hero of thousand stories</Heading>
            </Box>
        </Carousel>
    )
}

export default Home