import { Avatar, Button, Container, Heading, Input, InputGroup, InputRightAddon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container
    maxW={'container.xl'}
    minH={'100vh'}
    p='16'
    >
        <form>
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            mt={'-5'}
            >
                <Heading textAlign={'center'}>Sign Up</Heading>
                <Avatar alignSelf={'center'} boxSize={'24'} />

                <Input
                placeholder='Name'
                type={'text'}
                required
                focusBorderColor='purple.500'
                />

                <Input
                placeholder='Email'
                type={'email'}
                required
                focusBorderColor='purple.500'
                />

                <Input
                placeholder='Password'
                type={'password'}
                required
                focusBorderColor='purple.500'
                />

                <Button type='submit' colorScheme={'purple'}>Create account</Button>

                <Text textAlign={'center'} >
                    {'Already have an account ?  '}
                    <Button variant={'link'} colorScheme={'purple'} >
                        <Link to={'/login'} >Sign In</Link>
                    </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Signup