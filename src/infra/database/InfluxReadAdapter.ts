import Connection from "./Connection";
import { InfluxDB } from '@influxdata/influxdb-client'

export default class InfluxReadAdapter implements Connection {
	connection;
	constructor() {
		this.connection = new InfluxDB({
			url: 'localhost',
			token: 'some token'
		}).getQueryApi('curia');
	}

	async query(statement: string, params: any): Promise<any> {
		const numParams = (statement.match(/.*?([\?]).*?/g) || []).length ?? 0;
		let completeQuery = statement;
		for (let i = 0; i < numParams; i++) {
			completeQuery = completeQuery.replace('?', params[i]);
		}
		return this.connection.queryRaw(completeQuery);
	}

	async close(): Promise<void> { }
}
