import styled from 'styled-components';
import { Header } from './components/header';

const PageWrapper = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <PageWrapper>
      <Header />
    </PageWrapper>
  )
}

export default App
