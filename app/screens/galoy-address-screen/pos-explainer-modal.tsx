import { useI18nContext } from "@app/i18n/i18n-react"
import { palette } from "@app/theme"
import React from "react"
import { Modal, TouchableWithoutFeedback, View } from "react-native"
import { Text } from "react-native-elements"
import EStyleSheet from "react-native-extended-stylesheet"

const styles = EStyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: palette.white,
    borderRadius: 20,
    padding: 35,
    shadowColor: palette.midGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  titleText: {
    color: palette.lapisLazuli,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  bodyText: {
    color: palette.lapisLazuli,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
  backText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  cancelText: {
    color: palette.primaryButtonColor,
    fontSize: 18,
  },
})

type SetAddressModalProps = {
  modalVisible: boolean
  toggleModal?: () => void
}

export const PosExplainerModal = ({
  modalVisible,
  toggleModal,
}: SetAddressModalProps) => {
  const { LL } = useI18nContext()

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          toggleModal()
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.titleText}>
            {LL.GaloyAddressScreen.howToUseYourCashRegister()}
          </Text>
          <Text style={styles.bodyText}>
            {LL.GaloyAddressScreen.howToUseYourCashRegisterExplainer()}
          </Text>
          <TouchableWithoutFeedback onPress={() => toggleModal()}>
            <View style={styles.backText}>
              <Text style={styles.cancelText}>{LL.common.back()}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  )
}
