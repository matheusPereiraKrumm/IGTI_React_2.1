function month(monthId) {
  switch (monthId) {
    case 1:
      return 'Jan';
    case 2:
      return 'Fev';
    case 3:
      return 'Mar';
    case 4:
      return 'Abr';
    case 5:
      return 'Mai';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Ago';
    case 9:
      return 'Set';
    case 10:
      return 'Out';
    case 11:
      return 'Nov';
    case 12:
      return 'Dez';
    default:
      return 'NULL';
  }
}

export default function ReportInvestment({
  diffPercent = 0,
  children: report,
}) {
  let diffClass = '';
  if (diffPercent > 0) diffClass = 'text-green-500';
  if (diffPercent < 0) diffClass = 'text-red-500';

  return (
    <div className="border-b m-2 space-x-2 flex">
      <span>{`${month(report.month)}/${report.year}`}</span>
      <span className={`font-semibold ${diffClass} flex-1`}>
        R$ {report.value.toFixed(2)}
      </span>
      <span className={`font-semibold ${diffClass} ml-auto`}>
        {diffPercent.toFixed(2)}%
      </span>
    </div>
  );
}
