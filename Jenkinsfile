pipeline {
    agent any

    stages {
        stage('Test Setup') {
            steps {
                echo 'Jenkins Pipeline is running...'
            }
        }

        stage('Run Shell Command') {
            steps {
                sh 'echo "This is a test pipeline!"'
            }
        }

        stage('Complete') {
            steps {
                echo 'Pipeline execution completed successfully.'
            }
        }
    }
}
