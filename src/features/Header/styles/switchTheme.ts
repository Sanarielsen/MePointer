import { Switch } from "@mui/material";
import styled from "styled-components";

export const ThemeSwitch = styled(Switch)(({ theme }) => ({

  /* THUMB (bolinha) */
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.colors.secondary,
  },

  /* UNCHECKED */
  '& .MuiSwitch-switchBase': {
    color: theme.colors.moon,
    backgroundColor: theme.colors.secondary,

    '&:hover': {
      backgroundColor: theme.colors.secondary,
    },
  },

  /* CHECKED */
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.colors.sun,
    backgroundColor: theme.colors.secondary,

    '& .MuiSwitch-thumb': {
      backgroundColor: theme.colors.secondary,
    },

    '&:hover': {
      backgroundColor: theme.colors.secondary,
    },
  },

  /* TRACK OFF */
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.colors.moon,
  },

  /* TRACK ON */
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.colors.sun,
  },

}));
