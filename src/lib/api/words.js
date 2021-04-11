const exampleResponse = [
  {
    "word": "sizzling",
    "score": 105468,
    "tags": [
      "syn",
      "adj",
      "v",
      "f:0.631884"
    ]
  },
  {
    "word": "scorching",
    "score": 105032,
    "tags": [
      "syn",
      "adj",
      "v",
      "f:1.274342"
    ]
  },
  {
    "word": "heated",
    "score": 104113,
    "tags": [
      "syn",
      "adj",
      "v",
      "f:19.189072"
    ]
  },
  {
    "word": "warm",
    "score": 101908,
    "tags": [
      "syn",
      "adj",
      "v",
      "f:66.010287"
    ]
  },
  {
    "word": "sweltering",
    "score": 101751,
    "tags": [
      "syn",
      "adj",
      "v",
      "f:0.540437"
    ]
  },
  {
    "word": "overheated",
    "score": 101670,
    "tags": [
      "syn",
      "adj",
      "f:0.918904"
    ]
  },
  {
    "word": "torrid",
    "score": 101216,
    "tags": [
      "syn",
      "adj",
      "f:0.570699"
    ]
  },
  {
    "word": "scalding",
    "score": 100683,
    "tags": [
      "syn",
      "adj",
      "v",
      "f:0.731217"
    ]
  },
  {
    "word": "boiling",
    "score": 99847,
    "tags": [
      "syn",
      "n",
      "v",
      "f:14.894600"
    ]
  },
  {
    "word": "spicy",
    "score": 99824,
    "tags": [
      "syn",
      "adj",
      "f:1.884091"
    ]
  }];

export function getWords() {
  return exampleResponse.map(res => res.word);
}