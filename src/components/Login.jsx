import { Button, Container, Heading, Input, InputGroup, InputRightAddon, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiHide, BiShowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Login = () => {
    const [show , setShow] = useState(false)
  return (
    <Container
    maxW={'container.xl'}
    h={'100vh'}
    p='16'
    >
        <form>
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
            >
                <Heading textAlign={'center'}>Log In</Heading>

                <Input
                placeholder='Email'
                type={'email'}
                required
                focusBorderColor='purple.500'
                />

                <InputGroup>
                    <Input
                    placeholder='Password'
                    type={show ? 'text' : 'password'}
                    required
                    focusBorderColor='purple.500'
                    />
                    <InputRightAddon 
                    onClick={()=>setShow(!show)}
                    cursor={'pointer'}
                    >
                        { show ? <BiHide  /> : <BiShowAlt /> }
                    </InputRightAddon>
                </InputGroup>

                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/forgotpassword'} >Forgot password</Link>
                </Button>

                <Button type='submit' colorScheme={'purple'}>Log in</Button>

                <Text textAlign={'center'} >
                    {'New User ?  '}
                    <Button variant={'link'} colorScheme={'purple'} >
                        <Link to={'/signup'} >Sign Up</Link>
                    </Button>
                    {' now'}
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Login