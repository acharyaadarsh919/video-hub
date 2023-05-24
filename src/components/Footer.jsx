import { Box, Button, Heading, HStack, Input, Stack, VStack,Text } from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'
import {AiFillYoutube, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
        <Stack
        direction={['column','row']}
        >
            <VStack w={'full'} alignItems={'stretch'} p={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get updates
                </Heading>

                <HStack
                borderBottom={'2px solid white'}
                py='2'
                >
                    <Input                     
                    placeholder='Enter Email Here...'
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor={'none'}
                    />
                    <Button
                    p='0'
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size='20' />
                    </Button>
                </HStack>
            </VStack>

            <VStack 
            w={'full'}
            borderLeft={['none','2px solid white']}
            borderRight={['none','2px solid white']}
            p='4'
            >
                <Heading  textTransform={'uppercase'} textAlign={'center'} >
                    Video Hub
                </Heading>
                <Text>All rights recieved</Text>
            </VStack>

            <VStack 
            w={'full'}
            p='4'
            >
                <Heading size={"md"} textTransform={'uppercase'} >
                    Social Media
                </Heading>

                <Stack
                direction={['column', 'row']}
                p={'4'}
                >
                    <Button variant={'link'} colorScheme={'whiteAlpha'} >
                        <a href="https://youtube.com" target={'_blank'}>
                            <AiFillYoutube size={'30'}  />
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha'} >
                        <a href="https://instagram.com" target={'_blank'}>
                            <AiFillInstagram size={'30'}  />
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha'} >
                        <a href="https://github.com" target={'_blank'}>
                            <AiFillGithub size={'30'}  />
                        </a>
                    </Button>
                </Stack>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer