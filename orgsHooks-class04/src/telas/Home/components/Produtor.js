import React, { useState, useReducer, useMemo } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Estrelas from '../../../componentes/Estrelas';

export default function Produtor({ nome, imagem, distancia, estrelas }) {
  //const [selecionado, setSelecionado] = useState(false);
  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado, false
  );

  const distanciaEmMetros = (distancia) => {
    return `${distancia}m`
  }

  const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]);

  return <TouchableOpacity
    style={estilos.cartao}
    onPress={inverterSelecionado}
  >
    <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />
    <View style={estilos.informacoes}>
      <View>
        <Text style={estilos.nome}>{nome}</Text>
        <Estrelas quantidade={estrelas} editavel={selecionado} grande={selecionado} />
      </View>
      <Text style={estilos.distancia}>{distanciaTexto}</Text>
    </View>
  </TouchableOpacity>
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: "row",

    //Android
    elevation: 4,

    // IOs
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  nome: {
    marginTop: 16,
    fontWeight: 12,
    lineHeight: 19,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  distancia: {
    fontWeight: 12,
    lineHeight: 19,
    marginTop: 16,
    marginRight: 16,
  }
});