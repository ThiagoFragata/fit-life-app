import { Control, Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ImagePickerComponent } from '../components/image-picker';
import { PostType } from '../models/postModel';
import { style as s } from '../styles/postStyle';

import { Button } from '@/components/atoms/button-default';
import { ContainerHome } from '@/components/atoms/container-home';
import { HeaderScreen } from '@/components/atoms/header';
import { Input } from '@/components/atoms/input';
import { Textarea } from '@/components/atoms/textarea';

interface PostViewProps {
  image: string | null;
  control: Control<PostType>;
  pickImage: () => Promise<void>;
  handleSubmitPost: () => void;
}

const PostView: React.FC<PostViewProps> = ({ image, pickImage, control, handleSubmitPost }) => (
  <ContainerHome>
    <HeaderScreen backLabel="Home" screenLabel="Publicação" />
    <KeyboardAwareScrollView style={s.content} showsVerticalScrollIndicator={false}>
      <ImagePickerComponent image={image} pickImage={pickImage} />

      <View style={s.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <Input
                label="Título"
                keyboardType="default"
                placeholder="Digite o título"
                onChangeText={onChange}
                value={value}
              />
              <Text style={s.erroMessage}>{error?.message}</Text>
            </View>
          )}
          name="title"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Textarea
              label="Descrição"
              numberOfLines={4}
              keyboardType="default"
              placeholder="Digite a descrição"
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
          name="description"
        />

        <Button label="Publicar" textMode="dark" onPress={handleSubmitPost} />
      </View>
    </KeyboardAwareScrollView>
  </ContainerHome>
);

export default PostView;
