import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Post, Posts } from '../models/homeModel';
import { style as s } from '../styles/homeStyle';

import { LogOut, Logo } from '@/assets';
import { ContainerHome } from '@/components/atoms/container-home';
import theme from '@/styles/theme';

interface HomeViewProps {
  handleLogout: () => void;
  refetch: () => void;
  data: Posts;
  isLoading: boolean;
  isRefetching: boolean;
}

const listItems = ({ item }: { item: Post }) => (
  <View style={s.listContainer}>
    <Image source={{ uri: item.photo }} style={s.imageContent} />
    <View style={s.listContent}>
      <View style={s.titleAndDescriptionView}>
        <Text style={s.title}>{item.title}</Text>
        <Text style={s.description}>{item.description}</Text>
      </View>
    </View>
  </View>
);

const listHeader = () => (
  <View style={{ padding: 16, backgroundColor: 'lightgray' }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
      Aqui vai ficar os stories na horizontal
    </Text>
  </View>
);

const HomeView: React.FC<HomeViewProps> = ({
  handleLogout,
  data,
  isLoading,
  isRefetching,
  refetch,
}: HomeViewProps) => (
  <ContainerHome>
    <View style={s.header}>
      <Logo width={72} />
      <TouchableOpacity onPress={handleLogout}>
        <LogOut color={theme.colors.neutrals[900]} />
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
    {isLoading ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.primary[500]} />
      </View>
    ) : (
      <FlatList
        data={data.reverse()}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={listItems}
        ListHeaderComponent={listHeader}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      />
    )}
  </ContainerHome>
);

export default HomeView;
