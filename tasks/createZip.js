// require modules
import { existsSync, createWriteStream, mkdirSync } from 'fs';
import { basename } from 'path';
import archiver from 'archiver';
import { version, buildDir, distDir } from '../buildConfig';

// check that build exists
if (!existsSync(distDir)) {
	throw new Error('production build does not exist. run `npm run build` first.');
}

// create a file to stream archive data to.
if (!existsSync(buildDir)) {
	mkdirSync(buildDir);
}

const output = createWriteStream(`${buildDir}/release-${version}.zip`);
const archive = archiver('zip', { zlib: { level: 9 } });

archive
	.on('warning', (err) => {
		if (err.code === 'ENOENT') {
			console.warn('Archive error', err);
		} else {
			throw err;
		}
	})
	.on('error', err => { throw err; });

output.on('close', () => { console.info(`Archive ${basename(output.path)}: ${archive.pointer()} bytes written.`); })

archive.pipe(output);
archive.glob('**/*', { cwd: distDir });
archive.finalize();
