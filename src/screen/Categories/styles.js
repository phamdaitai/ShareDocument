import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewCover: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    width: '88%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    borderColor: 'green',
    },
    imageLesson: {
        height: 30,
        width: 30,
      marginRight: 10,
        borderRadius: 30,
  },
  textNameLesson: {
    fontSize: 18,
    maxWidth: '88%',
    fontWeight: '600',
    fontFamily: 'ComicSansMS',
    color: '#560d00',
  }
});

export default styles;
