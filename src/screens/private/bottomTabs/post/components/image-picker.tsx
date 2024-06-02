import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export interface ImagePickerComponentProps {
  image: ImagePicker.ImagePickerAsset | null;
  pickImage: () => Promise<void>;
}

export function ImagePickerComponent({ image, pickImage }: ImagePickerComponentProps) {
  return (
    <View style={s.container}>
      {image && <Image source={{ uri: image.uri }} style={s.image} />}
      <TouchableOpacity onPress={pickImage} style={s.buttonContainer}>
        <Text style={s.text}>{image ? 'Escolher outra' : 'Escolher imagem'}</Text>
      </TouchableOpacity>
      {/* <Button title="Escolher Imagem" onPress={pickImage} /> */}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(16),
  },
  image: {
    width: '100%',
    marginTop: 20,
    height: RFValue(300),
    borderRadius: RFValue(16),
  },
  buttonContainer: {
    marginTop: RFValue(16),
    width: '100%',
    borderWidth: 1,
    borderRadius: RFValue(32),
    borderStyle: 'dashed',
    padding: RFValue(16),
  },
  text: {
    textAlign: 'center',
    fontSize: RFValue(14),
  },
});
