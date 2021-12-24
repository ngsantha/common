import { AppConfiguration } from './app-configuration';

describe('AppConfiguration', () => {
  let configuration: AppConfiguration;
  let config: any;

  beforeEach(() => {
    config = {};
    configuration = new AppConfiguration(config);
  });

  describe('get', () => {
    it('should return value from provided key path', () => {
      config.foo = 123;

      expect(configuration.get('foo')).toBe(123);
    });

    it('should return value from provided key path', () => {
      config.foo = {
        bar: 'baz'
      };

      expect(configuration.get('foo.bar')).toBe('baz');
    });

    it('should return value from provided key path with arbitrary nesting', () => {
      config.foo = {
        bar: {
          baz: 123
        }
      };

      expect(configuration.get('foo.bar.baz')).toBe(123);
    });

    it('should return default value when provided path is not defined', () => {
      expect(configuration.get('foo.bar', 'fallback')).toBe('fallback');
    });
  });
});
