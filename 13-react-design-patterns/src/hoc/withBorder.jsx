const withBorder =
  (Component) =>
  ({ color }) => {
    return (
      <div style={{ border: `2px solid ${color}` }}>
        <Component />
      </div>
    );
  };

export default withBorder;
