const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Doesn't wrap the string if line length is less than maxLength", ()=> {
    expect(wrap("hi",20)).to.equal("hi");
  })
  it("Doesn't wrap the string if line length is equal to the maxLength", ()=> {
    expect(wrap("hi",2)).to.equal("hi");
  })
  it("Doesn't wrap word if word Length is longer than maxLength", () =>{
    expect(wrap("hello",2)).to.equal("hello");
  })
  it("Wraps the string if line length is greater than the maxLength and there are spaces", ()=> {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.");
    expect(wrap("hi 3",2)).to.equal("hi\n3");
  })
});
