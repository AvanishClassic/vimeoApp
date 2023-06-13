import moment from "moment";

export const convertSecondToMinutes = (duration: string) => {
  return moment.duration(duration, "seconds").asMinutes().toFixed(0);
};

export function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .reduce(
      (s, c) => s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "),
      ""
    );
}
