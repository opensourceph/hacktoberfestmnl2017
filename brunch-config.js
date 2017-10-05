// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'hacktober.app.js': [
          'node_modules/**/*',
          'app/js/**/*',
        ]
      }
    },
    stylesheets: {
      joinTo: {
        'hacktober.app.css': [
          'node_modules/**/*',
          'app/css/**/*',
        ]
      }
    }
  },
  plugins: {
    sass: {
      options: {
        includePaths: [
          'node_modules'
        ]
      }
    }
  },
  npm: {enabled: true}
}
