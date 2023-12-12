import { create, StoreApi } from 'zustand'

interface MenuStore {
  menu: boolean
  setMenu: (newMenu: boolean) => void
}

const useMenu = create<MenuStore>((set: StoreApi<MenuStore>[`setState`]) => ({
  menu: true,
  setMenu: (newMenu: boolean) => set(() => ({ menu: newMenu })),
}))

export default useMenu
