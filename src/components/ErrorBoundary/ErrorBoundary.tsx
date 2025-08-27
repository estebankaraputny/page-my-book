// import React, { ReactNode } from "react";

// interface ErrorBoundaryProps {
//   children?: ReactNode;
// }

// class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error: any, errorInfo: any) {
//     console.error("Error capturado:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Ocurrió un error. Intenta recargar 🔄</h2>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
