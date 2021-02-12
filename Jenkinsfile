pipeline {
    agent { dockerfile true }
    stages {
        stage('npm install'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npx mocha ./tests/systemtest.js '
            }
        }
    }
}