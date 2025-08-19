<input
  type="checkbox"
  className="form-check-input"
  id="acceptPolitique"
  checked={acceptPolitique}
  onChange={() => setAcceptPolitique(!acceptPolitique)}
  style={{
    backgroundColor: acceptPolitique
      ? darkMode
        ? "#6c757d"
        : "#0d6efd"
      : "transparent",
    borderColor: darkMode ? "#6c757d" : "#000000ff",
    transform: "scale(0.6)",
  }}
/>;
