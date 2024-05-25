module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/tests/*.test.ts'], // Padrão para encontrar arquivos de teste
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensões de arquivos que Jest reconhecerá
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest' // Usando ts-jest para transpilar TypeScript
  }
};
