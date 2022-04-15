
const { expect } = require("chai");


describe("State Routes", () => {
  let stateUuid;

  it("should pass", () => {

  })

  it.skip("should create a state", async () => {
    const reqBody = {
      name: "Ohio",
      abbreviation: "OH",
      capital: "Columbus",
      population: 11689100,
      country: "US",
    };

    const res = await superagent.post(`${baseUrl}/states`).send(reqBody);

    expect(res.status).to.equal(201);
    expect(res.body).to.haveOwnProperty("uuid");
    expect(res.body).to.haveOwnProperty("name");
    expect(res.body.name).to.equal(reqBody.name);
    stateUuid = res.body.uuid;
  });

});