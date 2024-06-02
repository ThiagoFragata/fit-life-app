import { yupResolver } from '@hookform/resolvers/yup';
import * as ImagePicker from 'expo-image-picker';
import FormData from 'form-data';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { usePostMutation } from '../hooks/usePostMutation';
import { PostType, postSchema } from '../models/postModel';

function usePostViewModel() {
  const { mutate, isPending } = usePostMutation();

  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const { control, handleSubmit } = useForm<PostType>({
    resolver: yupResolver(postSchema),
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const onSubmitPost = handleSubmit(async (payload: PostType) => {
    if (!image) {
      Alert.alert('Você não adicionou uma imagem à sua publicação');
      return;
    }

    const imageName = image.uri.split('/').pop(); // Extrai o nome original da URI
    const uniqueImageName = `${uuidv4()}_${imageName}`;

    const formData = new FormData();
    formData.append('file-post', {
      uri: image.uri,
      type: image.mimeType,
      name: uniqueImageName,
    });

    try {
      mutate({
        title: payload.title,
        description: payload.description,
        file: formData,
      });
    } catch (error) {
      console.error('Erro ao enviar a publicação:', error);
    }
  });

  return {
    image,
    control,
    pickImage,
    onSubmitPost,
    isPending,
  };
}

export default usePostViewModel;
