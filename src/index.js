function displayPoem(response){

new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart:true,
        delay:1,
        cursor:"",
    } );

}


function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions"); 
    let apiKey = '01f1e3c8846fa60fce9eodfad5fbt6b4';
    let prompt = `User instructions: Generate a poem ${instructionsInput.value}`;
    let context = "You are a poet and love short but meaningful poems. You are tto generate a 6 line poem in basic HTML and seperate each line with a <br/>  Make sure to follow the user instructions.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

     axios.get(apiUrl).then(displayPoem);
    
    
    
}


let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener('submit',generatePoem);

