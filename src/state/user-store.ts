import { makeAutoObservable, ObservableMap, runInAction } from "mobx";
import {
  makePersistable,
  clearPersistedStore,
  getPersistedStore,
  stopPersisting,
  isHydrated,
  isPersisting,
  hydrateStore,
  startPersisting,
  pausePersisting
} from "mobx-persist-store";
// import { getUserRequest } from "../domains/user/user.services";
// import { IUser } from "../domains/user/user.types";

// function mapToObj(map: any): any {
//     const obj = {} as any
//     for (let [k,v] of map)
//       obj[k] = v
//     return obj
// }

type schoolId = string;
export class UserStore {
  users = new ObservableMap<schoolId, { name: string; id: number }>();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    makePersistable(this, {
      name: "UserStore",
    //   properties: ["users"],
        properties: [{
            key: "users",
            serialize: (v) => {
                // return v.join(',');
                return JSON.stringify([...v]);
            },
            deserialize: (v) => {
                // return v.split(',');
                // return new Map(JSON.parse(v));
                return new ObservableMap<schoolId, { name: string; id: number }>(JSON.parse(v));
            },
            // serialize(u) {
            //     //
            // }, 
            // deserialize(u) {
            //     //
            // },
        }],
      storage: window.localStorage,
      debugMode: true
    });
  }

  get isHydrated(): boolean {
    return isHydrated(this);
  }

  get isPersisting(): boolean {
    return isPersisting(this);
  }
  addUser(schoolId: schoolId, user: { name: string; id: number }) {
    console.log("setuser");
    this.users.set(schoolId, { name: "bob", id: 1 });
  }
  changeUserName(schoolId: schoolId, id: string, name: string) {
    console.log("change username");
    const user = this.users.get(schoolId);
    if (user) {
      user.name = name;
    }
  }
  clearUsers() {
    this.users.clear();
  }
}
