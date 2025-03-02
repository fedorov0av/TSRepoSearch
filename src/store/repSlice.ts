import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Rep {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  html_url: string;
}

interface RepState {
  repos: Rep[];
  page: number;
  last_query: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: RepState = {
  repos: [],
  page: 0,
  last_query: "",
  loading: false,
  error: null,
};

export const fetchRepos = createAsyncThunk(
  "repos/fetchRepos",
  async (query: string) => {
    const GITHIB_API_URL: string = "https://api.github.com/search/repositories";
    const response = await fetch(
      `${GITHIB_API_URL}?q=${query}&sort=stars&order=desc`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    const data = await response.json();
    return data.items;
  }
);

const repSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    clearRepos: (state) => {
      state.repos = [];
    },
    nextPage: (state) => {
      state.page += 1;
    },
    clearPage: (state) => {
      state.page = 0;
    },
    setLastQuery: (state, action) => {
      state.last_query = action.payload;
    },
    clearLastQuery: (state) => {
      state.last_query = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repos.push(...action.payload);
        state.loading = false;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch repos";
      });
  },
});

export const { clearRepos, nextPage, clearPage, setLastQuery, clearLastQuery } =
  repSlice.actions;
export default repSlice.reducer;
export type { Rep };
