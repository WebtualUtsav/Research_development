import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import Translate from './Translate';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Localization = () => {
  const [language, setLanguage] = useState('en'); // Default language is English

  useEffect(() => {
    // Load language preference from AsyncStorage on component mount
    retrieveLanguage();
  }, []);

  const retrieveLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage !== null) {
        setLanguage(savedLanguage);
        Translate.locale = savedLanguage;
      }
    } catch (error) {
      console.error('Error retrieving language:', error);
    }
  };
  console.log('Translate', Translate);

  const changeLanguage = async lang => {
    try {
      await AsyncStorage.setItem('language', lang);
      Translate.locale = lang;
      setLanguage(lang);
    } catch (error) {
      console.error('Error setting language:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{Translate.t('full_name')}</Text>
      <Text>{Translate.t('first_name')}</Text>
      <Button
        title="English"
        onPress={() => changeLanguage('en')}
        style={{marginVertical: 10}}
      />
      <Button title="Gujarati" onPress={() => changeLanguage('guj')} />
    </View>
  );
};

export default Localization;
