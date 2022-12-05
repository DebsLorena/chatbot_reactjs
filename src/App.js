import bot from "./img/bot.png"
import './App.css';
import { useState, useRef } from "react";

function App() {

  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December" ];

    // Com useState eu pego as horas e os segundos
  const [time, setTime] = useState(`${hours}:${seconds}`);
    // o dia o mês e o ano, e guardo nas constantes do array
  const [dateTime, setDateTime] = useState(`${days[day]}, ${months[month]} ${year}`
    );

    // o bot fica ativo como padrão com exceção das datas escolhidas abaixo.
  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Sunday, Dez 25 2022") {
      isActive = false;
    }
    // ele pega o status definido pela função acima
    const status = document.querySelector('.status')
    // se ele estiver ativo fica verde
    if (isActive === true){
      status.innerHTML = 'Active';
      status.style.color = 'green';
    }else{
      // se estiver inativo fica vermelho
      status.innerHTML = 'Not Active';
      status.style.color = 'red';
    }
  }
  const handleInput = () => {
    const botMessage = document.querySelector('#message1');
    const userMessage = document.querySelector('#message2');
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ['fuck|bad|stupid|useless|bitch|crazy|nonsense|foda|fdp|burro|ruim|estúpido|inútil|puta|louco|bobagem'];
    // RegExp cria um objeto para realizar um correspondência de texto
    let words = new RegExp(badwords);
    // o metodo test busca a correspodencia nas strings inseridas em RegExp
    if(words.test(document.querySelector('#input').value)) {
      getBotMessage.innerText = "Digitando...";
      // executa e cria um cronômetro no componente
      setTimeout(() => {
      // getBotMessage irá exibir a mensagem caso haja palavrões
        getBotMessage.innerText = "Por favor, não use palavrões";
        // limpe o imput
        inputRef.value = "";
      }, 2000);
    }
    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening|oi|Olá|olá|Oi|Tudo bem|tudo bem|Bom dia|bom dia|Boa tarde| boa tarde|boa noite|Boa noite",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Digitando...";
      setTimeout(() => {
        getBotMessage.innerText = "Olá, tudo bem? Seja bem vindo!"; 
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye|tchau|Tchau|valeu|até logo|Até logo|Valeu"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Digitando...";
      setTimeout(() => {
        getBotMessage.innerText = "Tchauzinho, até a próxima!";
        inputRef.value = ""; 
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much|Obrigado|obrigado|Muito obrigado|muito obrigado",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Digitando...";
      setTimeout(() => {
        getBotMessage.innerText = "Você é sempre bem vindo, estou sempre a disposição!";
        inputRef.value = ""; 
      }, 2000);
    }
    let how = [
      "Qual o seu palpite de hoje?|Qual o seu palpite de hoje",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Digitando...";
      setTimeout(() => {
        getBotMessage.innerText = "2x1, Brasil, e o seu?";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }
    let good = [
      "Você gosta de futebol?",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Digitando...";
      setTimeout(() => {
        getBotMessage.innerText = "😁, eu adoro, quem você acha que vai vencer??";
        inputRef.value = "";
      }, 1000);
    }

    let response = [
      "Acredito que o Brasil| Brasil é claro | Brasil",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Digitando...";
      setTimeout(() => {
        getBotMessage.innerText = "Também acho, estou aqui na torcida!!";
        inputRef.value = ""; 
      }, 2000);
    }

    let nameAsk = [
      "Qual o seu nome?|Qual seu nome",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Digitando...";
      setTimeout(() => {
        getBotMessage.innerText = "Meu nome é La'eeb, sou o mascote da copa 2022.";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; 
      }, 2000);
    }

    let empty = [badwords, welcome, bye, thanks, how, good, response, nameAsk ];
    let words9 = new RegExp(empty);
    if (!words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Digitando...";
      setTimeout(() => {
        getBotMessage.innerText = "Não entendi, pode escrever de outra maneira por favor.";
        inputRef.value = ""; 
      }, 2000);
    }
    
    getHumanMessage.innerText = inputRef.value; 
  };
  return (
    // onLoad ao carregar a pagina ele chama a função
    <div className="App" onLoad={checkStatus} >
    <div className="wrapper">
      <div className="content">
        <div className="header">
          <div className="img">
            <img src={bot} alt="bot" />
          </div>
          <div className="right">
            <div className="name">ChatBot</div>
            <div className="status">Active</div>
          </div>
        </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" id="message1" ref={botmessage} ></div>
                <div className="human-message" id="message2" ref={humanMessage} ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input type="text" id="input" placeholder="Enter your message" ref={input} />
              </div>
              <div className="btn">
                <button onClick={handleInput}> Enviar <ion-icon name="paper-plane-outline"></ion-icon></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
