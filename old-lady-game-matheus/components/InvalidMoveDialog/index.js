import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const InvalidMoveDialog = ({isOpen, onClickClose}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>
                    Não é possível jogar aqui!
                </Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onClickClose}
                >
                    <Text style={styles.textStyle}>
                        Voltar
                    </Text>
                </Pressable>
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'red',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'black',
    textTransform: 'uppercase',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default InvalidMoveDialog;