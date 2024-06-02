import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export interface ImagePickerComponentProps {
  image: string | null;
  pickImage: () => Promise<void>;
}

export function ImagePickerComponent({ image, pickImage }: ImagePickerComponentProps) {
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Escolher Imagem" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    marginTop: 20,
    height: RFValue(200),
    borderRadius: RFValue(16),
  },
});
