const isDev = process.env.NODE_ENV === 'development'

export function send(level = 'log', ...data) {
  try {
    // Only log to console if in development mode!
    if (isDev) {
      console[level](...data)
    }

    // Silently log to FullStory
    if (window.FS) {
      // AdBlock does block FS.log, so we have to check for that!
      if (window.FS.log) {
        window.FS.log(level, ...data)
      }
    }

    // Report errors when level is set to error or warn.
    if (level === 'error' || level === 'warn') {
      if (window.Raven) {
        // Just in case AdBlock might also block Sentry's captureMessage
        if (window.Raven.captureMessage) {
          window.Raven.captureMessage(data.join(' '))
        }
      }
    }
  } catch (err) {
    console.warn('Logger Error:', err.message)
  }
}

export function debug(...data) {
  send('debug', ...data)
}

export function log(...data) {
  send('log', ...data)
}

export function info(...data) {
  send('info', ...data)
}

export function warn(...data) {
  send('warn', ...data)
}

export function error(...data) {
  send('error', ...data)
}

export default {send, debug, log, info, warn, error}
