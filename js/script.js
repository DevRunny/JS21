"use strict"; //Строгий режим
const title = document.getElementsByTagName("h1")[0];
const btnPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector("div.rollback .range-value");

const btnStart = document.getElementsByClassName("handler_btn")[0];
const btnReset = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

const cmsOpen = document.querySelectorAll(".cms");

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  checkInputs: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((item) => {
      const input = item.querySelector(".screen input");
      const select = item.querySelector(".screen select");

      input.addEventListener("change", appData.checkInputs);
      select.addEventListener("change", appData.checkInputs);
    });
    for (let i = 0; i < screens.length; i++) {
      if (
        screens[i].querySelector("select").selectedIndex === 0 ||
        screens[i].querySelector("input").value === ""
      ) {
        btnStart.disabled = true;
        break;
      } else {
        btnStart.disabled = false;
      }
    }
  },

  init: function () {
    this.addTitle();

    this.checkInputs();

    btnStart.addEventListener("click", this.start);
    btnReset.addEventListener("click", this.reset);

    btnPlus.addEventListener("click", this.addScreenBlock);

    inputRange.addEventListener("input", (event) => {
      inputRangeValue.textContent = event.target.value + "%";
      this.rollback = event.target.value;
    });
  },

  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    appData.logger();

    appData.showResult();

    appData.checkButtons();

    btnStart.style.display = "none";
    btnReset.style.display = "";
  },

  reset: function () {
    btnStart.style.display = "";
    btnReset.style.display = "none";

    inputRange.disabled = false;
    btnPlus.disabled = false;

    appData.screens = [];
    appData.screenPrice = 0;
    appData.screenCount = 0;
    appData.adaptive = true;
    appData.rollback = 0;
    appData.servicePricesPercent = 0;
    appData.servicePricesNumber = 0;
    appData.fullPrice = 0;
    appData.servicePercentPrice = 0;
    appData.servicesPercent = {};
    appData.servicesNumber = {};

    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;

    document.querySelectorAll(".clone-screen").forEach((item) => item.remove());

    appData.checkButtons();
  },

  isString: function (str) {
    return str.length === 0 || str == Number.parseFloat(str, Infinity);
  },

  checkButtons: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      if (appData.fullPrice != 0) {
        select.disabled = true;
        input.disabled = true;
      } else {
        select.disabled = false;
        select.value = "";
        input.disabled = false;
        input.value = 0;
      }
    });

    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");

      if (appData.fullPrice != 0) {
        check.disabled = true;
      } else {
        check.disabled = false;
        check.checked = false;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");

      if (appData.fullPrice != 0) {
        check.disabled = true;
      } else {
        check.disabled = false;
        check.checked = false;
      }
    });

    cmsOpen.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");

      if (appData.fullPrice != 0) {
        check.disabled = true;
      } else {
        check.disabled = false;
        check.checked = false;
      }
    });

    if (appData.fullPrice != 0) {
      inputRange.disabled = true;
      btnPlus.disabled = true;
    } else {
      inputRange.disabled = false;
      inputRange.value = 0;
      inputRangeValue.textContent = inputRange.value + "%";
      btnPlus.disabled = false;
    }
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.screenCount;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    cloneScreen.classList.add("clone-screen");
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let screen of this.screens) {
      this.screenCount += +screen.count;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice = Math.ceil(
      this.fullPrice - this.fullPrice * (this.rollback / 100)
    );
  },

  logger: function () {
    // console.log(this.screens);
    // console.log(appData.fullPrice);
    // console.log(appData.servicePercentPrice);
    // console.log(appData);
    // console.log(appData.screens);
    // for (let key in appData) {
    //   console.log(key + ": " + appData[key]);
    // }
  },
};

appData.init();
