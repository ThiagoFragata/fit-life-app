import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import theme from '@/styles/theme';

export function Container({ children }: { children: ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[style.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: RFValue(16),
  },
});
