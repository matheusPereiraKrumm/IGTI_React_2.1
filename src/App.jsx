import Header from './components/Header';
import Main from './components/Main';
import ReportInvestments from './components/ReportInvestments';
import { investments, reports } from './data/investments';

export default function App() {
  return (
    <div>
      <Header>react-investment v1.0</Header>

      <Main>
        {investments.map(investment => {
          return (
            <ReportInvestments
              key={investment.id}
              investment={investment.description}
            >
              {reports.filter(r => r.investmentId === investment.id)}
            </ReportInvestments>
          );
        })}
      </Main>
    </div>
  );
}
