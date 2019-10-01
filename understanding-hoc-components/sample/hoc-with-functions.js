import React from 'react';
import withStorage from 'components/withStorage';

class ComponentNeedingStorage extends React.Component {
  state = {
    username: '',
    favoriteMovie: '',
  }

  componentDidMount() {
    const username = this.props.load('username');
    const favoriteMovie = this.props.load('favoriteMovie');
    
    if (!username || !favoriteMovie) {
      // This will come from the parent component
      // and would be passed when we spread props {...this.props}
      this.props.reallyLongApiCall()
        .then((user) => {
          this.props.save('username', user.username) || '';
          this.props.save('favoriteMovie', user.favoriteMovie) || '';
          this.setState({
            username: user.username,
            favoriteMovie: user.favoriteMovie,
          });
        }); 
    } else {
      this.setState({ username, favoriteMovie })
    }
  }

  render() {
    const { username, favoriteMovie } = this.state;
    
    if (!username || !favoriteMovie) {
      return <div>Loading...</div>; 
    }
    
    return (
      <div>
        My username is {username}, and I love to watch {favoriteMovie}.
      </div>
    )
  }
}

const WrappedComponent = withStorage(ComponentNeedingStorage);

export default WrappedComponent;

Dentro do componentDidMount do nosso componente agrupado, 
primeiro tentamos acessar o nome de usuário e o favoriteMovie em localStorage. 
Se os valores não existirem, fazemos nossa chamada de API cara chamada 
this.props.reallyLongApiCall. Quando essa função retornar, 
salvamos o nome de usuário e o favorito em localStorage e 
atualizamos o estado do componente para exibi-los na tela.