import del from 'del';
import config from '../config';

const clean = () => del(config.client.dest);

export default clean;
