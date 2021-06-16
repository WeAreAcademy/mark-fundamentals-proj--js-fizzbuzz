export function fizzbuzz(endNumber) {
  // Note: an array map would be preferred here, but we'll look at maps later
  //  (although you could investigate JS array maps yourself)
  let sequence = [];
  for (let n = 1; n <= endNumber; n = n + 1 /* n++ more common */) {
    // demoing variable declaration and assignment on separate lines below
    // although it'd be more typical in this case to do a one liner
    let nextFizzbuzzEntry;
    nextFizzbuzzEntry = toFizzbuzz(n);
    // let nextFizzbuzzEntry = toFizzbuzz(n) // <-- what we would normally do
    sequence.push(nextFizzbuzzEntry);
  }
  return sequence;
}

export function isFizz(n) {
  return n % 3 === 0;
}

export function isBuzz(n) {
  return n % 5 === 0;
}

export function isFizzbuzz(n) {
  return isFizz(n) && isBuzz(n);
}

export function toFizzbuzz(n) {
  if (isFizzbuzz(n)) {
    return "FizzBuzz";
  } else if (isFizz(n)) {
    return "Fizz";
  } else if (isBuzz(n)) {
    return "Buzz";
  } else {
    return n;
  }
}
