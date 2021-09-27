// --Elements selection
const sliderThumb = document.getElementById("page-views");
const progress = document.getElementById("progress-background");
const pageViews = document.getElementById("pageViews");
const pricing = document.getElementById("pricing");
const periodRadio = document.getElementById("period-radio");
const pricePeriod = document.getElementById("period");

// --Start values
progress.style.width = `${sliderThumb.value * 5}%`;
pageViews.innerHTML = pageviews(sliderThumb.value);
pricing.innerHTML = periodRadio.checked
  ? "$" +
    (
      monthlyPrice(sliderThumb.value) * 12 -
      monthlyPrice(sliderThumb.value) * 3
    ).toFixed(2)
  : "$" + monthlyPrice(sliderThumb.value).toFixed(2);

// --On slider change
sliderThumb.oninput = function () {
  progress.style.width = `${sliderThumb.value * 5}%`;
  pageViews.innerHTML = pageviews(sliderThumb.value);
  pricing.innerHTML = periodRadio.checked
    ? "$" +
      (
        monthlyPrice(sliderThumb.value) * 12 -
        monthlyPrice(sliderThumb.value) * 3
      ).toFixed(2)
    : "$" + monthlyPrice(sliderThumb.value).toFixed(2);
};

// --On Radio change
periodRadio.addEventListener("change", () => {
  pricePeriod.innerHTML = periodRadio.checked ? "/year" : "/month";
  pricing.innerHTML = periodRadio.checked
    ? "$" +
      (
        monthlyPrice(sliderThumb.value) * 12 -
        monthlyPrice(sliderThumb.value) * 3
      ).toFixed(2)
    : "$" + monthlyPrice(sliderThumb.value).toFixed(2);
});

function pageviews(range) {
  switch (range) {
    case "0":
      return "10k";
      break;
    case "5":
      return "50k";
      break;
    case "10":
      return "100k";
      break;
    case "15":
      return "500k";
      break;
    default:
      return "1M";
      break;
  }
}

function monthlyPrice(range) {
  switch (range) {
    case "0":
      return 8;
      break;
    case "5":
      return 12;
      break;
    case "10":
      return 16;
      break;
    case "15":
      return 24;
      break;
    default:
      return 36;
      break;
  }
}
