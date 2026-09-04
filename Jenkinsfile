pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing application...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to Proxmox HCI Cluster...'
            }
        }
    }
}
