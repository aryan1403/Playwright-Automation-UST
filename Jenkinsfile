pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Playwright in Docker') {
            steps {
                // Run Playwright inside Docker container
                sh '''
                    docker run --rm -v $PWD:/work -w /work mcr.microsoft.com/playwright:v1.49.0-jammy bash -c "
                    npm ci &&
                    npx playwright install --with-deps &&
                    npx playwright test --reporter=html
                    "
                '''
            }
        }

        stage('Archive HTML Report') {
            steps {
                publishHTML([
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report'
                ])
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
