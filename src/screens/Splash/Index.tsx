import React from 'react';
import { Image } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import BackgroundImg from '../../assets/splash.png';
import { Container, Desc, Logo, LogoArea, ButtonArea, Box } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button/Index';
import { AntDesign } from '@expo/vector-icons'; 


const Splash = () => {

  return (
    <SafeAreaView>
      <StatusBar translucent style='light' />

      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt='Mesa verde com frutas e legumes verdes'
        resizeMode='cover'
        position='absolute'
      />
<Box>

      <LogoArea>
        <Logo>NutriYou</Logo>
        <Desc>Forma fácil de encontrar uma dieta!</Desc>
        
      </LogoArea>
      <ButtonArea>
        <Button
        title='Encontrar uma dieta '
        _icon={<AntDesign name="arrowright" size={16} color="white" />}
          variant='solid'
          width='full'
          height='42%'
        />
      </ButtonArea>
        </Box>

    </SafeAreaView>

  )
}

export default Splash