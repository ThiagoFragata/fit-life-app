import { ActivityIndicator, StyleSheet, View } from 'react-native';

import theme from '@/styles/theme';

export function ActivityIndicatorComponent() {
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" color={theme.colors.primary[500]} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutrals[50],
    opacity: 0.5,
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginHorizontal: 'auto',
    marginVertical: 'auto',
    width: '100%',
    height: '100%',
  },
});
