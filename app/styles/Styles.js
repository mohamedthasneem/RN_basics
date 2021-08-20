'use strict';

import { StyleSheet ,Dimensions,PixelRatio} from 'react-native';
import COLOR from './Color';

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  btn_tran: {
    padding: 5,
    height: 36,
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.PRIMARY,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 2,
    marginLeft: 5,
    marginTop: 5,
    alignSelf: "stretch",
    justifyContent: "center"
  },

  btn_tran_dis: {
    padding: 5,
    height: 36,
    backgroundColor: "#bababa",
    borderColor: COLOR.PRIMARY,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 2,
    marginLeft: 5,
    marginTop: 5,
    alignSelf: "stretch",
    justifyContent: "center"
  },

  btn_tran_txt: {
    fontSize: 14,
    color: COLOR.PRIMARY,
    //color:'#696969',
    alignSelf: "center",
    justifyContent: "flex-start"
  },

  btn_tran_txt_dis: {
    fontSize: 14,
    color: COLOR.WHITE,
    //color:'#696969',
    alignSelf: "center",
    justifyContent: "flex-start"
  },

  nav_container: {
    flex: 2,
    flexDirection: "row",
    padding: 5,
    justifyContent: "flex-end",
    marginRight: 20
  },

  title: {
    color: "#696969",
    fontWeight: "bold",
    fontSize: 24,
    padding: 5,
    marginLeft: "2%"
  },

  mainScreenBox: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 20,
    marginRight: 20
  },

  textitem: {
    color: "#696969",
    fontSize: 17,
    padding: 10
  },

  picker_Style: {
    borderColor: COLOR.PRIMARY,
    borderWidth: 2,
    flex: 1,
    height: 50,
    justifyContent: "center",
    borderRadius: 8
  },

  txtinput: {
    borderColor: COLOR.PRIMARY,
    color: "#696969",
    borderWidth: 2,
    flex: 1,
    height: 50,
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10
  },
  txtinput_date: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10
  },
  btncontainer: {
    flexDirection: "row",
    marginBottom: "4%",
    marginRight: "2%",
    justifyContent: "flex-end"
  },
  searchbar: {
    marginTop: "-4%",
    padding: 10,
    paddingBottom: 20
  },
  topbox: {
    marginBottom: "1%",
    borderRadius: 8,
    margin: "1%"
  },
  MainContainer: {
    flex: 1
  },
  textbox1: {
    borderWidth: 2,
    borderColor: COLOR.PRIMARY,
    borderRadius: 8,
    height: 50,
    // marginTop: "2%",
    marginBottom:'1%',
    marginLeft: "5%",
  },
  textbox2: {
    borderWidth: 2,
    borderColor: COLOR.PRIMARY,
    borderRadius: 8,
    height: 50,
    // marginTop: "2%",
    marginBottom:'1%',
    marginLeft: "5%"
  },
  miniAdBox: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: "1%",
    marginTop: "1%",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  miniAdBoxRow: {
    flex: 1
    // flexDirection:'row'
  },
  topAdBox: {
    marginBottom: "5%"
  },
  AdView: {
    padding: "3%"
  },
  AdViewSub: {
    paddingHorizontal: "6%",
    paddingTop: "1%"
  },
  GoToRegPge: {
    flexDirection: "row"
  },
  ClickYes: {
    flexDirection: "row"
  },
  icon: {
    fontSize: 25,
    padding: 13,
    marginLeft: -50
  },

  // will change ASAP
  SaleCattleMainContainer: {
    flex: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  totalcontainer: {
    width: Dimensions.get("window").width
  },
  topText: {
    fontSize: 25,
    padding: 10,
    fontWeight: "bold"
  },
  textbox: {
    borderWidth: 2,
    borderColor: COLOR.PRIMARY,
    borderRadius: 8,
    height: 50,
    textAlignVertical: "auto",
    marginLeft: "2%",
    width: Dimensions.get("window").width - 40
    //marginRight: '-205%'
  },
  checkbox: {
    padding: 50
  },

  btn: {
    padding: 20,
    height: 30,
    backgroundColor: COLOR.PRIMARY,
    borderColor: COLOR.PRIMARY,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: "1%",
    marginTop: "2%",
    marginLeft: "2%",
    width: Dimensions.get("window").width - 40,
    //marginRight: '-65%',
    alignSelf: "stretch",
    justifyContent: "center"
  },

  // buttonText: {
  //     fontSize: 20,
  //     color: COLOR.WHITE,
  //     alignSelf: 'center',
  //     justifyContent: 'flex-start',

  // },
  // buttonText1: {
  //     fontSize: 20,
  //     color: COLOR.PRIMARY,
  //     alignSelf: 'stretch',
  //     textAlign:'right',
  //     justifyContent: 'space-evenly',

  // },
  pickerStyle: {
    borderWidth: 2,
    borderColor: COLOR.PRIMARY,
    // marginLeft:'1%',
    borderRadius: 8
  },
  pickerTotal: {
    marginTop: "-3%",
    marginBottom: "-3%",
    padding: 20,
    width: Dimensions.get("window").width,
    marginLeft: "-1%"
    //marginRight: '-68%'
  },

  cardcontiner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  cardcontinerSub: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  ad_box: {},
  AdTotal: {
    flex: 1,
    marginBottom: "-4%",
    justifyContent: "flex-start"
  },
  buttonText1: {
    fontSize: 12,
    color: "#696969",
    alignSelf: "flex-start",
    justifyContent: "flex-start"
  },
  buttonText: {
    color: "#696969",
    fontSize: 12,
    alignSelf: "flex-start",
    justifyContent: "flex-start"
  },
  cardView: {
    flex: 1,
    // flexDirection: "row",
    padding: "3%",
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: "2%",
    marginTop: "1%",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  cardViewMyAd: {
    flex: 1,
    padding: "3%",
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: "2%",
    marginTop: "1%",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  cardViewSub: {
    flex: 1,
    flexDirection: "row",
    padding: "3%",
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: "3%",
    alignSelf: "stretch",
    justifyContent: "center"
  },
    cardView_test: {
    flex: 1,
    flexDirection: "row",
    padding: "3%",
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 3,
    borderRadius: 30,
    marginTop: "12%",
    marginBottom:"5%",
    alignSelf: "center",
    position: "absolute",
    width: "95%",
    height: "70%",
  },
  txtinput_test: {
    borderColor: COLOR.PRIMARY,
    color: "#696969",
    borderWidth: 2,
    flex: 1,
    height: 50,
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10
  },
  other: {
    padding: 25,
    backgroundColor: "#ffffff"
  },

  AllBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 8,
    height: 50
  },
  AllBtn1: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.PRIMARY,
    paddingVertical: 20,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderRadius: 8,
    height: 50
  },
  btn_txt: {
    fontSize: 20,
    color: COLOR.WHITE,
    alignSelf: "center",
    fontWeight: "bold"
  },
  btn_txt1: {
    fontSize: 20,
    color: COLOR.PRIMARY,
    alignSelf: "center",
    fontWeight: "bold"
  },
  btn_txt_ai: {
    fontSize: 15,
    color: COLOR.WHITE,
    alignSelf: "center",
    fontWeight: "bold"
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    // backgroundColor:'rgba(255, 114, 57, 0.1)',
    opacity: 1
  },

  // profile
  header: {
    backgroundColor: COLOR.PRIMARY,
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  avatar_ad: {
    width: 60,
    height: 60,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 20
  },
    avatar_main: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    marginBottom: 10,
    position: "absolute",
    marginTop: -40
  },
  // name: {
  //     fontSize: 22,
  //     color: "#FFFFFF",
  //     fontWeight: '600',
  // },
  body: {
    marginTop: "6%"
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: COLOR.PRIMARY,
    marginTop: "2%",
    marginBottom: "5%"
  },
  description: {
    fontSize: 14,
    color: "#696969",
    marginTop: 10
  },

  //
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover" // or 'stretch'
  },
  loginForm: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  sideMenuContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: "10%"
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 150,
    height: 150,
    marginTop: "5%",
    marginLeft: "25%",
    marginBottom: "5%",
    borderRadius: 150 / 2
  },
  footerContainer: {
    padding: 10,
    alignItems: "flex-start"
  },

  imageStyle: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    // width: '100%',
    // height: '100%',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    opacity: 0.4,
    flexDirection: "column"
  },
  labal_sold: {
    transform: [{ rotate: "-45deg" }],
    color: "red",
    alignSelf: "flex-start",
    marginTop: 30,
    fontSize: 12,
    fontWeight: "bold"
  },
  labal_avi: {
    transform: [{ rotate: "-45deg" }],
    color: "green",
    alignSelf: "flex-start",
    marginTop: 30,
    fontSize: 12,
    fontWeight: "bold"
  },
  labal_pand: {
    transform: [{ rotate: "-45deg" }],
    color: "orange",
    alignSelf: "flex-start",
    marginTop: 30,
    fontSize: 12,
    fontWeight: "bold"
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicatorWrapper: {
    // backgroundColor: '#FFFFFF',
    backgroundColor: "#00000050",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  radio_btn: {
    paddingTop: "1%",
    paddingLeft: "5%"
  },
  offlineContainer: {
    backgroundColor: "#b52424",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width,
    position: "relative"
  },
  offlineText: {
    color: "#fff",
    fontWeight: "bold"
  },
  ImageContainer: {
    borderRadius: 10,
    width: 200,
    height: 150,
    borderColor: "#9B9B9B",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffae19"
  },
  ImageContainerView: {
    borderRadius: 10,
    // marginTop:'-20%',
    width: 120,
    height: 120,
    borderColor: "#9B9B9B",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffae19"
  },

  ImageContainerView_ad_view: {
    borderRadius: 10,
    // marginTop:'-20%',
    marginLeft: 20,
    marginBottom:10,
    width: 120,
    height: 120,
    borderColor: "#9B9B9B",
    borderWidth: 1 / PixelRatio.get(),
    // resizeMode: 'stretch',
    resizeMode: 'cover',
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#ffae19"
  },

  container_map: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  map: {
    // position: 'absolute',
    top: 0,
    height: 250,
    width: '85%',
    // width: width * (4 / 5),
    marginTop: "2%",
    marginBottom: "2%",
    left: 0,
    right: 0,
    bottom: 0
  },
  footer: {
    width,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});