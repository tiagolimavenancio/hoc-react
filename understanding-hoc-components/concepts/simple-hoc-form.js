Um higherOrderComponent é uma função que pega um componente como 
argumento e retorna um componente. Isso significa que um HOC sempre terá um 
formato semelhante ao seguinte:

import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
    
  return HOC;
};


O higherOrderComponent é uma função que usa um componente chamado 
WrappedComponent como argumento. Criamos um novo componente 
chamado HOC que retorna o <WrappedComponent /> de sua função de renderização. 
Embora isso realmente não adicione funcionalidade no exemplo trivial, ele descreve
o padrão comum que todas as funções HOC seguirão. Podemos chamar o HOC da seguinte maneira:

const SimpleHOC = higherOrderComponent(MyComponent);