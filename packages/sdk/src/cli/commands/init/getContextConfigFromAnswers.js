module.exports = async ({
  id,
  label,
  description,
  recommended,
}) => ({
  id,
  label,
  description,
  recommended,
  trustLevel: 'stable',
  endpoint: {
    features: [
      {
        type: 'URL',
        name: 'url',
        label: 'Endpoint URL',
        required: true,
        helper: 'e.g. use http://localhost:4000',
      },
    ],
  },
  job: {
    features: [
      {
        type: 'ENDPOINT',
        name: 'endpoint',
        label: 'Endpoint',
        required: true,
      },
      {
        type: 'SELECT',
        name: 'dataset',
        label: 'Dataset',
        required: true,
        options: {
          script: './jobForm.js',
          function: 'getDatasets',
        },
        dependsOn: [
          'endpoint',
        ],
      },
    ],
  },
});
