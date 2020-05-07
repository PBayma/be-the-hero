import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text,  TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Detail() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.imgs} />
                
                <TouchableOpacity onPress={()=> {}} >
                    <Feather name='arrow-left' size={28} color='#e02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Cachorro esfaqueado e mordido por um humano</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

            </View>

            <View style={styles.contactBox} >
                <Text styles={styles.heroTitle}>Salve o dia!</Text>
                <Text styles={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={style.action} onPress={() => {}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.action} onPress={() => {}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
