export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "khwy-test-notes"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://v2gn7bin12.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_D3sE7GMbB",
      APP_CLIENT_ID: "7rst899633dre7ke1s5t4lv7uj",
      IDENTITY_POOL_ID: "us-west-2:c503aacf-0e8c-43f6-a440-4af44a549349"
    }
  };