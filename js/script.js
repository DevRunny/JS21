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
  init() {
    this.addTitle();
    this.checkInputs();

    btnStart.addEventListener("click", this.start.bind(appData));
    btnReset.addEventListener("click", this.reset.bind(appData));

    btnPlus.addEventListener("click", this.addScreenBlock.bind(appData));

    inputRange.addEventListener("input", (event) => {
      inputRangeValue.textContent = event.target.value + "%";
      this.rollback = event.target.value;
    });
  },

  addTitle() {
    document.title = title.textContent;
  },

  start() {
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.showResult();
    this.checkButtons();
    this.logger();
    this.checkInputs();

    btnStart.style.display = "none";
    btnReset.style.display = "";
  },

  reset() {
    btnStart.style.display = "";
    btnReset.style.display = "none";

    inputRange.disabled = false;
    btnPlus.disabled = false;

    this.screens = [];
    this.screenPrice = 0;
    this.screenCount = 0;
    this.adaptive = true;
    this.rollback = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};

    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;

    document.querySelectorAll(".clone-screen").forEach((item) => item.remove());

    this.checkButtons();
    this.checkInputs();
  },

  checkInputs() {
    screens = document.querySelectorAll(".screen");

    screens.forEach((item) => {
      const input = item.querySelector(".screen input");
      const select = item.querySelector(".screen select");

      input.addEventListener("change", this.checkInputs);
      select.addEventListener("change", this.checkInputs);
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

  checkButtons() {
    document.querySelectorAll("input[type=checkbox]").forEach((item) => {
      if (this.fullPrice != 0) {
        item.disabled = true;
      } else {
        item.disabled = false;
        item.checked = false;
      }
    });

    document.querySelectorAll(".screen").forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      if (this.fullPrice != 0) {
        select.disabled = true;
        input.disabled = true;
      } else {
        select.disabled = false;
        select.value = "";
        input.disabled = false;
        input.value = "";
      }
    });

    if (this.fullPrice != 0) {
      inputRange.disabled = true;
      btnPlus.disabled = true;
    } else {
      inputRange.disabled = false;
      inputRange.value = 0;
      inputRangeValue.textContent = inputRange.value + "%";
      btnPlus.disabled = false;
    }
  },

  showResult() {
    total.value = this.screenPrice;
    totalCount.value = this.screenCount;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  addScreens() {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addServices() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock() {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    cloneScreen.classList.add("clone-screen");
    this.checkInputs();
  },

  addPrices() {
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

  logger() {
    console.log(this.screens);
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
