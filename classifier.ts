import natural from "natural";

const init = async (): Promise<any> => {
  return new Promise((resolve) => {
    natural.BayesClassifier.load("classifier.json", null, function (err, cl) {
      resolve(cl);
    });
  });
}

// classifier.addDocument('je cours', 'positive');
// classifier.addDocument('je ne cours pas', 'negative');
// classifier.addDocument('ne pas', 'negative');
// classifier.addDocument('ne plus', 'negative');
// classifier.addDocument('plus jamais', 'negative');
// classifier.addDocument("n' plus jamais", 'negative');

export default init();
