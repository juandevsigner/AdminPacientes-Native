/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import formatearFecha from '../helpers';

const InformacionPaciente = ({paciente, setPaciente, setModalPaciente}) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Informacion <Text style={styles.tituloBold}>Paciente</Text>
      </Text>
      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Telefono:</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Fecha Alta:</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas:</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}>
          <Text style={styles.btnCerrarTexto}>Cerrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default InformacionPaciente;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f59e0b',
    flex: 1,
  },
  contenido: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCerrar: {
    marginTop: 30,
    backgroundColor: '#5827a4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  campo: {marginBottom: 10},
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    fontSize: 12,
  },
  valor: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});
