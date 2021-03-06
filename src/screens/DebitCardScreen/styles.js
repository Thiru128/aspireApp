import {StyleSheet} from 'react-native';
import {colors} from '../../constants/index';

export const styles = StyleSheet.create({
  safeAreaContainer: {flex: 1, backgroundColor: colors.appBgBlue},
  container: {flex: 1, justifyContent: 'space-between'},
  topContainer: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {fontSize: 24, fontWeight: 'bold', color: 'white', marginTop: 20},
  logo: {height: 25, width: 25, alignSelf: 'center', marginTop: -10},
  dollar: {
    backgroundColor: colors.appGreen,
    alignSelf: 'center',
    textAlign: 'center',
    width: 40,
    height: 22,
    fontSize: 15,
    fontWeight: '800',
    color: 'white',
    borderRadius: 5,
  },
  availableBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginLeft: 10,
  },
  hideContainer: {
    top: '23%',
    right: 21,
    backgroundColor: 'white',
    minWidth: '40%',
    height: 40,
    zIndex: 10,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  visible: {height: 16, width: 26, alignSelf: 'center'},
  hideText: {fontSize: 12, fontWeight: 'bold', color: colors.appGreen},
  bottomContainer: {
    height: '60%',
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: 'white',
  },
  cardContainer: {
    backgroundColor: colors.appGreen,
    minHeight: '25%',
    width: '90%',
    zIndex: 15,
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  cardLogo: {height: 21, width: 74, alignSelf: 'flex-end'},
  nameText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    paddingVertical: 10,
  },
  cardNumber: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
    paddingVertical: 10,
  },
  cardValidContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
  cardType: {
    height: 20,
    width: 69,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  limitContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  limitdetail: {flexDirection: 'row', width: '80%', marginTop: 10},
  limitDetailContainer: {marginStart: 10, width: '90%'},
  limitIcon: {height: 32, width: 32, alignSelf: 'center'},
  limitText: {
    fontWeight: '600',
    color: colors.appText,
    fontSize: 14,
  },
  limitDesText: {
    fontWeight: '400',
    color: colors.appBlackText,
    fontSize: 13,
  },
});
