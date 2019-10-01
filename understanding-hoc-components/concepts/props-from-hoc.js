
A outra adição é que distribuímos os adereços passados para o componente. 
Isso garante que quaisquer outros objetos que são passados para o componente 
agrupado sejam acessíveis por this.props da mesma maneira que seriam chamados 
se o componente não fosse passado por nossa função de componente de ordem superior.

import React from 'react';
import withSecretToLife from 'components/withSecretToLife';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}.
  </div>
);

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent;

Nosso WrappedComponent, que é apenas uma versão aprimorada de <DisplayTheSecret />, 
nos permitirá acessar secretToLife como suporte.