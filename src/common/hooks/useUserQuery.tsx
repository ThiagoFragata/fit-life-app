import { useQuery } from '@tanstack/react-query';

import { UserService } from '../services/user.service';

export function useUserQuery() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      return UserService.get();
    },
  });
  // useMutation({
  //   mutationFn: async (image: string | null) => {
  //     if (image) {
  //       // Convertendo a imagem para base64 e blob
  //       const imageData = await FileSystem.readAsStringAsync(image, {
  //         encoding: FileSystem.EncodingType.Base64,
  //       });
  //       const imageBlob = new Blob([imageData], { type: 'image/jpg' });

  //       // Criando o FormData e adicionando a imagem
  //       const formData = new FormData();
  //       formData.append('file', imageBlob, 'image.jpg');

  //       return PostService.upload(formData);
  //     } else {
  //       throw new Error('Você não adicionou uma imagem à sua publicação');
  //     }
  //   },
  //   onError: (error) => {
  //     Alert.alert('Ops, algo deu errado!', error.message);
  //   },
  //   onSuccess: (data) => {
  //     Alert.alert(data.url);
  //   },
  // });
}
