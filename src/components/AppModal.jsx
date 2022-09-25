import {
  StyleSheet,
  Pressable,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import theme from '../config/theme';

export default function CustomModal(props) {
  const {
    modalVisible,
    setModalVisible,
    containerStyles,
    modalContainerStyles,
    outsideClickClose,
  } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        disabled={!outsideClickClose}>
        <View style={[styles.centeredView, modalContainerStyles]}>
          <View style={[styles.modalView, containerStyles]}>
            {props.children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
