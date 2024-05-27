import { Text, TouchableOpacity, View } from 'react-native';

import { style as s } from '../styles/homeStyle';

import { Camera, Logo } from '@/assets';
import { ContainerHome } from '@/components/atoms/container-home';
import theme from '@/styles/theme';

interface HomeViewProps {
  onLogout: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onLogout }: HomeViewProps) => (
  <ContainerHome>
    <View style={s.header}>
      <Logo width={72} />
      <TouchableOpacity onPress={onLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Camera color={theme.colors.neutrals[900]} />
      </TouchableOpacity>
    </View>
  </ContainerHome>
);

export default HomeView;
