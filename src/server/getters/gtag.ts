/**
 * @file BFF GA getter
 * @module server.getter.gtag
 * @author Surmon <https://github.com/surmon-china>
 */

import axios from 'axios'
import { IDENTITIES } from '@/config/app.config'
import { getGAScriptURL } from '@/transforms/gtag'

export const getGTagScript = async () => {
  const response = await axios.get<string>(
    getGAScriptURL(IDENTITIES.GOOGLE_ANALYTICS_TRACKING_ID),
    {
      timeout: 6000
    }
  )
  if (response.status === 200) {
    return response.data
  } else {
    throw response.data
  }
}
