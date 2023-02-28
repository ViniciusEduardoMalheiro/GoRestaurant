import Logo from '../../images/Logo.svg'
import { BiPlus } from 'react-icons/bi'
import { OpenModal } from '../../components/Modal'
import { Flex, Button, Box, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex w='100%' height='17rem' p='2rem' background='#C72828' justifyContent='space-between' padding='2rem' minW='60rem'>
            <Image src={Logo} alt=""  w='19.25rem' h='3.87rem' ml='10rem' />
            <Flex alignItems='center' w='12.12rem' mr='10rem' h='3.5rem' justifyContent='space-evenly' gap='1rem'  borderRadius='12px' background='#41C900' fontSize='md' >
                <Flex  w='2.5rem' cursor='pointer' display='flex' alignItems='center' justifyContent='center' >
                <OpenModal /> 
                <BiPlus  color='#FFFF' fontSize='1.8rem'  />
                </Flex>
            </Flex>
        </Flex>
    )
}