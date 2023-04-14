export class HtmlError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = "HtmlError";
  }
}
export class ValidateError extends Error {
  property: string
  constructor(property: string, message: string) {
    super(message);
    this.name = "ValidateError";
    this.property = property;
  }
}