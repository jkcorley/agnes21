export const amazonAdapter = {
  name: 'amazon',
  description: 'Search, add to cart, and track orders on Amazon.',
  async run(input: string) {
    // TODO: Implement Amazon API calls
    return 'AmazonAdapter response for ' + input;
  },
};

export const targetAdapter = {
  name: 'target',
  description: 'Search, add to cart, and track orders on Target.',
  async run(input: string) {
    // TODO: Implement Target API calls
    return 'TargetAdapter response for ' + input;
  },
};
