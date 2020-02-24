import React from "react";


export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Upps something went, try again or contact support</h1>;
    }

    return this.props.children;
  }
}
