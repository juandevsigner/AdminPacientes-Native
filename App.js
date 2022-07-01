/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modalPaciente, setModalPaciente] = useState(false);

  const nuevaCitaHandler = () => {
    setModalVisible(!modalVisible);
  };

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    setPaciente(pacienteEditar[0]);
  };

  const pacienteEliminar = id => {
    Alert.alert(
      'Deseas Eliminarlo?',
      'Luego de eliminarlo no se puede recuperar',
      [
        {text: 'Cancelar'},
        {
          text: 'Si, Eliminar',
          onPress: () => {
            const pacientesActualizados = pacientes.filter(
              pacienteState => pacienteState.id !== id,
            );
            setPacientes(pacientesActualizados);
          },
        },
      ],
    );
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>

      <Pressable style={styles.btnNuevaCita} onPress={nuevaCitaHandler}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
      {pacientes.length === 0 ? (
        <Text style={styles.textoPacientes}>No Hay Pacientes D:</Text>
      ) : (
        <FlatList
          style={styles.listado}
          keyExtractor={item => item.id}
          data={pacientes}
          renderItem={({item}) => {
            return (
              <Paciente
                pacienteEditar={pacienteEditar}
                setModalVisible={setModalVisible}
                item={item}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
                setPaciente={setPaciente}
              />
            );
          }}
        />
      )}
      {modalVisible && (
        <Formulario
          cerrarModal={cerrarModal}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          paciente={paciente}
        />
      )}

      <Modal animationType="slide" visible={modalPaciente}>
        <InformacionPaciente
          setModalPaciente={setModalPaciente}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '400',
    marginTop: 20,
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: '#6d28d9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  textoPacientes: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 15,
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});
