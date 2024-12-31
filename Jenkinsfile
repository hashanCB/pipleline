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
                sh 'npm ci' // Installs project dependencies
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Next.js project...'
                sh 'npm run build' // Builds the Next.js project
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test' // Runs the test cases
            }
        }

        stage('Deploy to Vercel') {
            steps {
                echo 'Deploying to Vercel...'
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    sh 'npm install -g vercel' // Installs the Vercel CLI globally
                    sh 'vercel --token $VERCEL_TOKEN --prod' // Deploys the project to Vercel
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
