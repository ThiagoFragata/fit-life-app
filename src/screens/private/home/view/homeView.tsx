import { Text, TouchableOpacity, View } from 'react-native';

import { style as s } from '../styles/homeStyle';

import { LogOut, Logo } from '@/assets';
import { ContainerHome } from '@/components/atoms/container-home';
import theme from '@/styles/theme';

interface HomeViewProps {
  handleLogout: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ handleLogout }: HomeViewProps) => (
  <ContainerHome>
    <View style={s.header}>
      <Logo width={72} />
      <TouchableOpacity onPress={handleLogout}>
        <LogOut color={theme.colors.neutrals[900]} />
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  </ContainerHome>
);

export default HomeView;
