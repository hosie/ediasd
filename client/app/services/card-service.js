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
  }
};
