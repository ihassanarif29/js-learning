// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to prevent from the polution caused by the global scope

// Named IIFE
(function DBConnection() {
  console.log("DB Connected");
})();

// Simple IIFE
((name) => {
  console.log(`DB Connection Two ${name}`);
})("CWH");
