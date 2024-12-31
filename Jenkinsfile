pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            reuseNode true
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Next.js project...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                echo 'Deploying to Vercel...'
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    sh 'npx vercel --token $VERCEL_TOKEN --prod --yes'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
            junit 'test-results/junit.xml' // Publishes test results
        }
        success {
            echo 'Deployment to Vercel was successful!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}
