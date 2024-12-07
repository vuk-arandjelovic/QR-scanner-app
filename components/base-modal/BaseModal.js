import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import theme from "@/styles/theme";

const BaseModal = ({
  visible,
  onClose,
  title,
  children,
  showCloseButton = true,
  scrollable = true,
  footerContent,
  style,
}) => {
  const ContentWrapper = scrollable ? ScrollView : View;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.modalContainer, style]}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            {showCloseButton && (
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            )}
          </View>

          <ContentWrapper style={styles.contentContainer}>
            {children}
          </ContentWrapper>

          {footerContent && <View style={styles.footer}>{footerContent}</View>}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create(...theme.baseModal);

export default BaseModal;
