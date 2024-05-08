const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app"); // Import the Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe("Calculator API", () => {
  // Test Addition Endpoint
  describe("GET /add", () => {
    // Test case for valid addition
    it("should add two numbers correctly", (done) => {
      chai
        .request(app)
        .get("/add?num1=5&num2=3")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(8);
          done();
        });
    });

    // Test case for invalid input (non-numeric values)
    it("should return error for invalid input (non-numeric values)", (done) => {
      chai
        .request(app)
        .get("/add?num1=abc&num2=3")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.error).to.equal(
            "Invalid input. Please provide valid numbers."
          );
          done();
        });
    });
  });

  // Test Subtraction Endpoint
  describe("GET /subtract", () => {
    // Test case for valid subtraction
    it("should subtract two numbers correctly", (done) => {
      chai
        .request(app)
        .get("/subtract?num1=10&num2=4")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(6);
          done();
        });
    });

    // Test case for zero as the second operand
    it("should return zero when subtracting a number from itself", (done) => {
      chai
        .request(app)
        .get("/subtract?num1=8&num2=8")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(0);
          done();
        });
    });
  });

  // Test Multiplication Endpoint
  describe("GET /multiply", () => {
    // Test case for valid multiplication
    it("should multiply two numbers correctly", (done) => {
      chai
        .request(app)
        .get("/multiply?num1=6&num2=4")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(24);
          done();
        });
    });

    // Test case for multiplication with zero
    it("should return zero when multiplying any number by zero", (done) => {
      chai
        .request(app)
        .get("/multiply?num1=100&num2=0")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(0);
          done();
        });
    });
  });

  // Test Division Endpoint
  describe("GET /divide", () => {
    // Test case for valid division
    it("should divide two numbers correctly", (done) => {
      chai
        .request(app)
        .get("/divide?num1=15&num2=3")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(5);
          done();
        });
    });

    // Test case for division by zero
    it("should return error for division by zero", (done) => {
      chai
        .request(app)
        .get("/divide?num1=10&num2=0")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.error).to.equal(
            "Invalid input. Valid numbers Only and ensure the divisor is not zero."
          );
          done();
        });
    });
  });

  // Test Exponentiation Endpoint
  describe("GET /exponentiate", () => {
    // Test case for valid exponentiation
    it("should compute exponentiation of two numbers correctly", (done) => {
      chai
        .request(app)
        .get("/exponentiate?num1=2&num2=3")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(8);
          done();
        });
    });

    // Test case for exponentiation with zero as the exponent
    it("should return 1 when raising any number to the power of zero", (done) => {
      chai
        .request(app)
        .get("/exponentiate?num1=5&num2=0")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(1);
          done();
        });
    });
  });

  // Test Square Root Endpoint
  describe("GET /sqrt", () => {
    // Test case for valid square root
    it("should compute square root of a number correctly", (done) => {
      chai
        .request(app)
        .get("/sqrt?num=25")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(5);
          done();
        });
    });

    // Test case for square root of a negative number
    it("should return error for square root of a negative number", (done) => {
      chai
        .request(app)
        .get("/sqrt?num=-25")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.error).to.equal(
            "Invalid input. Valid  non-negative number Only."
          );
          done();
        });
    });
  });

  // Test Modulo Endpoint
  describe("GET /modulo", () => {
    // Test case for valid modulo operation
    it("should compute modulo of two numbers correctly", (done) => {
      chai
        .request(app)
        .get("/modulo?num1=10&num2=3")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(1);
          done();
        });
    });

    // Test case for modulo operation with zero as the divisor
    it("should return error for modulo operation with zero divisor", (done) => {
      chai
        .request(app)
        .get("/modulo?num1=8&num2=0")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.error).to.equal(
            "Invalid input. Valid numbers Only and ensure the divisor is not zero."
          );
          done();
        });
    });
  });
});
