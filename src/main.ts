const imperial = document.querySelector<HTMLElement>(".imperial");
const metric = document.querySelector<HTMLElement>(".metric");
const toggleMetric = document.querySelectorAll<HTMLElement>(".toggleMetric");
const toggleImperial =
  document.querySelectorAll<HTMLElement>(".toggleImperial");
const reload_Api = document.querySelector<HTMLElement>(".reload_Api");
const units_Toggle = document.querySelector<HTMLElement>(".units_Toggle");
const units_Expanded = document.querySelector<HTMLElement>("#units_Expanded");
const search_Input = document.querySelector<HTMLInputElement>(".search_Input");
const search_Submit =
  document.querySelector<HTMLInputElement>("#search_Submit");
const switch_Forecast_Day = document.querySelector<HTMLElement>(
  ".switch_Forecast_Day"
);
const forecast_Days_Expand = document.querySelector<HTMLElement>(
  ".forecast_Days_Expand"
);
const search_Suggestion_List = document.querySelector<HTMLElement>(
  ".search_Suggestion_List"
);
const day_Forecast_details = document.querySelector<HTMLElement>(
  ".day_Forecast_details"
);

let currentUnit = "metric";
let currentLocation: placeDetails = {
  locationName: "Lucknow",
  lat: "26.83",
  lon: "80.93",
};

/* Default Weather Load On Landing */
setTimeout(() => {
  getCord({
    locationName: "Lucknow",
    lat: "26.83",
    lon: "80.93",
  });
}, 1800);

function toggleExpandables() {
  /* Toggle Units */
  if (units_Toggle != null) {
    units_Toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (units_Expanded != null) {
        units_Expanded.classList.toggle("invisible");
      }
    });
  }
  document.body.addEventListener("click", () => {
    if (
      units_Expanded != null &&
      !units_Expanded.classList.contains("invisible")
    ) {
      units_Expanded.classList.add("invisible");
    }
  });

  /* Toggle Search Box */
  if (search_Input != null) {
    search_Input.addEventListener("click", (e) => {
      e.stopPropagation();
      if (search_Suggestion_List != null) {
        search_Suggestion_List.classList.toggle("invisible");
      }
    });
  }
  document.body.addEventListener("click", () => {
    if (
      search_Suggestion_List != null &&
      !search_Suggestion_List.classList.contains("invisible")
    ) {
      search_Suggestion_List.classList.add("invisible");
    }
  });

  /* Toggle Hourly Forecast */
  if (switch_Forecast_Day != null) {
    switch_Forecast_Day.addEventListener("click", (e) => {
      e.stopPropagation();
      if (forecast_Days_Expand != null) {
        forecast_Days_Expand.classList.toggle("invisible");
      }
    });
  }
  document.body.addEventListener("click", () => {
    if (
      forecast_Days_Expand != null &&
      !forecast_Days_Expand.classList.contains("invisible")
    ) {
      forecast_Days_Expand.classList.add("invisible");
    }
  });
}
toggleExpandables();

function toggleUnits() {
  /* Hide Imperial */
  imperial?.addEventListener("click", () => {
    if (!imperial?.classList.contains("hidden")) {
      imperial?.classList.add("hidden");
      toggleImperial.forEach((element) => {
        element.classList.remove("invisible");
      });
      toggleMetric.forEach((element) => {
        element.classList.add("invisible");
      });
      metric?.classList.remove("hidden");
      currentUnit = "imperial";
      if (currentLocation.lat && currentLocation.lon) {
        getCord(currentLocation);
      }
    }
  });
  /* Hide Metric */
  metric?.addEventListener("click", () => {
    if (!metric?.classList.contains("hidden")) {
      metric?.classList.add("hidden");

      toggleImperial.forEach((element) => {
        element.classList.add("invisible");
      });
      toggleMetric.forEach((element) => {
        element.classList.remove("invisible");
      });
      imperial?.classList.remove("hidden");
      currentUnit = "metric";
      if (currentLocation.lat && currentLocation.lon) {
        getCord(currentLocation);
      }
    }
  });
}
toggleUnits();

setTimeout(() => {
  let loading = document.querySelector<HTMLElement>(".loading");
  if (loading != null && !loading.classList.contains("hidden")) {
    loading.classList.add("hidden");
  }
  let firstRandomDataCard = document.querySelector<HTMLElement>(
    ".firstRandomDataCard"
  );
  if (
    firstRandomDataCard != null &&
    firstRandomDataCard.classList.contains("hidden")
  ) {
    firstRandomDataCard.classList.remove("hidden");
    firstRandomDataCard.classList.add("flex");
  }
  let empty_Descriptions = document.querySelectorAll<HTMLElement>(
    ".empty_Descriptions"
  );
  empty_Descriptions.forEach((element) => {
    if (element != null && !element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }
  });
  let weather_Descriptions = document.querySelectorAll<HTMLElement>(
    ".weather_Descriptions"
  );
  weather_Descriptions.forEach((element) => {
    if (element != null && element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  });
  let daily_Forecast_details = document.querySelector<HTMLElement>(
    ".daily_Forecast_details"
  );
  if (
    daily_Forecast_details != null &&
    daily_Forecast_details.classList.contains("text-transparent")
  ) {
    daily_Forecast_details.classList.remove("text-transparent");
  }
  let day_Forecast_details = document.querySelector<HTMLElement>(
    ".day_Forecast_details"
  );
  if (
    day_Forecast_details != null &&
    day_Forecast_details.classList.contains("hidden")
  ) {
    day_Forecast_details.classList.remove("hidden");
  }
  let hourly_Forecast_details = document.querySelector<HTMLElement>(
    ".hourly_Forecast_details"
  );
  if (
    hourly_Forecast_details != null &&
    hourly_Forecast_details.classList.contains("text-transparent")
  ) {
    hourly_Forecast_details.classList.remove("text-transparent");
  }
}, 1000);

interface NominatimResult {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype?: string;
  name?: string;
  display_name: string;
  boundingbox?: string[];
}

function apiFailedMessage() {
  let main = document.querySelector<HTMLElement>(".main");
  if (main != null && !main.classList.contains("hidden")) {
    main.classList.add("hidden");
  }

  let Api_Error_Display =
    document.querySelector<HTMLElement>(".Api_Error_Display");
  if (
    Api_Error_Display != null &&
    Api_Error_Display.classList.contains("hidden")
  ) {
    Api_Error_Display.classList.remove("hidden");
    Api_Error_Display.classList.add("flex");
  }
  reload_Api?.addEventListener("click", () => location.reload());
}

function weatherIcon(weatherCode: number) {
  if (weatherCode === 0 || weatherCode === 1)
    return "assets/images/icon-sunny.webp";
  if (weatherCode === 2) return "assets/images/icon-partly-cloudy.webp";
  if (weatherCode === 3) return "assets/images/icon-overcast.webp";
  if (weatherCode >= 45 && weatherCode <= 48)
    return "assets/images/icon-fog.webp";
  if (weatherCode >= 51 && weatherCode <= 57)
    return "/assets/images/icon-drizzle.webp";
  if (weatherCode >= 61 && weatherCode <= 67)
    return "/assets/images/icon-rain.webp";
  if (weatherCode >= 71 && weatherCode <= 77)
    return "/assets/images/icon-snow.webp";
  if (weatherCode >= 80 && weatherCode <= 82)
    return "/assets/images/icon-drizzle.webp";
  if (weatherCode >= 95 && weatherCode <= 99)
    return "/assets/images/icon-storm.webp";
}

function getDayName(dayNumber: number) {
  if (dayNumber === 1) return "Monday";
  if (dayNumber === 2) return "Tuesday";
  if (dayNumber === 3) return "Wednesday";
  if (dayNumber === 4) return "Thursday";
  if (dayNumber === 5) return "Friday";
  if (dayNumber === 6) return "Saturday";
  if (dayNumber === 0) return "Sunday";
}

function searchSuggestion(response: []) {
  if (search_Suggestion_List != null) {
    search_Suggestion_List.innerHTML = "";
  }
  response.forEach((obj: NominatimResult) => {
    let Inj = document.createElement("div");
    Inj.classList.add(
      "hover:bg-[hsl(240,22%,24%)]",
      "rounded-md",
      "sm:py-1",
      "sm:px-2",
      "w-full",
      "sm:text-sm"
    );
    Inj.innerText = `${obj.display_name} | ${
      obj.class.charAt(0).toUpperCase() + obj.class.slice(1)
    }`;

    let latitude: string = Number(obj.lat).toFixed(2);
    let longitude: string = Number(obj.lon).toFixed(2);
    let locationName: string = obj.name as string;

    Inj.setAttribute("data-lat", latitude);
    Inj.setAttribute("data-lon", longitude);
    Inj.setAttribute("data-locationName", locationName);

    if (search_Suggestion_List != null) {
      search_Suggestion_List.appendChild(Inj);
      Inj.addEventListener("click", (e) => {
        let clicked = e.target as HTMLElement;
        if (search_Input) {
          search_Input.value = clicked.innerText;
        }
        const clickedElement = e.target as HTMLElement;
        const lat = clickedElement.getAttribute("data-lat");
        const lon = clickedElement.getAttribute("data-lon");
        const locationName = clickedElement.getAttribute("data-locationName");
        if (
          locationName != null &&
          locationName != undefined &&
          lat != null &&
          lon !== null
        ) {
          search_Submit?.addEventListener("click", () =>
            getCord({ locationName, lat, lon })
          );
        }
      });
    }
  });
}

let responseGlobal: any = {};
let input_Location = document.querySelector<HTMLInputElement>("#input");
if (input_Location != null) {
  let debounceTimer: number;

  input_Location.addEventListener("input", (e) => {
    e.stopPropagation();
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      /* API For Getting Suggestion And Coordinates */

      async function fetch_Location_Data(send_link_For_Location: string) {
        try {
          const data = await fetch(send_link_For_Location, {
            headers: {
              "User-Agent": "WeatherApp",
              Accept: "application/json",
              "Accept-Language": "en-US,en;q=0.9",
            },
          });
          if (!data.ok) {
            apiFailedMessage();
            throw new Error(`Http error! Status: ${data.status}`);
          }
          const response = await data.json();
          searchSuggestion(response);
        } catch (error) {
          apiFailedMessage();
          console.error("Error Fetching Location Data (async/await):", error);
        }
      }
      let input_Value = input_Location?.value;
      let send_link_For_Location = `https://nominatim.openstreetmap.org/search?q=${input_Value}&format=json`;
      fetch_Location_Data(send_link_For_Location);
    }, 700);
  });
}

/* Get Coordinates Function */

type placeDetails = {
  locationName?: string;
  lat?: string;
  lon?: string;
};

function getCord({ locationName, lat, lon }: placeDetails) {
  currentLocation = { locationName, lat, lon };

  async function getWeatherData() {
    try {
      let baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=precipitation,apparent_temperature,temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`;

      let url =
        currentUnit === "metric"
          ? baseUrl
          : `${baseUrl}&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`;

      let data = await fetch(url);
      if (!data.ok) {
        apiFailedMessage();
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      let response = await data.json();
      responseGlobal = response;
      if (locationName !== undefined) {
        injectData({ locationName, response });
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  getWeatherData();
}

/*  Inject Additional Metrics And Daily Forecast Data Function */

type inject = {
  locationName: string;
  response: any;
};
function injectData({ locationName, response }: inject) {
  /*  Hero Card Weather Metrics Injection */

  let injectLocation = document.querySelector<HTMLElement>(".injectLocation");
  if (injectLocation != null) {
    injectLocation.innerText = locationName;
  }

  let injectDate = document.querySelector<HTMLElement>(".injectDate");
  if (injectDate != null) {
    let date = new Date().toDateString().split(" ");
    let dateDisplay = `${date[0]}, ${date[1]} ${date[2]},${date[3]}`;
    injectDate.innerText = dateDisplay;
  }

  let weather_code = response.daily.weather_code[0];
  let gotWeatherIcon = weatherIcon(weather_code);
  let injectImg = document.querySelector<HTMLElement>(".injectImg");
  if (injectImg != null && gotWeatherIcon != null) {
    injectImg.setAttribute("src", gotWeatherIcon);
    injectImg.setAttribute("alt", weather_code);
  }

  let injectTemperature =
    document.querySelector<HTMLElement>(".injectTemperature");
  if (injectTemperature != null) {
    injectTemperature.innerText = `${response.current.temperature_2m}°`;
  }

  /* Additional Weather Metrics Injection */

  let injectFeelsLike = document.querySelector<HTMLElement>(".injectFeelsLike");
  if (injectFeelsLike != null) {
    injectFeelsLike.innerText = `${response.current.apparent_temperature}°`;
  }

  let injectHumidity = document.querySelector<HTMLElement>(".injectHumidity");
  if (injectHumidity != null) {
    injectHumidity.innerText = `${response.current.relative_humidity_2m}%`;
  }

  let injectWind = document.querySelector<HTMLElement>(".injectWind");
  if (injectWind != null) {
    injectWind.innerText = `${response.current.wind_speed_10m}${response.current_units.wind_speed_10m}`;
  }

  let injectPrecipitation = document.querySelector<HTMLElement>(
    ".injectPrecipitation"
  );
  if (injectPrecipitation != null) {
    injectPrecipitation.innerText = `${response.current.precipitation}${response.current_units.precipitation}`;
  }

  /* Daily Forecast Inejection */

  response.daily.time.slice(0, 7).forEach((dateStr: string, index: number) => {
    let element = document.querySelector<HTMLElement>(`.injectDay${index + 1}`);
    if (!element || !dateStr) return;
    let dayNumber = new Date(dateStr).getDay();
    let dayShort = getDayName(dayNumber)?.slice(0, 3);
    if (dayShort != null) {
      element.innerText = dayShort;
    }
  });

  response.daily.weather_code
    .slice(0, 7)
    .forEach((weatherCodeNum: number, index: number) => {
      let weatherIconDailyForecast = document.querySelector<HTMLElement>(
        `.injectImg${index + 1}`
      );
      let gotWeatherIcon = weatherIcon(weatherCodeNum);
      if (weatherIconDailyForecast != null && gotWeatherIcon != null) {
        weatherIconDailyForecast.setAttribute("src", gotWeatherIcon);
        weatherIconDailyForecast.setAttribute("alt", weatherCodeNum.toString());
      }
    });

  response.daily.temperature_2m_min
    .slice(0, 7)
    .forEach((minTemp: number, index: number) => {
      let injectLowTemp = document.querySelector<HTMLElement>(
        `.injectLowTemp${index + 1}`
      );
      if (injectLowTemp != null) {
        injectLowTemp.innerText = `${minTemp.toString()}°`;
      }
    });

  response.daily.temperature_2m_max
    .slice(0, 7)
    .forEach((maxTemp: number, index: number) => {
      let injectHighTemp = document.querySelector<HTMLElement>(
        `.injectHighTemp${index + 1}`
      );
      if (injectHighTemp != null) {
        injectHighTemp.innerText = `${maxTemp.toString()}°`;
      }
    });

  injectHourlyForecastData(response);
}

/* Injecting Default, Value Of First 24Hr */

const datesdays: Record<string, string> = {};

function getDateFromDayName(dayName: string): string | undefined {
  for (const [key, value] of Object.entries(datesdays)) {
    if (value === dayName) {
      return key;
    }
  }
  return undefined;
}

function changeHourlyForecastDay() {
  const weekday = document.querySelectorAll(".weekday");
  weekday.forEach((day) => {
    day.addEventListener("click", (e) => {
      let selectedDay = e.target as HTMLElement;
      if (day_Forecast_details != null && selectedDay != null) {
        day_Forecast_details.innerText = selectedDay.innerText;
        let selectedDate = getDateFromDayName(selectedDay.innerText);
        injectHourlyForecastWImg(selectedDate, responseGlobal);
        injectHourlyForecastTemp(selectedDate, responseGlobal);
      }
    });
  });
}
changeHourlyForecastDay();

function injectHourlyForecastData(response: any) {
  /* Storing Date-DayName In Object */
  response.daily.time.slice(0, 6).forEach((item: string) => {
    let dayNo = new Date(item).getDay();
    let day = getDayName(dayNo);
    if (day != undefined) {
      datesdays[item] = day;
    }
  });

  /* Injecting Default Hourly Forecast Data */
  let day = Object.values(datesdays)[0];
  if (day_Forecast_details != null && day != undefined) {
    day_Forecast_details.innerText = day;
  }
  let date = Object.keys(datesdays)[0];
  injectHourlyForecastWImg(date, response);
  injectHourlyForecastTemp(date, response);
}

const defaultDate: string = Object.keys(datesdays)[0];
function injectHourlyForecastWImg(
  userSelecteddate: string = defaultDate,
  response: any
) {
  let countWIcon: number = 0;
  response.hourly.time.forEach((hourlyDate: string, index: number) => {
    if (hourlyDate.split("T")[0] === userSelecteddate) {
      let gotHFWeatherIcon = weatherIcon(response.hourly.weather_code[index]);

      let injectLoc = document.querySelector<HTMLElement>(
        `.injectHfWImg${countWIcon}`
      );
      if (gotHFWeatherIcon != undefined) {
        injectLoc?.setAttribute("src", gotHFWeatherIcon);
      }
      countWIcon++;
    }
  });
}

function injectHourlyForecastTemp(
  userSelecteddate: string = defaultDate,
  response: any
) {
  let countWTemp: number = 0;
  response.hourly.time.forEach((hourlyDate: string, index: number) => {
    if (hourlyDate.split("T")[0] === userSelecteddate) {
      let gotHFTemp = response.hourly.temperature_2m[index];
      let injectTemp = document.querySelector<HTMLElement>(
        `.injectTemp${countWTemp}`
      );
      if (injectTemp != null) {
        injectTemp.innerText = `${gotHFTemp}°`;
      }
      countWTemp++;
    }
  });
}
