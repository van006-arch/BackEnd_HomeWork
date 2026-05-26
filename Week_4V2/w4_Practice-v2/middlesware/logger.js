import fs from 'fs';

function logger(req, res, next) {
    const time = new Date().toISOString();
    const logLine = `[${time}] ${req.method} ${req.url}\n`;

    fs.appendFile('logs/access.log', logLine, (err) => {
        if (err) console.error('Failed to write log:', err);
    });

    next();
}

export default logger; 