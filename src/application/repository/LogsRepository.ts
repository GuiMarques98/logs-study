import { Moment } from "moment";
import Log from "../../domain/entity/Logs";

export interface LogsParams {
  start: Moment,
  end: Moment
}

export default interface LogsRepository {
  getLogs(params: LogsParams): Promise<Log[]>;
  createLog(log: Log): Promise<Log>;
}