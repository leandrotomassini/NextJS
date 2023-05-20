import { FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";

import { EntryCard } from "./";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(
        () => entries.filter(entry => entry.status === status),
        [entries]
    );

    return (
        <div>
            <Paper sx={{
                height: 'calc(100vh - 50px)',
                overflow: 'scroll',
                backgroundColor: 'transparent',
                padding: '1px 2px',
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                    width: "3px",
                    bgcolor: "#454545",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "#4a148c",
                    border: "7px none #fffff",
                    borderRadius: "10px",
                },
            }}>
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
};
