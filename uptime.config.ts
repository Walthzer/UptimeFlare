const pageConfig = {
  // Title for your status page
  title: "Offcourse Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://offcourse.uk', label: 'Offcourse', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 5,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'gulag',
      // `name` is used at status page and callback message
      name: 'Offcourse Gulag',
      // `method` should be a valid HTTP Method
      method: 'POST',
      // `target` is a valid URL
      target: 'https://gulag.offcourse.uk/OK',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'VPL Execution Server GULAG',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      //statusPageLink: 'https://example.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      // [OPTIONAL] body to be sent
      body: 'Uptimeflare PING',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'OK',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'jail',
      // `name` is used at status page and callback message
      name: 'Offcourse Jail',
      // `method` should be a valid HTTP Method
      method: 'POST',
      // `target` is a valid URL
      target: 'https://jail.offcourse.uk/OK',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'VPL Execution Server JAIL',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      //statusPageLink: 'https://example.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      // [OPTIONAL] body to be sent
      body: 'Uptimeflare PING',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'OK',
    },
    // // Example TCP Monitor
    // {
    //   id: 'test_tcp_monitor',
    //   name: 'Example TCP Monitor',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'TCP_PING',
    //   // `target` should be `host:port` for tcp monitors
    //   target: '1.2.3.4:22',
    //   tooltip: 'My production server SSH',
    //   statusPageLink: 'https://example.com',
    //   timeout: 5000,
    // },
  ],
  notification: {
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
