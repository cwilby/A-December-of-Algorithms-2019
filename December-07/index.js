module.exports = (queue, k) => {
  queue.unshift(...queue.splice(queue.findIndex(({ id }) => id === k), 1));
  return queue;
};
