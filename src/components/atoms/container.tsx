import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EllipseCoral, EllipseCyan } from '@/assets';
import theme from '@/styles/theme';

export function Container({ children }: { children: ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[style.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <EllipseCoral
        style={{
          position: 'absolute',
          top: 0,
          zIndex: -10,
        }}
      />
      {children}
      <EllipseCyan
        style={{
          position: 'absolute',
          bottom: 0,
          zIndex: -10,
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutrals[50],
    paddingHorizontal: RFValue(16),
  },
});
