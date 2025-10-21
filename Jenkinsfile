pipeline {
    node {
    // Choose the Jenkins agent (any node with Docker installed)
    stage('Checkout') {
        checkout scm
    }

    // Run inside Playwright Docker container
    docker.image('mcr.microsoft.com/playwright:v1.49.0-jammy').inside('-u root:root') {

        stage('Install Dependencies') {
            echo 'Installing Node modules'
            sh 'npm ci'
        }

        stage('Install Playwright Browsers') {
            echo 'Installing Playwright browsers'
            sh 'npx playwright install --with-deps'
        }

        stage('Run Playwright Tests') {
            echo 'Running Playwright tests'
            sh 'npx playwright test --reporter=html'
        }

        stage('Archive Test Report') {
            echo 'Archiving HTML report'
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
        }
    }

    // Cleanup workspace
    stage('Cleanup') {
        cleanWs()
    }
}

}