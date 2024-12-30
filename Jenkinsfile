pipeline {
    agent {
        docker {
            image 'node:18-alpine' // Use Node.js Docker image
            reuseNode true
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                echo "Installing dependencies..."
                npm ci
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                echo "Building the Next.js project..."
                npm run build
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                echo "Running Jest tests..."
                npm test
                '''
            }
        }
    }

    post {
        always {
            junit 'test-results/junit.xml' // Publish JUnit test results
        }
    }
}
