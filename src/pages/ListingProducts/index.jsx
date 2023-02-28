import { 
    Switch,
    Flex,
    Card,
    Image,
    Heading,
    Text, 
    List, } from '@chakra-ui/react'

import molho  from '../../images/molho.png'
import Veggie  from '../../images/Veggie.png'
import lacarne  from '../../images/lacarne.png'
import { Header } from '../../components/Header'

import { FiEdit3 } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'


export function ListingProducts() {

    

    return (
        <>
         <Header />

        <Flex w='100%' justifyContent='center' mt='-7rem' flexWrap='wrap' gap='2rem' mb='9.87rem' >
            <ul>
                <List >
                    <Card direction='column' w='20rem' h='28rem' borderRadius='12px' background='#d6d6d66d' >
                        <img src={molho} />
                        <Flex direction='column' gap='2rem' padding='1rem' >
                            <Heading fontSize='1.75rem' >Ao molho</Heading>
                            <Text fontSize='1rem' fontFamily='Poppins' fontWeight='400' >Macarrão ao molho branco, fughi e<br/>cheiro verde das montanhas</Text>
                            <Text fontWeight='600' fontSize='1.5rem' color='#39B100'  >R$ 19,90</Text>
                        </Flex>
                        <Flex background='#9f9fa1'  height='100%' justifyContent='space-evenly' alignItems='center' borderRadius='0 0 12px 12px' >
                            <FiEdit3 cursor='pointer' />
                            <RiDeleteBin7Line cursor='pointer' />
                            <Text>Disponivel</Text>
                            <Switch size='lg' color='#39B100' />
                        </Flex>
                    </Card>
                </List>
            </ul>
            <ul>
                <List>
                    <Card direction='column' w='20rem'  h='28rem' borderRadius='12px' background='#d6d6d66d'  >
                        <img src={Veggie} />
                        <Flex direction='column' gap='2rem' padding='1rem' >
                            <Heading fontSize='1.75rem' >Veggie</Heading>
                            <Text fontSize='1rem' fontFamily='Poppins' fontWeight='400' >Macarrão ao molho branco, fughi e<br/>cheiro verde das montanhas</Text>
                            <Text fontWeight='600' fontSize='1.5rem' color='#39B100' >R$ 19,90</Text>
                        </Flex>
                        <Flex background='#9f9fa1'  height='100%' justifyContent='space-evenly' alignItems='center' borderRadius='0 0 12px 12px' >
                            <FiEdit3 cursor='pointer' />
                            <RiDeleteBin7Line cursor='pointer' />
                            <Text>Disponivel</Text>
                            <Switch size='lg' />
                        </Flex>
                    </Card>
                </List>
            </ul>
            <ul>
                <List>
                    <Card direction='column' w='20rem'  h='28rem' borderRadius='12px' background='#d6d6d66d' >
                        <img src={lacarne} />
                        <Flex direction='column' gap='2rem' padding='1rem' >
                            <Heading fontSize='1.75rem' >A la camarón</Heading>
                            <Text fontSize='1rem' fontFamily='Poppins' fontWeight='400' >Macarrão ao molho branco, fughi e<br/>cheiro verde das montanhas</Text>
                            <Text fontWeight='600' fontSize='1.5rem' color='#39B100' >R$ 19,90</Text>
                        </Flex>
                        <Flex background='#9f9fa1'  height='100%' justifyContent='space-evenly' alignItems='center' borderRadius='0 0 12px 12px' >
                            <FiEdit3 cursor='pointer' />
                            <RiDeleteBin7Line cursor='pointer' />
                            <Text>Disponivel</Text>
                            <Switch size='lg' />
                        </Flex>
                    </Card>
                </List>
            </ul>
            <ul>
                <List>
                    <Card direction='column' w='20rem' h='28rem' borderRadius='12px' background='#d6d6d66d' >
                        <img src={lacarne} />
                        <Flex direction='column' gap='2rem' padding='1rem' >
                            <Heading fontSize='1.75rem' >A la camarón</Heading>
                            <Text fontSize='1rem' fontFamily='Poppins' fontWeight='400' >Macarrão ao molho branco, fughi e<br/>cheiro verde das montanhas</Text>
                            <Text fontWeight='600' fontSize='1.5rem' color='#39B100' >R$ 19,90</Text>
                        </Flex>
                        <Flex background='#9f9fa1'  height='100%' justifyContent='space-evenly' alignItems='center' borderRadius='0 0 12px 12px' >
                            <FiEdit3 cursor='pointer' />
                            <RiDeleteBin7Line cursor='pointer' />
                            <Text>Disponivel</Text>
                            <Switch size='lg' />
                        </Flex>
                    </Card>
                </List>
            </ul>
            <ul>
                <List>
                    <Card direction='column' w='20rem'  h='28rem' borderRadius='12px' background='#d6d6d66d' >
                        <img src={molho} />
                        <Flex direction='column' gap='2rem' padding='1rem' >
                            <Heading fontSize='1.75rem' >Ao molho</Heading>
                            <Text fontSize='1rem' fontFamily='Poppins' fontWeight='400' >Macarrão ao molho branco, fughi e<br/>cheiro verde das montanhas</Text>
                            <Text fontWeight='600' fontSize='1.5rem' color='#39B100' >R$ 19,90</Text>
                        </Flex>
                        <Flex background='#9f9fa1'  height='100%' justifyContent='space-evenly' alignItems='center' borderRadius='0 0 12px 12px' >
                            <FiEdit3 cursor='pointer' />
                            <RiDeleteBin7Line cursor='pointer' />
                            <Text>Disponivel</Text>
                            <Switch size='lg' />
                        </Flex>
                    </Card>
                </List>
            </ul>
            <ul>
                <List>
                    <Card direction='column' w='20rem'  h='28rem' borderRadius='12px' background='#d6d6d66d' >
                        <img src={Veggie} />
                        <Flex direction='column' gap='2rem' padding='1rem' >
                            <Heading fontSize='1.75rem' >Veggie</Heading>
                            <Text fontSize='1rem' fontFamily='Poppins' fontWeight='400' >Macarrão ao molho branco, fughi e<br/>cheiro verde das montanhas</Text>
                            <Text fontWeight='600' fontSize='1.5rem' color='#39B100' >R$ 19,90</Text>
                        </Flex>
                        <Flex background='#9f9fa1'  height='100%' justifyContent='space-evenly' alignItems='center' borderRadius='0 0 12px 12px' >
                            <FiEdit3 cursor='pointer' />
                            <RiDeleteBin7Line cursor='pointer' />
                            <Text>Disponivel</Text>
                            <Switch size='lg' />
                        </Flex>
                    </Card>
                </List>
            </ul>
        </Flex>
        </>
       
    )
}