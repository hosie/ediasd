export default class CardService {
  static getCards() {
    return {
      then: function(cb) {
        cb([
          {
            id: 1,
            question: "What is the SI unit for power?",
            answer:   "Watt"
          },
          {
            id: 2,
            question: "Who is the organisation that do stuff for health worldwide",
            answer: "WHO"
          }
        ])
      }
    }
    /*fetch(`https://hosie.github.io/template-gallery-prototype/en/repo_metadata.json`)
    .then(response => {
      console.log("got response")
      return response.json();

    })
    .then(responseJson => {
      this.setState({templates: responseJson.templates});
    })
    .catch(err => {
      console.log("got error");
    });*/
  }
};
