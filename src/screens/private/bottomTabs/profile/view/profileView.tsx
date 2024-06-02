import { Text, TouchableOpacity, View } from 'react-native';

import { style as s } from '../styles/profileStyle';

import { LogOut } from '@/assets';
import { ContainerHome } from '@/components/atoms/container-home';
import theme from '@/styles/theme';

interface ProfileViewProps {}

const ProfileView: React.FC<ProfileViewProps> = () => (
  <ContainerHome>
    <View style={s.header}>
      <TouchableOpacity>
        <LogOut color={theme.colors.neutrals[900]} />
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  </ContainerHome>
);

export default ProfileView;
