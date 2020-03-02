import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94D8DB',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  titleLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  container_signup_form: {
    flex: 1,
    backgroundColor: '#94D8DB'
  },
  inputContainer: {
    margin: 30
  },
  textInput: {
    height: 32,
    textAlign: 'center',
    color: '#333333',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    borderWidth: 0.9,
    borderBottomColor: '#111111',
    fontFamily: 'Arial-ItalicMT'
  },
  userPage: {
    color: 'yellow',
    fontSize: 30,
    flex: 2
  },
  modal: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
    borderRadius: 30
  },
  modalHeader: {
    fontSize: 30,
    paddingBottom: 20,

    alignSelf: 'center'
  },
  inputModalForm: {
    borderBottomColor: 'black',
    fontSize: 25,
    color: 'gray',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1
  },
  addItem: {
    fontSize: 20,
    color: 'white'
  },
  // modalButton: {
  //   fontSize: 20,
  //   color: 'white',
  //   borderBottomColor: 'black'
  // }
  button: {
    backgroundColor: 'lightpink',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 60,
    width: '40%',
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 7,
    top: '50%',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'relative'
  },

  modalButton: {
    backgroundColor: 'lightpink',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
    // width: '5%',
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
    alignSelf: 'center',
    top: '40%',
    position: 'relative'
  },

  back: {
    paddingTop: 30,
    fontSize: 15,
    color: 'black',
    top: '30%',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  card: {
    paddingBottom: 40
  },
  total: {
    fontSize: 19,
    marginBottom: 20,
    fontFamily: 'Palatino-Bold'
  },
  totalContainer: {
    flex: 3
  },

  login: {
    color: 'yellow',
    fontFamily: 'Palatino-Bold',
    alignSelf: 'center',
    fontSize: 20
  },

  name: {
    fontSize: 20,
    fontFamily: 'Palatino-Bold',
    top: '2%'
  },
  edit: {
    fontSize: 20,
    fontFamily: 'Palatino-Bold',
    top: '1%',
    alignSelf: 'center'
  },

  signOut: {
    fontSize: 15,
    fontFamily: 'Palatino-Bold',
    flexWrap: 'nowrap'
  },
  retake: {
    paddingBottom: '10%',
    paddingTop: '3%',
    fontSize: 20,
    fontFamily: 'Palatino-Bold',
    top: '2%',
    alignSelf: 'center',
    color: 'white'
  }
}));
