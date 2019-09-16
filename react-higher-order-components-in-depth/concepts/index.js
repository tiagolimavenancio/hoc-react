hocFactory:: W: React.Component => E: React.Component

Onde W (WrappedComponent) é o React.Component sendo empacotado e E (Enhanced Component) é o novo HOC, React.Component sendo retornado.

A parte "wraps" da definição é intencionalmente vaga, pois pode significar uma de duas coisas:

     * Proxy de adereços: o HOC manipula os adereços que estão sendo passados para o WrappedComponent W,
     * Inversão de herança: O HOC estende o WrappedComponent W.
     *  Reutilização de código, lógica e abstração de autoinicialização
     * Tornar Highjacking
     * Abstração e manipulação de estado
     * Manipulação de adereços 