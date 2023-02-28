import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    FormControl,
    Input,
    Flex,
    Text,
    Heading,
    useDisclosure,
    Button,
    InputGroup,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { GoChecklist } from 'react-icons/go'


export function OpenModal() {


    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)


    return (

        <Flex alignItems='center' justifyContent='center' >
            <Flex bg='#41C900' alignItems='center' justifyContent='space-around' >

                <Button onClick={onOpen} colorScheme='#41C900' w='80%' height='100%' >Novo Prato</Button>
                <BiPlus color='#FFFF' fontSize='1.5rem' />
            </Flex>
            <Flex  >
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    size='3xl'
                >
                    <ModalOverlay />
                    <ModalContent background='#F0F0F5' padding='2.5rem 3rem' justifyContent='center' alignItems='center' m='2rem 2rem' >
                        <ModalBody />
                        <FormControl>
                            <Flex flexDirection='column'  >
                                <Heading fontFamily='Poppins' fontSize='2.25rem' fontWeight='600' >Novo Prato</Heading>
                                <InputGroup justifyContent='center' flexDirection='column' mt='1.5rem' >
                                    <Text mb='8px' color='#6C6C80' >URL da imagem</Text>
                                    <Input placeholder='Cole o link aqui' fontSize='1rem' background='#FFFFFF' w='100%' padding='1.5rem' borderRadius='8px' onChange={handleNewPrato} />
                                </InputGroup>
                                <InputGroup flexDirection='column' mt='1.5rem' >
                                    <Text color='#6C6C80' >Nome do prato</Text>
                                    <InputGroup display='flex' gap='1rem' >
                                        <Input placeholder='Ex: Moda Italiana' w='100%' padding='1.5rem' background='#FFFFFF' borderRadius='8px' />
                                        <Input placeholder='Preço' w='12.5rem' padding='1.5rem' background='#FFFFFF' borderRadius='8px' />
                                    </InputGroup>
                                </InputGroup>
                                <InputGroup mt='1.5rem' flexDirection='column' >
                                    <Text color='#6C6C80' >Descrição do prato</Text>
                                    <Input padding='1.5rem' background='#FFFFFF' borderRadius='8px' w='100%' />
                                </InputGroup>
                            </Flex>
                            <Flex alignItems='center' justifyContent='end' ml='2.5rem' >
                                <Button colorScheme='blue'
                                    w='14.5rem'
                                    height='3.5rem'
                                    padding='1.5rem'
                                    mt='3rem'
                                    justifyContent='space-around'
                                    onSubmit={handleNewPrato}
                                >Adicionar Prato <GoChecklist fontSize='1.2rem' /></Button>
                            </Flex>
                        </FormControl>
                    </ModalContent>
                </Modal>
            </Flex>

        </Flex>

    )
}