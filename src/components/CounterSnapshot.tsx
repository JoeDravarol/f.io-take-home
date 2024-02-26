type CounterSnapshotProps = {
  label: string;
  value: number;
};

const CounterSnapshot = ({ label, value }: CounterSnapshotProps) => {
  return (
    <div className="counter-snapshot">
      <span>{label}</span>
      <span className="counter-snapshot_value">{value}</span>
    </div>
  );
};

export default CounterSnapshot;
