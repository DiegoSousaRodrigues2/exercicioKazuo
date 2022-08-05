import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function FilmeCard({ data }) {
    const navigation = useNavigation();
    function goDetails() {
        navigation.navigate
            ('Sinopse',
                {
                    nome: data.nome,
                    sinopse: data.sinopse
                }
            )
    }
    return (
        <View style={styles.movieCard}>
            <View style={styles.top}>
                <Text style={styles.textTitle}>
                    {data.nome}
                </Text>
                <TouchableOpacity onPress={goDetails}>
                    <Text style={styles.text}>Leia Mais</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.imagem} source={{ uri: data.foto }} />
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    imagem: {
        width: '100%',
        height: 300,
        borderRadius: 5
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    movieCard: {
        flex: 1,
        marginBottom: 20
    },
    text: {
        color: 'blue',
        fontSize: 16
    }
})