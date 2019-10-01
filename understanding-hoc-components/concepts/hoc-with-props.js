Alguns de nossos componentes precisam compartilhar essas informações e podemos criar um HOC
para transmiti-lo como um suporte para nossos componentes.

import React from 'react';

const withSecretToLife = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          secretToLife={42}
        />
      );
    }
  }
    
  return HOC;
};

export default withSecretToLife;

Observe que esse HOC é quase idêntico ao nosso padrão básico. 
Tudo o que fizemos foi adicionar um prop secretToLife = {42}, 
que permite que o componente agrupado acesse o valor chamando this.props.secretToLife.