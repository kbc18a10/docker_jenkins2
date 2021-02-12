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
        stage('npm ls'){
            steps {
                sh 'npm ls'
            }
        }
        stage('Test') {
            steps {
                sh 'npx mocha ./tests/systemtest.js'
            }
        }
    }
}