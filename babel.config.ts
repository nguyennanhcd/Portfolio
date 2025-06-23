module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          useBuiltIns: 'usage',
          corejs:3
        },
      },
    ],
  ],
   plugins: [
    [
      'transform-imports',
      {
        'react-icons/io': {
          transform: 'react-icons/io/{{member}}',
          preventFullImport: true,
        },
      },
    ],
  ],
};
