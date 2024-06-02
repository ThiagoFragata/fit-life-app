import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

import { PostProps, UsePostMutationProps } from '../models/postModel';
import { PostService } from '../services/post.service';

import { useUserQuery } from '@/common/hooks/useUserQuery';
import { RootNavigationProp } from '@/types/screens';

export function usePostMutation() {
  const { data: User } = useUserQuery();
  const { goBack } = useNavigation<RootNavigationProp>();

  const { mutate } = useMutation({
    mutationFn: async (payload: PostProps) => {
      return PostService.create(payload);
    },
    onError: (error) => {
      Alert.alert('Ops, algo deu errado!', error.message);
    },
    onSuccess: () => {
      Alert.alert('Sucesso', 'Sua publicação já está disponível no feed');
      goBack();
    },
  });

  return useMutation({
    mutationFn: async ({ description, file, title }: UsePostMutationProps) => {
      const { url } = await PostService.upload(file);
      return {
        title,
        description,
        url,
      };
    },
    onError: (error) => {
      Alert.alert('Ops, algo deu errado!', error.message);
    },
    onSuccess: (data) => {
      mutate({
        title: data.title,
        description: data.description,
        photo: data.url,
        authorId: Number(User?.user.id),
      });
    },
  });
}
