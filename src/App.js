import './App.css';
import * as ReactDOM from 'react-dom';
import React from 'react';

function App() {

  var random = 0
  function jogar(){
    random =  parseInt(Math.random() * 3)
    if(document.getElementById("pedra").checked != true && document.getElementById("papel").checked != true && document.getElementById("tesoura").checked != true){
      alert("Selecione entre Pedra, Papel ou Tesoura");
    } else {
      console.log(random)
      if(random === 0){
        ReactDOM.render(
        <>
        <h2>
          O bot jogou Pedra
        </h2>
        <img id='pedra-bot' src='https://img.icons8.com/stickers/100/null/rock.png' alt='pedra' style={{width:100, height:100}} onLoad={setTimeout(EndGame, 2000)}/>  
        </>
        , document.getElementBy("button"));
      }
  
      if(random === 1){
        ReactDOM.render(
          <>
          <h2>
            O bot jogou Papel
          </h2>
          <img id='papel-bot' src='https://imagensemoldes.com.br/wp-content/uploads/2020/08/Amassado-de-Papel-PNG.png' alt='papel' style={{width:100, height:100}} onLoad={setTimeout(EndGame, 2000)}/>
          </>
          , document.getElementById("button"));
      }
  
      if(random === 2){
        ReactDOM.render(
          <>
          <h2>
            O bot jogou Tesoura
          </h2>
          <img id='tesoura-bot' src='https://img.icons8.com/plasticine/100/null/scissors.png' alt='papel' style={{width:100, height:100}} onLoad={setTimeout(EndGame, 2000)}/>
          </>
        , document.getElementById("button"));
      }
    }
  }

  function EndGame(){

    if(document.getElementById("pedra").checked == true && random == 0){
      ReactDOM.render(
        <>
        <h2>
          Empate
        </h2>
        </>
      , document.getElementById("resposta"));
      
    }

    if(document.getElementById("pedra").checked == true && random == 1){
      ReactDOM.render(
        <>
        <h2>
          Você Perdeu
        </h2>
        </>
      , document.getElementById("resposta"));
    }

    if(document.getElementById("pedra").checked == true && random == 2){
      ReactDOM.render(
        <>
        <h2>
          Você venceu
        </h2>
        </>
      , document.getElementById("resposta"));
    }

    if(document.getElementById("papel").checked == true && random == 0){
      ReactDOM.render(
        <>
        <h2>
          Você venceu
        </h2>
        </>
      , document.getElementById("resposta"));
    }


    if(document.getElementById("papel").checked == true && random == 1){
      ReactDOM.render(
        <>
        <h2>
          Empate
        </h2>
        </>
      , document.getElementById("resposta"));
    }

    if(document.getElementById("papel").checked == true && random == 2){
      ReactDOM.render(
        <>
        <h2>
          Você Perdeu
        </h2>
        </>
      , document.getElementById("resposta"));
    }

    if(document.getElementById("tesoura").checked === true && random == 0){
      ReactDOM.render(
        <>
        <h2>
          Você Perdeu
        </h2>
        </>
      , document.getElementById("resposta"));
    }

    if(document.getElementById("tesoura").checked === true && random == 1){
      ReactDOM.render(
        <>
        <h2>
          Você Venceu
        </h2>
        </>
      , document.getElementById("resposta"));
    }

    if(document.getElementById("tesoura").checked === true && random == 2){
      ReactDOM.render(
        <>
        <h2>
          Emapate
        </h2>
        </>
      , document.getElementById("resposta"));
    }
  }

  return(
    <div className="App">
      <div className="ppt">
        <div id="imagem-pedra" style={{display:"inline-block", marginTop:30}}>
          <img src="https://img.icons8.com/stickers/100/null/rock.png" alt="pedra" style={{width:100, height:100}} />
          <input type="radio" name="gp" id="pedra" />
        </div>
    
        <div id="imagem-papel" style={{display:"inline-block", marginTop:30}}>
          <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/08/Amassado-de-Papel-PNG.png" alt="papel" style={{width:100, height:100}} />
          <input type="radio" name="gp" id="papel"/>
        </div>
    
        <div id="imagem-tesoura" style={{display:"inline-block", marginTop:30}}>
          <img src="https://img.icons8.com/plasticine/100/null/scissors.png" alt="tesoura" style={{width:100, height:100}} />
          <input type="radio" name="gp" id="tesoura"/>
        </div>
      </div>
      
      <div id='button'><button type='submit' id='submit' onClick={jogar} >jogar</button></div>
    </div>

  );
}

export default App;
