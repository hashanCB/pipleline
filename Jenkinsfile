pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            reuseNode true
        }
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                ls -la
                node --version
                npm --version
                npm ci
                npm run build
                ls -la build
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                echo "Checking if build/index.html exists..."
                if [ -f build/c.html ]; then
                    echo "File exists: build/index.html"
                else
                    echo "Error: build/index.html not found!"
                    exit 1
                fi
                '''
            }
        }
    }
}
