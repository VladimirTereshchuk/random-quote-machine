import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote, clasess }) => (
  <Card
    style={{
      minHeight: "23rem",
      position: "relative",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent style={{ display: "flex" }}>
      <FontAwesomeIcon className={clasess.quoteMark} icon={faQuoteLeft} />

      <Typography
        id="text"
        className={clasess.card}
        style={{ fontSize: "1.2rem" }}
      >
        {selectedQuote.quote}
      </Typography>
    </CardContent>
    <CardContent style={{ padding: "0 1rem" }}>
      <Typography
        id="text"
        className={clasess.card}
        style={{ textAlign: "right" }}
      >
        -<span id="author">{selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardContent
      style={{
        alignSelf: "flex-end",
        position: "absolute",
        bottom: "0rem",
        width: "90%",
        margin: "0 auto",
      }}
    >
      <CardActions
        style={{
          display: "flex",
          flexDirection: "row",

          justifyContent: "space-between",
        }}
      >
        <IconButton
          className={clasess.button}
          id="tweet-quote"
          target="_blank"
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`
          )}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
        <Button
          id="new-quote"
          className={clasess.button}
          size="small"
          onClick={assignNewQuoteIndex}
        >
          Next Quote
        </Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default QuoteMachine;
