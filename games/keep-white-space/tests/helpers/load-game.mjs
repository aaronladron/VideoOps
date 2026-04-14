import fs from 'node:fs';
import vm from 'node:vm';

function createCanvasContext(logs = {}) {
  const entries = logs.entries ?? [];

  return {
    entries,
    arc(...args) { entries.push(['arc', ...args]); },
    beginPath() { entries.push(['beginPath']); },
    clearRect(...args) { entries.push(['clearRect', ...args]); },
    closePath() { entries.push(['closePath']); },
    fill() { entries.push(['fill']); },
    fillRect(...args) { entries.push(['fillRect', ...args]); },
    fillText(...args) { entries.push(['fillText', ...args]); },
    getImageData() {
      return {
        data: new Uint8ClampedArray(40000).fill(255)
      };
    },
    lineTo(...args) { entries.push(['lineTo', ...args]); },
    moveTo(...args) { entries.push(['moveTo', ...args]); },
    putImageData(...args) { entries.push(['putImageData', ...args]); },
    stroke() { entries.push(['stroke']); },
    strokeText(...args) { entries.push(['strokeText', ...args]); }
  };
}

export function createSpaceWordStubs() {
  const logs = {
    alerts: [],
    intervals: [],
    listeners: [],
    rafCount: 0,
    timeouts: []
  };

  const context2d = createCanvasContext(logs);
  const canvas = {
    clientWidth: 800,
    clientHeight: 600,
    height: 0,
    style: {},
    width: 0,
    addEventListener(type, handler) {
      logs.listeners.push([type, handler]);
    },
    getContext() {
      return context2d;
    }
  };
  const retry = { style: { visibility: 'visible' } };
  const nav = { style: { visibility: 'visible', cursor: 'default' } };
  const text = { innerHTML: '' };
  const cronometer = { innerHTML: '' };
  const timefinish = { innerHTML: '' };

  const document = {
    addEventListener(type, handler) {
      logs.listeners.push([type, handler]);
    },
    getElementById(id) {
      if (id === 'canvas') return canvas;
      if (id === 'retry') return retry;
      return null;
    },
    getElementsByClassName(name) {
      if (name === 'text') return [text];
      if (name === 'cronometer') return [cronometer];
      return [];
    },
    getElementsByTagName(name) {
      if (name === 'canvas') return [canvas];
      if (name === 'nav') return [nav];
      return [];
    },
    querySelector(selector) {
      if (selector === '.text') return text;
      if (selector === '.cronometer') return cronometer;
      if (selector === '.lifebar') return { innerHTML: '' };
      if (selector === '.timefinish') return timefinish;
      return null;
    }
  };

  const window = {
    addEventListener(type, handler) {
      logs.listeners.push([type, handler]);
    },
    requestAnimationFrame() {
      logs.rafCount += 1;
    }
  };

  class AudioContextStub {
    constructor() {
      this.currentTime = 0;
      this.destination = {};
    }

    createGain() {
      return {
        connect() {},
        gain: {
          exponentialRampToValueAtTime() {},
          value: 0
        }
      };
    }

    createOscillator() {
      return {
        connect() {},
        frequency: { value: 0 },
        start() {}
      };
    }
  }

  const math = Object.create(Math);
  Object.defineProperty(math, 'random', {
    configurable: true,
    writable: true,
    value: () => 0.5
  });

  return {
    AudioContext: AudioContextStub,
    Math: math,
    clearInterval() {},
    clearTimeout() {},
    console,
    document,
    location: { href: 'http://localhost/' },
    logs,
    nav,
    requestAnimationFrame: () => {},
    retry,
    setInterval(handler) {
      logs.intervals.push(handler);
      return logs.intervals.length;
    },
    setTimeout(handler) {
      logs.timeouts.push(handler);
      return logs.timeouts.length;
    },
    text,
    cronometer,
    timefinish,
    window
  };
}

export function createKeepWhiteSpaceStubs() {
  const logs = {
    entries: [],
    listeners: [],
    rafCount: 0
  };

  const context2d = createCanvasContext(logs);
  const gamepanel = {
    children: [],
    appendChild(node) {
      this.children.push(node);
    }
  };
  const document = {
    addEventListener(type, handler) {
      logs.listeners.push([type, handler]);
    },
    createElement(tagName) {
      if (tagName !== 'canvas') {
        return { style: {}, appendChild() {} };
      }

      return {
        height: 0,
        style: {},
        width: 0,
        getContext() {
          return context2d;
        }
      };
    },
    getElementById(id) {
      if (id === 'gamepanel') return gamepanel;
      return null;
    }
  };
  const window = {
    addEventListener(type, handler) {
      logs.listeners.push([type, handler]);
    },
    innerHeight: 900,
    innerWidth: 1200,
    requestAnimationFrame() {
      logs.rafCount += 1;
    }
  };

  return {
    clearTimeout() {},
    console,
    document,
    gamepanel,
    logs,
    requestAnimationFrame() {
      logs.rafCount += 1;
    },
    setTimeout(handler) {
      return handler;
    },
    window
  };
}

export function loadGameScript(scriptPath, stubs) {
  const source = fs.readFileSync(scriptPath, 'utf8');
  const fileName = scriptPath instanceof URL ? scriptPath.pathname : String(scriptPath);

  const context = {
    ...stubs,
    Array,
    Boolean,
    Date,
    JSON,
    Math: stubs.Math ?? Math,
    Number,
    Object,
    Promise,
    RegExp,
    String,
    URL,
    AudioContext: stubs.AudioContext,
    alert: stubs.alert ?? (() => {}),
    clearInterval: stubs.clearInterval ?? clearInterval,
    clearTimeout: stubs.clearTimeout ?? clearTimeout,
    console,
    document: stubs.document,
    globalThis: null,
    location: stubs.location ?? { href: 'http://localhost/' },
    requestAnimationFrame: stubs.requestAnimationFrame ?? (() => {}),
    setInterval: stubs.setInterval ?? setInterval,
    setTimeout: stubs.setTimeout ?? setTimeout,
    window: stubs.window ?? {}
  };

  context.globalThis = context;
  context.window = context.window ?? context;
  context.window.window = context;
  context.window.document = context.document;
  if (!context.window.addEventListener) {
    context.window.addEventListener = () => {};
  }
  if (!context.window.requestAnimationFrame) {
    context.window.requestAnimationFrame = () => {};
  }

  vm.createContext(context);
  vm.runInContext(source, context, { filename: fileName });
  return context;
}
