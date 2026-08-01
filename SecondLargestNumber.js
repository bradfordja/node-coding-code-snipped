class SecondLargestNumber {
  static findSecondLargest(numbers) {
    if (!Array.isArray(numbers)) {
      throw new TypeError('Input must be an array.');
    }

    if (numbers.length < 2) {
      return null;
    }

    let largest = null;
    let secondLargest = null;

    for (const number of numbers) {
      if (!Number.isSafeInteger(number)) {
        throw new TypeError(
          `Every element must be a safe integer. Invalid value: ${number}`
        );
      }

      if (largest === null || number > largest) {
        secondLargest = largest;
        largest = number;
      } else if (
        number !== largest &&
        (secondLargest === null || number > secondLargest)
      ) {
        secondLargest = number;
      }
    }

    return secondLargest;
  }

  static main() {
    try {
      const input = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const secondLargest = SecondLargestNumber.findSecondLargest(input);

      const message =
        secondLargest === null
          ? 'There is no second-largest distinct number.'
          : `The second-largest distinct number is: ${secondLargest}`;

      console.log(message);
    } catch (error) {
      console.error('Unable to process the input');
    }
  }
}

SecondLargestNumber.main();
module.exports = { SecondLargestNumber };
