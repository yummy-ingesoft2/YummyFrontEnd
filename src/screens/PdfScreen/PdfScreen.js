
class PdfScreen extends Component {
  static navigationOptions = {
    title: 'Pdf'
  };

  render() {
    const source = require('./malla.pdf');

    return <Pdf source={source} style={styles.pdf}/>;
  }
}

const styles = StyleSheet.create({
  pdf: {
      flex: 1,
      width: Dimensions.get('window').width,
  }
});
