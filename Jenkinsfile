pipeline {
    agent { dockerfile true }
    stages {
        stage('chown /.npm'){
            steps {
                sh 'sudo chown -R 995:991 "/.npm" '
            }
        }
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