import React from 'react';

const Cloud = ({ category = "news" }) => {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        marginBottom: "20px"
      }}>
        <div style={{
          background:"#70028F", // Ribbon color
          color: "#fff",
          fontWeight: "bold",
          padding: "15px 40px",
          borderRadius: "5px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
          position: "relative",
          width: "100%",  // Make the width dynamic to adjust for screen sizes
          maxWidth: "1200px" // Set a maximum width to prevent it from becoming too wide on larger screens
        }}>
          {/* Ribbon Left Tail */}
          <div style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            width: "0",
            height: "0",
            borderTop: "10px solid transparent",
            borderRight: "20px solid #70028F",
            borderBottom: "10px solid transparent",
            transform: "translateY(-50%)"
          }}></div>

          <h2 style={{
            margin: 0,
            fontSize: "24px",
            textTransform: "uppercase"
          }}>
            📰 Top <span style={{ color: "#FE9900"}}>{category.toUpperCase()}</span> Headlines
          </h2>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            div > div {
              padding: 12px 30px;
            }
            h2 {
              font-size: 20px;
            }
          }

          @media (max-width: 500px) {
            div > div {
              padding: 10px 20px;
            }
            h2 {
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Cloud;
