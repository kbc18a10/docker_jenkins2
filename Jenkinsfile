pipeline {
    agent { dockerfile true }
   environment {
        HOME = '.'
    }
    stages {
        stage('npm install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npx mocha ./tests/systemtest.js'
            }
        }
    }
}