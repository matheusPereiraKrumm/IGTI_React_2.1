import ReportInvestment from './ReportInvestment';

export default function ReportInvestments({
  children: filteredReports = [],
  investment = 'Investimento',
}) {
  const sortReport = filteredReports.sort((r1, r2) => {
    const sortYear = r1.year - r2.year;
    if (sortYear !== 0) return sortYear;
    return r1.month - r2.month;
  });
  const firstReport = sortReport[0];
  const lastReport = sortReport[sortReport.length - 1];
  const diffYear = lastReport.value - firstReport.value;
  const diffYearPercent = (diffYear / firstReport.value) * 100;
  const formatYearDiff = `R$ ${diffYear.toFixed(2)} (${diffYearPercent.toFixed(
    2
  )}%)`;
  let diffYearClass = '';
  if (diffYear > 0) diffYearClass = 'text-green-500';
  if (diffYear < 0) diffYearClass = 'text-red-500';

  function buildReports(reports) {
    return sortReport.map((report, index, array) => {
      let diff = 0,
        diffPercent = 0;
      if (index > 0) {
        diff = report.value - array[index - 1].value;
        diffPercent = (diff / array[index - 1].value) * 100;
      }
      return (
        <ReportInvestment key={report.id} diffPercent={diffPercent}>
          {report}
        </ReportInvestment>
      );
    });
  }
  return (
    <div className="border m-2 space-y-2">
      <h1 className="text-center font-semibold text-xl">{investment}</h1>
      <h2 className="text-center font-semibold text-md">
        Rendimento total:{' '}
        {<span className={diffYearClass}>{formatYearDiff}</span>}
      </h2>
      {buildReports()}
    </div>
  );
}
