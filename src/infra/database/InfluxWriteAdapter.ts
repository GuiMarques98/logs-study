import Connection from "./Connection";
import { InfluxDB } from '@influxdata/influxdb-client'

export default class InfluxWriteAdapter implements Connection{
  connection: any;
	constructor () {
    this.connection = new InfluxDB({
      url: 'localhost',
      token: 'some token'
    }).getWriteApi('curia', 'some', 's');
	}

	async query(statement: string, params: any): Promise<any> {
		return this.connection.query(statement, params);
	}

	async close(): Promise<void> {
		await this.connection.$pool.end();
	}
}