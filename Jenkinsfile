pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'jenkins-mocha test ./tests/systemtest.js'
            }
        }
    }
}