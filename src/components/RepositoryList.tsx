import * as React from "react";
import { inject, observer } from "mobx-react";
import { RepoStore } from "../stores/RepoStore";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  LinearProgress,
  TableCell
} from "@material-ui/core";

interface RepositoryListProps {
  repo?: RepoStore;
}
export const RepositoryList: React.FC<RepositoryListProps> = inject("repo")(
  observer(props => {
    React.useEffect(() => {
      props.repo?.fetchRepos();
    }, [props.repo]);

    return (
      <Table>
        <TableHead>
          <TableCell>Full Name</TableCell>
          <TableCell>Url</TableCell>
          <TableCell>Language</TableCell>
        </TableHead>
        <TableBody>
          {props.repo?.isLoading ? (
            <LinearProgress />
          ) : (
            props.repo?.repos.map(repo => (
              <TableRow>
                <TableCell>{repo.full_name}</TableCell>
                <TableCell>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </TableCell>
                <TableCell>{repo.language}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    );
  })
);
