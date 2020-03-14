import { Grid, makeStyles, Typography } from "@material-ui/core";
import * as React from "react";
import notFound from "../assets/images/undraw_page_not_found_su7k.svg";

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: 56,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  content: {
    textAlign: "center"
  },
  image: {
    marginTop: 50,
    display: "inline-block",
    maxWidth: "100%",
    width: 560
  }
}));

export const NotFoundScene: React.FC = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <Typography variant="h3">
              404: The page you are looking for isn’t here
            </Typography>
            <Typography variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <img alt="Not found" className={classes.image} src={notFound} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
