import { yupResolver } from '@hookform/resolvers/yup';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { PostType, postSchema } from '../models/postModel';

function usePostViewModel() {
  const [image, setImage] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<PostType>({
    resolver: yupResolver(postSchema),
  });
  const onSubmit = handleSubmit((data: PostType) => console.log(data));

  function handleSubmitPost() {
    if (image) {
      onSubmit();
    } else {
      Alert.alert('Você não adicionou uma imagem a sua publicação');
    }
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return {
    image,
    control,
    pickImage,
    handleSubmitPost,
  };
}

export default usePostViewModel;
