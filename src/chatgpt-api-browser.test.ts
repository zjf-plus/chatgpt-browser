import test from 'ava'
import dotenv from 'dotenv-safe'
import { executablePath } from 'puppeteer'

import { ChatGPTAPIBrowser } from './chatgpt-api-browser'

// dotenv.config()

const isCI = !!process.env.CI

test('chatgpt browser invalid param', async (t) => {
  t.timeout(30 * 1000) // 30 seconds
  const api = new ChatGPTAPIBrowser({
    email: 'zjf.zorn@icloud.com',
    password: '1232',
    markdown: true,
    minimize: true,
    executablePath: executablePath(),
    isGoogleLogin: false
  })

  await api.initSession()
})
