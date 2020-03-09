"use strict";
exports.__esModule = true;
/*
  Neurons are the basic units of any neural network. A neuron's primary function performs three steps:
  
  1. It takes in some input
  2. Performs some operations on that input
  3. Returns one single ouput

  Let's consider a 2-input neuron:
  1. It takes in two numbers: x1, x2
  2. It applies a weight to each one, and the weighted inputs are added together with a bias, which is all then passed to an activation function: y = f((x1 * w1) + (x2 * w2) + b)
  3. Returns a numerical output between 0 and 1

  An activation function is used to turn an unbounded input into an output that has a nice, predictable form. A commonly used activation function is the sigmoid function which only outputs numbers in the range (0, 1).
  
  You can think of it as compressing (−∞, +∞) to (0, 1): big negative numbers become ~0, and big positive numbers become ~1.

  Here is an example:

  Assume we have a 2-input neuron that uses the sigmoid activation function and has the following parameters:

  w = [0, 1]
  b = 4

  w = [0, 1] is just a way of writing w1 ​= 0, w2 ​= 1 in vector form. Now, let’s give the neuron an input of x = [2, 3]. We’ll use the dot product to write things more concisely:

  (w * x) + b = ((w1 * x1) + (w2 * x2)) + b
              = ((0 * 2) + (1 * 3)) + 4
              = 7
  
  y = f(w * x + b) = f(7) = 0.999

  This approach of passing inputs forward to get an output is known as feedforward.
*/
var Neuron = /** @class */ (function () {
    function Neuron(weights, bias) {
        this.weights = weights;
        this.bias = bias;
    }
    Neuron.prototype.sigmoid = function (x) {
        return 1 / (1 + Math.exp(-x));
    };
    Neuron.prototype.feedForward = function (inputs) {
        return this.sigmoid(inputs.reduce(function (a, b) { return a * b; }) + this.bias);
    };
    return Neuron;
}());
exports["default"] = Neuron;
