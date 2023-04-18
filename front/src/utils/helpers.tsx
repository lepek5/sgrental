const Storage = (type: string, key: string, value?: string) => {
  switch (type) {
    case "get":
      return JSON.parse(localStorage.getItem(key));
    case "set":
      localStorage.setItem(key, JSON.stringify(value));
      return;
    default:
      break;
  }
}
const parseFromEntry = (arr: any[]) => { return { key: arr[0], value: arr[1] } };
export {parseFromEntry, Storage};