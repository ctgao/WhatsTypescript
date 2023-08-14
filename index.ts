// Import stylesheets
// import './style.css';

const form = document.querySelector('#defineform');
var data;
var request = new XMLHttpRequest();

form.onsubmit = () => {
  // console.log('happening');
  if(form === null){
    console.log('got a null value!!! aur naur');
    return false;
  }

  const formData = new FormData(form);

  const text = formData.get('defineword');
  console.log('your word is: ' + text);

  if(text){
    const wordJSON = makeRequest(text);
  }

  return false; // prevent reload
};

// https://api.dictionaryapi.dev/api/v2/entries/en/hello
function makeRequest(inputText){
  const requestString = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + inputText;

  request.open('GET', requestString, true);

  request.send("");
};

request.onload = function () {
  data = JSON.parse(this.response)[0];
  console.log(data);

  const wordToReplace = document.getElementById('wordInQuestion');
  wordToReplace.innerText = data ? data.word: 'Word not found :(';

  const wordPronunciation = document.getElementById('phoneticThing');
  wordPronunciation.innerText = data ? data.phonetic : 'Word not found :(';
  
  if(data){
    const theRestOfTheWord = document.getElementById('listingThings');
    theRestOfTheWord.innerHTML = ""
    // console.log(data.meanings.size);
    // for(let i = 0; i < data.meanings.size; i++){
    //   if(typeof data.meanings[i] != "string"){
    //     for(let j = 0; j < data.meanings[i].length; j++){
    //       console.log(data.meanings[i][j]);
    //       entry.appendChild(document.createTextNode(data.meanings[i][j]));
    //     }
    //   }
    //   else{
    //     console.log("no");
    //     entry.appendChild(document.createTextNode("no"));
    //   }
    // }

    for ( var i = 0; i < data.meanings.length; i++) {
      var obj = data.meanings[i];
      console.log(obj);

      var meaningKey;
      var meaningValue;

      for (var key in obj) {
        meaningKey = key;
        meaningValue = obj[key];
        var entry = document.createElement('li');
        if(Array.isArray(meaningValue)){
          console.log('isarray');
          entry.append(meaningKey);
          var nestedList = document.createElement('ul');
          for(var nestedKey in meaningValue){
            var nextedValue = meaningValue[nestedKey];
            var nestedEntry = document.createElement('li');
            nestedEntry.appendChild(document.createTextNode(nextedValue));
            nestedList.appendChild(nestedEntry);
          }
          entry.append(nestedList);
        }
        else{
          console.log('is not array');
          entry.appendChild(document.createTextNode(meaningKey + ': ' + meaningValue));
        }
        theRestOfTheWord.appendChild(entry);
      }
    }
  }
};

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};