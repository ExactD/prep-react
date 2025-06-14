import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StartPage from './components/StartPage';
import TestSelection from './components/TestSelection';
import Test from './components/Test';
import './startsstyle.css';
import ProtectedRoute from './components/ProtectedRoute';
import { TestIdProvider } from './components/TestIdContext';

interface AppState {
  isLoading: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  simulatePageLoad = (duration: number = 800) => {
    this.setState({ isLoading: true });
    
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, duration);
  }

  componentDidMount() {
    this.simulatePageLoad(600);
    window.addEventListener('popstate', this.handleBrowserNavigation);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handleBrowserNavigation);
  }

  handleBrowserNavigation = () => {
    this.simulatePageLoad(500);
  }

  renderLoadingScreen = () => (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p className="loading-text">Завантаження...</p>
    </div>
  )

  PageWrapper = ({ children }: { children: React.ReactNode }) => {
    React.useEffect(() => {
      this.simulatePageLoad(600);
    }, []);

    return (
      <div className="page-content">
        {children}
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Router>
        <div>
          {isLoading && this.renderLoadingScreen()}
          
          <Routes>
            <Route 
              path="/auth" 
              element={
                <this.PageWrapper>
                    <StartPage />
                </this.PageWrapper>
              } 
            />
             
            <Route 
              path="/tests" 
              element={
                <this.PageWrapper>
                  <TestIdProvider>
                    <TestSelection />
                  </TestIdProvider>
                </this.PageWrapper>
              } 
            />
            
            <Route 
              path="/test/math" 
              element={
                <this.PageWrapper>
                  <TestIdProvider>
                    <Test />
                  </TestIdProvider>
                </this.PageWrapper>
              } 
            />
            
            <Route path="*" element={<Navigate to="/tests" replace />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;