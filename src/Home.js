// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Platform,
// } from 'react-native';
// import React, {useState, useEffect, useRef} from 'react';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {
//   pixelSizeHorizontal,
//   pixelSizeVertical,
//   heightPixel,
// } from '../components/ResponsiveScreen';
// import {Colors} from '../constants/Colors';
// import {FontSize, Fonts} from '../constants/Fonts';
// import CustomButton from '../components/commonComponents/CustomeButton';
// import GlobalStyles from '../styles/GlobalStyles';
// import {navigate, resetScreen} from '../navigations/RootNavigation';
// import {ApiUri} from '../constants/ApiUri';
// import ApiManager from '../components/ApiManager';
// import {storeRegisteInfo, storeUserData} from '../redux/reducers/userReducer';
// import {BEARER_TOKEN, FCM_TOKEN, USER_DATA} from '../constants/ConstantKey';
// import {useDispatch} from 'react-redux';
// import {getData, storeData} from '../components/AsyncManager';
// import {ALERT_TYPE, Dialog, Toast} from 'react-native-alert-notification';
// import LoadingView from '../components/commonComponents/LoadingView';

// export default function Home({route}) {
//   const dispatch = useDispatch();

//   const [optcode, setOptcode] = useState();
//   const [count, setCount] = useState(60);
//   const [isLoading, setIsLoading] = useState(false);
//   const [Userdata, setUserdata] = useState(route.params.data);
//   const [fcm_token, setFcmToken] = useState('');
//   const [isResendCode, setIsResendCode] = useState(true);
//   const [otp, setOtp] = useState('1234');
//   const [orderId, setOrderId] = useState('');
//   // var orderId;
//   console.log('🚀 ~ OtpView ~ orderId:', orderId);
//   const timerRef = useRef(count);
//   var timerId;

//   useEffect(() => {
//     GetFCM_TOKEN();
//     if(!__DEV__){
//       Api_Otp(true);
//     }
//   }, []);

//   const GetFCM_TOKEN = () => {
//     getData(FCM_TOKEN, data => {
//       setFcmToken(data);
//     });
//   };

//   const Api_Otp = isLoad => {
//     setIsLoading(isLoad);
//     ApiManager.post(ApiUri.SEND_OTP_V1, {
//       mobile_number: route.params.data.mobile,
//     })
//       .then(response => {
//         console.log('api otp ', response.data);
//         setIsLoading(false);

//         var data = response.data;
//         if (data.status == true) {
//           console.log(' otp', data);
//           // setOtp(data.data.otp_val);
//           setOrderId(data.data.orderId);
//           // orderId=data.data.orderId;
//           setCount(60);
//           timerRef.current = 60;
//           setIsResendCode(false);
//           timerId = setInterval(() => {
//             timerRef.current -= 1;
//             if (timerRef.current < 0) {
//               clearInterval(timerId);
//               setIsResendCode(true);
//               clearTimer();
//             } else {
//               setCount(timerRef.current);
//             }
//           }, 1000);
//         } else {
//           Dialog.show({
//             type: ALERT_TYPE.DANGER,
//             title: 'Alert',
//             textBody: data.message,
//             button: 'Ok',
//           });
//         }
//       })
//       .catch(err => {
//         setIsLoading(false);
//         console.error('Api_Otp Error ', err);
//       });
//   };

//   const Api_Resend_Otp = isLoad => {
//     setIsLoading(isLoad);
//     ApiManager.post(ApiUri.RESEND_OTP, {
//       orderId: orderId,
//     })
//       .then(response => {
//         setIsLoading(false);
//         console.log('api resend otp ', response);
//         var data = response.data;
//         if (data.status == true) {
//           console.log('resend otp', data);
//           // setOtp(data.data.otp_val);
//           setOrderId(data.data.orderId);
//           // orderId=data.data.orderId;
//           setCount(60);
//           timerRef.current = 60;
//           setIsResendCode(false);
//           timerId = setInterval(() => {
//             timerRef.current -= 1;

//             if (timerRef.current < 0) {
//               clearInterval(timerId);
//               setIsResendCode(true);
//               clearTimer();
//             } else {
//               setCount(timerRef.current);
//             }
//           }, 1000);
//         } else {
//           Dialog.show({
//             type: ALERT_TYPE.DANGER,
//             title: 'Alert',
//             textBody: data.message,
//             button: 'Ok',
//           });
//         }
//       })
//       .catch(err => {
//         setIsLoading(false);
//         console.error('Api_Resend_Otp Error ', err);
//       });
//   };

//   const Api_Login = (isLoad, data) => {
//     setIsLoading(isLoad);
//     ApiManager.post(ApiUri.LOGIN, {
//       mobile_number: data.mobile,
//       device_id: fcm_token || '1234',
//       device_type: Platform.OS === 'android' ? 1 : 0,
//       user_latitude: 23.1022693,
//       user_longitude: 72.5411829,
//       user_google_address: 'Gota, Ahmedabad',
//     })
//       .then(response => {
//         setIsLoading(false);

//         var data = response.data;
//         if (data.status == true) {
//           var user_data = data.data;

//           storeData(USER_DATA, user_data, () => {
//             storeData(BEARER_TOKEN, user_data.token);
//             dispatch(storeUserData(user_data));
//             resetScreen('Dashboard');
//           });
//         } else {
//           Dialog.show({
//             type: ALERT_TYPE.DANGER,
//             title: 'Alert',
//             textBody: data.message,
//             button: 'Ok',
//           });
//         }
//       })
//       .catch(err => {
//         setIsLoading(false);
//         console.error('Api_login Error ', err);
//       });
//   };

//   const Api_Verify_Otp = (isLoad, data) => {
//     setIsLoading(isLoad);
//     ApiManager.post(ApiUri.VERIFY_OTP, {
//       orderId: orderId,
//       otp: optcode,
//       phoneNumber: data.mobile,
//     })
//       .then(response => {
//         console.log('response', response.data);
//         setIsLoading(false);
//         var data = response.data;
//         if (data.status == true) {
//           if (data.is_register == 1) {
//             setOptcode('');
//             navigate('Register', {mobile: Userdata});
//           } else if (data.is_register == 2) {
//             setOptcode('');
//             Api_Login(true, Userdata);
//           } else if (data.is_register == 3) {
//             Dialog.show({
//               type: ALERT_TYPE.DANGER,
//               title: 'Alert',
//               textBody: data.message,
//               button: 'Ok',
//             });
//           } else {
//             Dialog.show({
//               type: ALERT_TYPE.DANGER,
//               title: 'Alert',
//               textBody: 'Something went wrong.!!',
//               button: 'Ok',
//             });
//           }
//         } else {
//           Dialog.show({
//             type: ALERT_TYPE.DANGER,
//             title: 'Alert',
//             textBody: data.message,
//             button: 'Ok',
//           });
//         }
//       })
//       .catch(err => {
//         setIsLoading(false);
//         console.error('Api_Verify_Otp Error ', err);
//       });
//   };

//   const Api_Check_mobile = (isLoad, data) => {
//     setIsLoading(isLoad);
//     ApiManager.post(ApiUri.CHECK_MOBILE, {
//       mobile_number: data.mobile,
//     })
//       .then(response => {
//         setIsLoading(false);

//         if (response.data.status == true) {
//           setOptcode('');
//           Api_Login(true, Userdata);
//         } else {
//           setOptcode('');
//           navigate('Register', {mobile: Userdata});
//         }
//       })
//       .catch(err => {
//         setIsLoading(false);
//         console.error('Api_Check_mobile Error ', err);
//       });
//   };

//   const btnSubmitTap = async () => {
//     if (optcode.length == 4) {
//       if (otp == optcode) {
//         Api_Check_mobile(true, Userdata);
//       } else {
//         Dialog.show({
//           type: ALERT_TYPE.DANGER,
//           title: 'Alert',
//           textBody: 'Please Enter Valid OTP',
//           button: 'Ok',
//         });
//         // AlertActive()
//       }
//     } else {
//       Dialog.show({
//         type: ALERT_TYPE.DANGER,
//         title: 'Alert',
//         textBody: 'Please Enter OTP',
//         button: 'Ok',
//       });
//       // AlertActiveSecond()
//     }
//   };

//   const btnResendTap = () => {
//     Api_Resend_Otp(true);
//     setOptcode('');
//   };

//   const clearTimer = () => {
//     for (var i = 0; i < 10000; i++) {
//       clearInterval(i);
//     }
//   };

//   return (
//     <KeyboardAwareScrollView
//       contentContainerStyle={{
//         paddingHorizontal: pixelSizeHorizontal(20),
//         backgroundColor: Colors.white,
//         flexGrow: 1,
//       }}>
//       <Text
//         style={[GlobalStyles.headerText, {marginTop: pixelSizeVertical(70)}]}>
//         OTP Verification
//       </Text>
//       <Text
//         style={[
//           GlobalStyles.subHeaderText,
//           {marginVertical: pixelSizeVertical(10)},
//         ]}>
//         An OTP code has been{'\n'}sent to +91{route.params.data.mobile}
//       </Text>
//       <OTPInputView
//         style={{
//           height: heightPixel(48),
//           marginTop: pixelSizeHorizontal(65),
//           marginBottom: pixelSizeHorizontal(15),
//         }}
//         pinCount={4}
//         code={optcode}
//         autoFocusOnLoad={false}
//         onCodeChanged={code => {
//           setOptcode(code);
//         }}
//         codeInputFieldStyle={styles.borderStyleBase}
//         codeInputHighlightStyle={{
//           borderColor: Colors.primary,
//           fontSize: FontSize.FS_22,
//           height: heightPixel(60),
//           width: heightPixel(60),
//           fontFamily: Fonts.REGULAR,
//           color: Colors.black,
//         }}
//       />
//       <CustomButton
//         style={{marginTop: pixelSizeVertical(40)}}
//         title={'VERIFY OTP'}
//         onPress={() => {
//           if (__DEV__) { 
//             btnSubmitTap();
//           } else {
//             Api_Verify_Otp(true, Userdata);
//           }
//           // navigate('ProfileDetails');
//         }}
//       />

//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <Text
//           style={{
//             fontFamily: Fonts.MEDIUM,
//             fontSize: FontSize.FS_16,
//             color: Colors.coffee_01,
//           }}>
//           Don't received OTP ?
//         </Text>
//         {isResendCode ? (
//           <TouchableOpacity
//             onPress={() => {
//               btnResendTap();
//             }}>
//             <Text style={styles.registerText}>Resend OTP</Text>
//           </TouchableOpacity>
//         ) : (
//           <Text style={styles.registerText}>Resend OTP in 00:{count}</Text>
//         )}
//       </View>
//       {isLoading && <LoadingView />}
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   borderStyleBase: {
//     borderWidth: 2,
//     borderColor: Colors.lightbg,
//     height: heightPixel(60),
//     width: heightPixel(60),
//     fontSize: FontSize.FS_22,
//     fontFamily: Fonts.REGULAR,
//     borderRadius: 30,
//     color: Colors.black,
//     backgroundColor: Colors.lightbg,
//     marginHorizontal: 5,
//   },
//   borderStyleHighLighted: {
//     borderColor: Colors.primary,
//     fontSize: FontSize.FS_22,
//     height: heightPixel(60),
//     width: heightPixel(60),
//     fontFamily: Fonts.REGULAR,
//     color: Colors.black,
//   },
//   registerText: {
//     fontFamily: Fonts.SEMIBOLD,
//     fontSize: FontSize.FS_16,
//     color: Colors.coffee_02,
//     marginLeft: 5,
//   },
// });
