import withNetInfo from '../WithNetInfo'

class MyComponent extends Component {
    render() {
      const { isConnected } = this.props;
  
      return(
        <View>
          <Text>
            {`Am I connected? ${isConnected}`}
          </Text>
        </View>
      );
    }
  }
  
  export default withNetInfo(MyComponent);