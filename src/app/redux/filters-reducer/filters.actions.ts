import { createAction, props } from "@ngrx/store";
import { FiltersState } from "./filters.reducer";


export const updateSortType = createAction(
  '[Filters] Sort Type Update ',
  props<{ sortType: "date" | "views" | "likes" | "none"  }>()
);

export const updateFilter = createAction(
  '[Filters] Filter Update ',
  props<{ filterBy: string }>()
);

export const updateFilters = createAction(
  '[Filters] Filters Update',
  props<FiltersState>()
)
