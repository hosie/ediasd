import 'whatwg-fetch';
export const factAPI = {
  create: (fact) => {
    return fetch('/api/v1/facts/' + fact.id,
      {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fact)
      });
  }
};
