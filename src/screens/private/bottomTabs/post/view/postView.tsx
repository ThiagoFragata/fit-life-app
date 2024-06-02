import * as ImagePicker from 'expo-image-picker';
import { Control, Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';

import { ImagePickerComponent } from '../components/image-picker';
import { PostType } from '../models/postModel';
import { style as s } from '../styles/postStyle';

import { Button } from '@/components/atoms/button-default';
import { ContainerHome } from '@/components/atoms/container-home';
import { HeaderScreen } from '@/components/atoms/header';
import { Input } from '@/components/atoms/input';
import { Textarea } from '@/components/atoms/textarea';
import { ActivityIndicatorComponent } from '@/components/molecules/activityIndicator';

interface PostViewProps {
  image: ImagePicker.ImagePickerAsset | null;
  control: Control<PostType>;
  isPending: boolean;
  pickImage: () => Promise<void>;
  onSubmitPost: () => void;
}

const PostView: React.FC<PostViewProps> = ({
  image,
  pickImage,
  control,
  onSubmitPost,
  isPending,
}) => (
  <ContainerHome>
    <HeaderScreen backLabel="Home" screenLabel="Publicação" />
    <KeyboardAwareScrollView
      style={s.content}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: RFValue(16) }}>
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
                autoCapitalize="sentences"
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
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <Textarea
                label="Descrição"
                numberOfLines={4}
                keyboardType="default"
                autoCapitalize="sentences"
                placeholder="Digite a descrição"
                textAlignVertical="top"
                onChangeText={onChange}
                value={value}
                multiline
              />
              <Text style={s.erroMessage}>{error?.message}</Text>
            </View>
          )}
          name="description"
        />

        <Button
          textMode="dark"
          label={isPending ? 'Enviando' : 'Publicar'}
          disabled={isPending}
          onPress={onSubmitPost}
        />
      </View>
      {isPending && <ActivityIndicatorComponent />}
    </KeyboardAwareScrollView>
  </ContainerHome>
);

export default PostView;
