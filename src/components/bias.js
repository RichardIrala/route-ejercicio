const el = document.querySelector(".inbox-and-sent");
const elOutput = document.querySelector(".output-inbox-and-sent");

(function () {
  el.innerHTML = `<div class="ias-all-content-container">
  <div class="ias-button-container">
    <button class="ias__button ias__button--inbox">Inbox</button>
  </div>
  <div class="ias-button-container">
    <button class="ias__button ias__button--sent">Sent</button>
  </div>
</div>
`;
  const inbox = el.querySelector(".ias__button--inbox");
  const sent = el.querySelector(".ias__button--sent");
  sent.addEventListener("click", () => {
    sentAction();
  });
  inbox.addEventListener("click", () => {
    inboxAction();
  });
})();
//
const buttonsAction = [
  {
    action: "SENT",
    function: () => {
      addInfo("SENT");
    },
  },
  {
    action: "INBOX",
    function: () => {
      addInfo("INBOX");
    },
  },
];

function inboxAction() {
  history.pushState({}, "", "/inbox");

  for (const r of buttonsAction) {
    if (r.action == "INBOX") {
      r.function();
    }
  }
}
//
function sentAction() {
  history.pushState({}, "", "/sent");

  for (const r of buttonsAction) {
    if (r.action == "SENT") {
      r.function();
    }
  }
}
function addInfo(action) {
  const emailSUno = "EMAIL SENT 1";
  const emailSDos = "EMAIL SENT 2";
  const emailIUno = "EMAIL INBOX 1";
  const emailIDos = "EMAIL INBOX 2";

  if (action == "SENT") {
    elOutput.innerHTML = `
    <div>
    <div class="output-iass--title-container">
     <h2>SENT</h2>
    </div>
    </div>
    <div>
    <a class="email email-uno" href="">${emailSUno}</a>
    <a class="email email-dos" href="">${emailSDos}</a>
  </div>
   `;
  } else if (action == "INBOX") {
    elOutput.innerHTML = `
    <div>
    <div class="output-iass--title-container">
     <h2>INBOX</h2>
    </div>
    </div>
    <div>
    <a class="email email-uno" href="">${emailIUno}</a>
    <a class="email email-dos" href="">${emailIDos}</a>
  </div>
   `;
  } else {
    throw "Hay un problema";
  }
  const emailEl = elOutput.querySelectorAll(".email");

  for (const r of emailEl) {
    r.addEventListener("click", (evento) => {
      evento.preventDefault();
      if (location.pathname == "/inbox") {
        // inicia ciclo if, transformar en un OBJETO para que sea más leible
        if (r.textContent == emailIUno) {
          history.pushState({}, "", `${"/inbox/" + emailIUno}`);
          addEmail("inbox");
        } else if (r.textContent == emailIDos) {
          history.pushState({}, "", `${"/inbox/" + emailIDos}`);
          addEmail("inbox");
        }

        // ciclo de if terminado
      } else if (location.pathname == "/sent") {
        if (r.textContent == emailSUno) {
          history.pushState({}, "", `${"/sent/" + emailSUno}`);
          addEmail("sent");
        } else if (r.textContent == emailSDos) {
          console.log("hola");
          history.pushState({}, "", `${"/sent/" + emailSDos}`);
          addEmail("sent");
        } else {
          console.log("no funca");
        }
      }
      /*ACA tengo que añadir un condicional para que elija si es el email 1 o 2 el que estoy usando y lo coloque en la URL*/
    });
  }
}
function addEmail(option) {
  if (option == "sent") {
    elOutput.innerHTML = `<h1>Soy SENT</h1>`;
  } else if (option == "inbox") {
    elOutput.innerHTML = `<h1>Soy INBOX</h1>`;
  }
}
// history.pushState({}, "", "/hollalallalallala dasda");
