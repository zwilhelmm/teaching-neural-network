"use strict";

import { expect } from 'chai';
import Neuron from './../src/neuron'

describe("Neuron Testing Suite", function() {
  it("correctly creates a value between 0 and 1", function() {
    const weights = [0, 1];
    const bias = 4;
    const x = [2, 3];

    const neuron = new Neuron(weights, bias);

    expect(neuron.feedForward(x))
      .to.be.above(0)
      .and.below(1);
  });
});
