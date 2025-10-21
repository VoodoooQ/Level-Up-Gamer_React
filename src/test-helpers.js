// Helper para agregar matchers personalizados a Jasmine
beforeEach(function() {
  jasmine.addMatchers({
    toBeInTheDocument: () => ({
      compare: (actual) => {
        const pass = actual !== null && actual !== undefined;
        return {
          pass,
          message: pass 
            ? `Expected element not to be in document` 
            : `Expected element to be in document`
        };
      }
    }),
    toHaveAttribute: () => ({
      compare: (actual, attr, value) => {
        if (!actual) {
          return { pass: false, message: 'Element is null or undefined' };
        }
        const actualValue = actual.getAttribute(attr);
        const pass = value !== undefined 
          ? actualValue === value 
          : actualValue !== null;
        return {
          pass,
          message: pass 
            ? `Expected element not to have attribute ${attr}="${value}"`
            : `Expected element to have attribute ${attr}="${value}", but got "${actualValue}"`
        };
      }
    }),
    toHaveLength: () => ({
      compare: (actual, expected) => {
        const pass = actual && actual.length === expected;
        return {
          pass,
          message: pass 
            ? `Expected array not to have length ${expected}`
            : `Expected array to have length ${expected}, but got ${actual ? actual.length : 'undefined'}`
        };
      }
    }),
    toContain: () => ({
      compare: (actual, expected) => {
        const pass = actual && actual.includes(expected);
        return {
          pass,
          message: pass 
            ? `Expected "${actual}" not to contain "${expected}"`
            : `Expected "${actual}" to contain "${expected}"`
        };
      }
    }),
    toBeGreaterThan: () => ({
      compare: (actual, expected) => {
        const pass = actual > expected;
        return {
          pass,
          message: pass 
            ? `Expected ${actual} not to be greater than ${expected}`
            : `Expected ${actual} to be greater than ${expected}`
        };
      }
    })
  });
});
