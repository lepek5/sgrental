const Helpers = {
  parse: {
    datetimeToDate: (datetime: string) => {
      const date = new Date(datetime);
      return date.toISOString().split("T")[0];
    },
    fromEntry: (arr: any[]) => { return { key: arr[0], value: arr[1] } }
  }
}
export default Helpers;