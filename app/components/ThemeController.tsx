import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, IconButton, Menu } from 'react-native-paper';

import * as themeActions from 'app/store/actions/themeActions';
import { IThemeState } from 'app/models/reducers/theme';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  themeReducer: IThemeState;
}

const ThemeController: React.FC = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);

  const dispatch = useDispatch();
  const onToggleTheme = () => dispatch(themeActions.setIsDarkTheme(!isDark));
  const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
  const iconColor = isDark ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Switch value={isDark} onValueChange={onToggleTheme} />
      <Icon name={iconName} size={20} style={styles.icon} color={iconColor} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="menu" onPress={openMenu} />}>
        <Menu.Item
          onPress={() => NavigationService.navigate('Account')}
          title="My Account"
        />
        <Menu.Item
          onPress={() => NavigationService.navigate('Upload')}
          title="Upload Art"
        />

        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 12,
  },
  icon: { marginLeft: 4 },
});

export default ThemeController;
