// ---------------------------------------------------------------------------
// YOUR SITE SETTINGS. This is the only file you need to edit (plus your CSVs).
// Edit it on github.com: open this file, click the pencil icon, change the
// text between the quotation marks, then click "Commit changes".
// ---------------------------------------------------------------------------

window.SITE_CONFIG = {

  // The name shown at the top of your site. A nickname or made-up forecaster
  // name is fine and recommended. Do not put your real name, email, photo,
  // or anything else that identifies you on this site.
  forecaster_name: "LeGoat James",

  // One short line under the name (optional).
  tagline: "Final Midterm 2026 Forecast",

  // A plain-language description of YOUR model, in your own words. Each line in
  // quotes is one paragraph, followed by a comma. Two or three short paragraphs:
  // what your forecast is built from, how you set the national environment,
  // and how you handled uncertainty. Until you fill this in, your site shows a
  // reminder in this spot.
  //
  // For example, the class model could be described like this (describe your
  // own model):
  //   "A fundamentals-only model (no polls). Each race's predicted Democratic share combines the district's partisan lean, incumbency, and a forecast of the national House vote from presidential approval, gas prices, income and the midterm penalty.",
  //   "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals come from 10,000 simulated elections.",
   method: [
    "Each race's predicted Democratic share combines the district's or state's partisan lean, incumbency, challenger spending, and a forecast of the national House vote. The incumbency advantage is allowed to be smaller from 2018 on, when it dropped sharply. Challenger spending counts only the challenger's money against an incumbent, and both candidates' money in open seats, because past research and my own tests found that challenger spending matters far more than incumbent spending. House and Senate races use the same model, fit separately on contested races from 2012 to 2024.",
    "The national environment blends two estimates. The first is a fundamentals model based on presidential approval and the midterm penalty. The second is the House generic-ballot polling average, adjusted for the polls' history of overstating Democrats. The polls get about two-thirds of the weight because they have been more accurate, which puts Democrats at about 53.4% of the national House vote. Senate polls are not used.",
    "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals come from 10,000 simulated elections, each using the same national environment for the House and the Senate. Before finalizing, I tested each variable on the 2022 and 2024 elections. I replaced my earlier measure, each candidate's share of total spending, because it made close races less accurate and tilted predictions toward Democrats."
  ],
  // Your data files. Leave these alone unless you renamed your files.
  forecast_file: "forecast_cavazos.csv",
  sims_file: "seat_sims_cavazos.csv",

  // Course links. Leave these as they are.
  links: {
    class_forecast: "https://kevinmdeluca.com/forecast/class/",
    tracker: "https://kevinmdeluca.com/forecast/",
    gallery: "https://kevin-deluca-polisci.github.io/plsc2219-forecasts/gallery.html"
  }
};
