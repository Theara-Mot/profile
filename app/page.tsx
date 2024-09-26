"use client";  
export default function Home() {
  const shutdownComputer = () => {
    alert("Shutting down... Just kidding!");
    // Real shutdown logic can't be done via a browser.
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Your PC</h1>
        <p style={{ fontSize: "20px", marginBottom: "40px" }}>Have been hacked</p>
        <button
          onClick={shutdownComputer}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            color: "white",
            backgroundColor: "#ff4e50",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Shut down computer now
        </button>
      </div>
    </div>
  );
}
