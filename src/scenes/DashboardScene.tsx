import { Card, CardContent, CardHeader, Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import { RepositoryList } from "../components/RepositoryList";

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

export const DashboardScene: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <Card>
              <CardHeader title="Repositories"/>
              <CardContent>
                  <RepositoryList/>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
