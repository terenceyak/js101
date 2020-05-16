function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Yes, there is a difference.
// While both methods have the same return value,
// the first implementation mutates the buffer argument.
// That is, the caller will see that the array is different when the function returns.
// The rollingBuffer2 implementation doesn't mutate the buffer argument.

