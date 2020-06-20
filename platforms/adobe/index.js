const reactShim = require("./react-shim");
const React = require("react");
const ReactDOM = require("react-dom");
const CreateChartScreen = require("../../src/Adobe/CreateChart.js").default;
const TemplatesScreen = require("../../src/Adobe/Templates.js").default;
const MyAccountScreen = require("../../src/Adobe/MyAccount.js").default;

function createChart(selection) {
  let dialog;

  function getDialog() {
    if (dialog == null) {
      dialog = document.createElement("dialog");
      ReactDOM.render(
        <CreateChartScreen dialog={dialog} selection={selection} />,
        dialog
      );
    }
    return dialog;
  }

  return document.body
    .appendChild(getDialog())
    .showModal()
    .then((result) => {
      console.log("dialog closed");
    });
}

function templates(selection) {
  let dialog;

  function getDialog() {
    if (dialog == null) {
      dialog = document.createElement("dialog");
      ReactDOM.render(
        <TemplatesScreen dialog={dialog} selection={selection} />,
        dialog
      );
    }
    return dialog;
  }

  return document.body
    .appendChild(getDialog())
    .showModal()
    .then((result) => {
      console.log("dialog closed");
    });
}

function myAccount(selection) {
  let dialog;

  function getDialog() {
    if (dialog == null) {
      dialog = document.createElement("dialog");
      ReactDOM.render(
        <MyAccountScreen dialog={dialog} selection={selection} />,
        dialog
      );
    }
    return dialog;
  }

  return document.body
    .appendChild(getDialog())
    .showModal()
    .then((result) => {
      console.log("dialog closed");
    });
}

function support(selection) {
  /*  const a = document.createElement("a");
  const link = "http://google.com";
  //"https://chart-plugin.slack.com/join/shared_invite/zt-61tsh8gx-C0TBYxSU8ShA~IK_v121dA#/";
  a.setAttribute("href", link);

  document.body.appendChild(a);
  console.log("a", a);
  a.click();
  return true; */
}

module.exports = {
  commands: {
    createChart,
    templates,
    myAccount,
    support,
  },
};
