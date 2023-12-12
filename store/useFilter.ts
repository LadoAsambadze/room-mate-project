import { create, StoreApi } from 'zustand'

interface FilterStore {
  Filter: boolean
  setFilter: (newFilter: boolean) => void
}

const useFilter = create<FilterStore>(
  (set: StoreApi<FilterStore>[`setState`]) => ({
    Filter: true,
    setFilter: (newFilter: boolean) => set(() => ({ Filter: newFilter })),
  })
)

export default useFilter
