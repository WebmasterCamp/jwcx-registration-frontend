const isDev = process.env.NODE_ENV === 'development'

export function send(level, ...data) {
  if (isDev) {
    console[level](...data)
    return
  }

  if (window.FS) {
    window.FS.log(level, ...data)
  }

  if (window.Raven) {
    if (level === 'error' || level === 'warn') {
      window.Raven.captureMessage(data.join(' '))
    }
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
