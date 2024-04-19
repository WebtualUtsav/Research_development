import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  TextInput,
  Searchbar,
  Switch,
  Snackbar,
  Button,
} from 'react-native-paper';

export default function ScreenOne() {
  const [text, setText] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={{flex: 1, paddingHorizontal: 20, marginTop: 30}}>
      <TextInput
        mode="outlined"
        label="Email"
        value={text}
        outlineColor="black"
        onChangeText={text => setText(text)}
        style={{}}
      />
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{backgroundColor: 'white', marginVertical: 30}}
      />

      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

      <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={700}

        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({});
