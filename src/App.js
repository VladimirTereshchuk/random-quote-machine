import React, { useEffect, useState } from "react";
import { random } from "lodash";
// import "typeface-roboto";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import QuoteMachine from "./components/QuoteMachine";
import { makeStyles } from "@material-ui/core/styles";

// const styles = {
//   container: {
//     alignItems: "center",
//     display: "flex",
//     height: "100vh",
//     backgroundColor: "red",
//   },
// };

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
    backgroundColor: (props) => props.randomColor,
    // backgroundColor: a[random(0, a.length - 1)],
  },

  card: {
    color: (props) => props.randomColor,
    padding: "1rem",
  },
  button: {
    backgroundColor: (props) => props.randomColor,
    color: "white",
    boxShadow: "2px 4px #999",

    "&:hover": {
      backgroundColor: (props) => props.randomColor,
      // transform: "translateY(-2px) translateX(-2px)",
      "&:active": {
        //       background-color: #3e8e41;
        boxShadow: "0 1px #666",
        transform: "translateY(4px)",
      },
    },
  },
  quoteMark: {
    fontSize: "1.5rem",
    color: (props) => props.randomColor,
  },
});

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

  const a = [
    "rgb(243, 156, 18)",
    "rgb(39, 174, 96)",
    "rgb(22, 160, 133)",
    "rgb(189, 187, 153)",
    "rgb(22, 160, 133)",
    "rgb(44, 62, 80)",
    "rgb(251, 105, 100)",
    "rgb(71, 46, 50)",
    "rgb(231, 76, 60)",
  ];
  const clasess = useStyles({ randomColor: a[random(0, a.length - 1)] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
      );
      const quotes = await data.json();
      setQuotes(quotes);
      setSelectedQuoteIndex(random(0, quotes.length - 1));
    };
    fetchData();
  }, []);

  useEffect(() => {}, [quotes]);

  function getSelectedQuote() {
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  }

  /**
   * Returns an integer representing an index in state.quotes
   * If state.quotes is empty, returns undefined
   */
  // function generateNewQuoteIndex() {
  //   if (!quotes.length) {
  //     return undefined;
  //   }
  //   return random(0, quotes.length - 1);
  // }

  function assignNewQuoteIndex() {
    setSelectedQuoteIndex(random(0, quotes.length - 1));
  }

  return (
    <Grid
      className={clasess.container}
      id="quote-box"
      justify="center"
      container
    >
      <Grid xs={11} sm={8} md={6} lg={5} item>
        {getSelectedQuote() ? (
          <QuoteMachine
            clasess={clasess}
            selectedQuote={getSelectedQuote()}
            assignNewQuoteIndex={assignNewQuoteIndex}
          />
        ) : null}
      </Grid>
    </Grid>
  );
}
