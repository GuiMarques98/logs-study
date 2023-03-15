export enum LogsType {
  INFO,
  ERROR,
  WARN,
  SUCCESS,
  AUDIT
}

export default interface Log {
  type: LogsType,
  timestamp: Date,
  log: String,
}
